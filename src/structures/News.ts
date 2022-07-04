import _newsArchive from '../data/news/news_archive.json';
import { DateYearMonth, NewsItemWithDOM } from '../meta/types';
import getDom from '../util/getDom';
import { getDate } from '../util/util';
import Collection from './Collection';

const newsArchive = _newsArchive as NewsItemWithDOM[];

const BASE_URL = 'https://secure.runescape.com/m=news/archive?oldschool=1';

interface NewsPageContent {
	content: string;
	description: string;
}

class News extends Collection<string, NewsItemWithDOM> {
	public async fetchRecent(): Promise<NewsItemWithDOM[]> {
		return this.fetchMonth(getDate());
	}

	public async fetchPageContent(link: string): Promise<NewsPageContent> {
		const { document: dom } = await getDom(link);

		const contentEl = dom.getElementsByClassName('news-article-content')[0];
		if (!contentEl || !contentEl.textContent) {
			// TODO
			throw new Error('News page missing content element. Most likely being ratelimited.');
		}

		const content: string = contentEl.textContent.trim();

		const description: string = (dom.querySelector('head meta') as HTMLMetaElement).content.trim();

		return {
			content,
			description
		};
	}

	public decrementDate({ year, month }: DateYearMonth): DateYearMonth {
		if (month === 1) {
			return {
				year: year - 1,
				month: 12
			};
		}
		return {
			year,
			month: month - 1
		};
	}

	public async fetchNewArticles(date: DateYearMonth = getDate()): Promise<NewsItemWithDOM[] | undefined> {
		let articles = [
			...(await this.fetchMonth(date, false)),
			...(await this.fetchMonth(this.decrementDate(date), false))
		];

		// If every article in the last 2 months of news is already in News, return.
		if (articles.every((article): boolean => this.some((_article): boolean => _article.link === article.link))) {
			return undefined;
		}

		const newArticles: NewsItemWithDOM[] = [];

		// If the fetched articles doesn't contain all of the missing articles, keep fetching more.
		while (!articles.some((article): boolean => this.some((_article): boolean => article.link === _article.link))) {
			// Decrement the date by 1 month, and then fetch the previous month.
			const newDate = this.decrementDate(date);
			const nextMonth = await this.fetchMonth({ year: newDate.year, month: newDate.month }, false);
			if (!nextMonth) throw new Error('Unexpected error');
			articles = [...articles, ...nextMonth];
		}

		// Return the new articles from the fetched articles.
		for (const article of articles) {
			if (this.some((_article): boolean => _article.link === article.link)) continue;
			this.set(article.link, article);
			newArticles.push(article);
		}

		return newArticles;
	}

	public async fetchMonth({ year, month }: DateYearMonth, cache = true, pageNumber = 1): Promise<NewsItemWithDOM[]> {
		let newsArticlesCollection: NewsItemWithDOM[] = [];

		const { document: dom } = await getDom(this.generateNewsURL(year, month, pageNumber));

		const newsArticles = Array.from(dom.querySelectorAll('#newsSection .news-list-article'));

		for (const article of newsArticles) {
			const titleEl: HTMLAnchorElement = article.getElementsByClassName(
				'news-list-article__title-link'
			)[0] as HTMLAnchorElement;

			const title = titleEl.textContent;
			const link = titleEl.href;

			const image = (article.getElementsByClassName('news-list-article__figure-img')[0] as HTMLImageElement).src;

			const date = (article.getElementsByClassName('news-list-article__date')[0] as HTMLTimeElement).dateTime;

			const category = article.getElementsByClassName('news-list-article__category')[0].textContent;

			if (!title || !date || !category || !link || !year || !month) {
				// TODO
				throw new Error('News article is missing a required element.');
			}

			const newsItem: NewsItemWithDOM = {
				title,
				image,
				category,
				link,
				year,
				month,
				day: parseInt(date.split('-')[2]),
				date: Date.parse(date),
				dom
			};

			if (cache) {
				this.set(link, newsItem);
			}

			newsArticlesCollection.push(newsItem);
		}

		// Recursively fetch extra pages, if present.
		if (Array.from(dom.querySelectorAll('#nextNews')).length > 0) {
			const nextPage = await this.fetchMonth({ year, month }, true, pageNumber + 1);
			newsArticlesCollection = [...newsArticlesCollection, ...nextPage];
		}

		return newsArticlesCollection;
	}

	public generateNewsURL(year: number, month: number, page = 1): string {
		return `${BASE_URL}&year=${year}&month=${month}&page=${page}`;
	}
}

const news = new News();

for (const article of newsArchive) {
	news.set(article.link, article);
}

export default news;
