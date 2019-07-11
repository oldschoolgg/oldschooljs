import { News } from '../dist/';
import { NewsItem, DateYearMonth } from '../dist/meta/types';
import { readFileSync, writeFileSync } from 'fs';
import { getDate } from '../dist/lib/Util/util';

const currentNews = JSON.parse(readFileSync('./src/data/news/news_archive.json').toString());

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
	let articles = await News.fetchMonth(year, month);

	// If every article in the last month of news is already in News, return.
	if (articles.every(article => News.some(_article => _article.link === article.link))) {
		return undefined;
	}

	console.log('Found new articles to add to News Archive.');

	let newArticles: NewsItem[] = [];

	// If the fetched articles doesn't contain all of the missing articles, keep fetching more.
	while (
		!articles.some((article): boolean => News.some(_article => article.link === _article.link))
	) {
		const newDate = decrementDate({ year, month });
		console.log('Fetching month of articles...');
		const nextMonth = await News.fetchMonth(newDate.year, newDate.month);
		if (!nextMonth) throw new Error('Unexpected error');
		articles = [...articles, ...nextMonth];
	}

	// Return the new articles from the fetched articles.
	for (const article of articles) {
		if (News.some(_article => _article.link === article.link)) continue;

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
