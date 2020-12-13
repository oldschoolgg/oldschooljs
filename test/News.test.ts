import { News } from '../dist';

describe('News', () => {
	jest.setTimeout(60000);
	test('Generic checks', async () => {
		expect.assertions(1);

		const firstPageNews = News.filter(
			(article) => article.year === 2013 && article.month === 2
		);

		expect(firstPageNews.size).toEqual(12);
	});

	test('Single article check', (done) => {
		expect.assertions(4);

		const article = News.find(
			(article) => article.title === 'GameBlast15 | Friday 12:00 UTC | Live Stream'
		);

		if (!article) return fail('Missing article.');

		Promise.all([
			expect(article.category).toEqual('Website'),
			expect(article.link).toEqual(
				'https://secure.runescape.com/m=news/gameblast15--friday-1200-utc--live-stream?oldschool=1'
			),
			expect(article.year).toEqual(2015),
			expect(article.month).toEqual(2)
		]).then(() => done());
	});
});
