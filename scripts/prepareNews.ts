import { News } from '../dist/';
import { readFileSync, writeFileSync } from 'fs';

const currentNews = JSON.parse(readFileSync('./src/data/news/news_archive.json').toString());

export default async function prepareNews(): Promise<void> {
	const newArticles = await News.fetchNewArticles();
	console.log(`Found ${newArticles ? newArticles.length : 0} news articles to be added.`);
	if (newArticles) {
		writeFileSync(
			'./src/data/news/_news_archive.json',
			JSON.stringify(
				[...currentNews, ...newArticles.sort((a, b) => a.date - b.date)],
				null,
				4
			)
		);
	}
	console.log('Prepared news.');
}
