import { News } from '../dist/';
import { NewsItem, DateYearMonth } from '../dist/meta/types';
import { readFileSync, writeFileSync } from 'fs';
import { getDate } from '../dist/lib/Util/util';

const currentNews = JSON.parse(readFileSync('./src/data/news/news_archive.json').toString());

const lastArticle = News.last();

function decrementDate({ year, month }: DateYearMonth): DateYearMonth {
	if (month === 1) {
		return {
			year: year - 1,
			month: 12
		};
	} else {
		return {
			year,
			month: month - 1
		};
	}
}

export async function fetchNewArticles({
	year,
	month
}: DateYearMonth): Promise<NewsItem[] | undefined> {
	if (!lastArticle) throw new Error('Missing last article.');

	let articles = await News.fetchMonth(year, month);
	if (articles[0].title === lastArticle.title) {
		return undefined;
	}

	console.log('Found new articles to add to News Archive.');

	let newArticles: NewsItem[] = [];

	while (!articles.some((article): boolean => article.title === lastArticle.title)) {
		const newDate = decrementDate({ year, month });
		const nextMonth = await News.fetchMonth(newDate.year, newDate.month);
		if (!nextMonth) throw new Error('Unexpected error');
		articles = [...articles, ...nextMonth];
	}

	for (const article of articles) {
		if (article.title === lastArticle.title) return newArticles;
		article.link = article.link
			.replace('https://secure.runescape.com/m=news/', '')
			.replace('?oldschool=1', '');

		newArticles.push(article);
	}

	return newArticles;
}

export default async function prepareNews(): Promise<void> {
	const { year, month } = getDate();
	const newArticles = await fetchNewArticles({ year, month });

	if (newArticles) {
		console.log(`Found ${newArticles.length} news articles to be added.`);
		writeFileSync(
			'./src/data/news/_news_archive.json',
			JSON.stringify(
				[...currentNews, ...newArticles]
					.map(
						(article): NewsItem => ({ ...article, timestamp: Date.parse(article.date) })
					)
					.sort((a, b): number => a.timestamp - b.timestamp)
			)
		);
	}
}
