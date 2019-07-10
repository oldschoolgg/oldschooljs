import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

import { NewsItem, PageContent } from '../../meta/types';
import { getDate } from '../Util/util';
import * as _newsArchive from '../../data/news/news_archive.json';
import Collection from './Collection';

const newsArchive = _newsArchive as NewsItem[];

const BASE_URL = `https://secure.runescape.com/m=news/archive?oldschool=1`;

class News extends Collection<string, NewsItem> {
	private async getDom(link: string): Promise<Document> {
		const html: string = await fetch(link).then((res): Promise<string> => res.text());
		return new JSDOM(html.replace(/\s+/g, ' ').trim()).window.document;
	}

	public async fetchRecent(): Promise<NewsItem[]> {
		const { month, year } = getDate();
		return this.fetchMonth(month, year);
	}

	public async fetchPageContent(link: string): Promise<PageContent> {
		const dom = await this.getDom(link);

		const contentEl = dom.getElementsByClassName('news-article-content')[0];
		if (!contentEl || !contentEl.textContent) {
			// TODO
			throw new Error('News page missing content element. Most likely being ratelimited.');
		}

		const content: string = contentEl.textContent.trim();

		const description: string = (dom.querySelector(
			'head meta'
		) as HTMLMetaElement).content.trim();

		return {
			content,
			description
		};
	}

	public async fetchMonth(
		year: number,
		month: number,
		pageNumber: number = 1
	): Promise<NewsItem[]> {
		let newsArticlesCollection: NewsItem[] = [];

		const dom = await this.getDom(this.generateNewsURL(year, month, pageNumber));

		const newsArticles = Array.from(dom.querySelectorAll('#newsSection .news-list-article'));

		for (const article of newsArticles) {
			const titleEl: HTMLAnchorElement = article.getElementsByClassName(
				'news-list-article__title-link'
			)[0] as HTMLAnchorElement;

			const title = titleEl.textContent;
			const link = titleEl.href;

			const image = (article.getElementsByClassName(
				'news-list-article__figure-img'
			)[0] as HTMLImageElement).src;

			const date = (article.getElementsByClassName(
				'news-list-article__date'
			)[0] as HTMLTimeElement).dateTime;

			const category = article.getElementsByClassName('news-list-article__category')[0]
				.textContent;

			if (!title || !date || !category || !link || !year || !month) {
				// TODO
				throw new Error('News article is missing a required element.');
			}

			const newsItem: NewsItem = {
				title,
				image,
				date,
				category,
				link,
				year,
				month,
				day: parseInt(date.split('-')[2]),
				timestamp: Date.parse(date)
			};
			newsArticlesCollection.push(newsItem);
		}

		// Recursively fetch extra pages, if present.
		if (Array.from(dom.querySelectorAll('#nextNews')).length > 0) {
			const nextPage = await this.fetchMonth(year, month, pageNumber + 1);
			newsArticlesCollection = [...newsArticlesCollection, ...nextPage];
		}

		return newsArticlesCollection;
	}

	public generateNewsURL(year: number, month: number, page: number = 1): string {
		return `${BASE_URL}&year=${year}&month=${month}&page=${page}`;
	}
}

const news = new News();

for (const article of newsArchive) {
	const newArticle = {
		...article,
		link: `https://secure.runescape.com/m=news/${article.link}?oldschool=1`
	};
	news.set(article.title, newArticle);
}

export default news;
