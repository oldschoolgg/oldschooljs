import { News } from '../dist';

import test from 'tape';

test('Generic checks', async t => {
	t.plan(1);

	const firstPageNews = News.filter(article => article.year === 2013 && article.month === 2);

	t.equal(firstPageNews.size, 12, 'Expected 12 news articles from Feb 2013');
});

test('Single article check', async t => {
	t.plan(4);

	const article = News.find(
		article => article.title === 'GameBlast15 | Friday 12:00 UTC | Live Stream'
	);

	if (!article) return t.fail('Missing article.');

	t.equal(article.category, 'Website', 'Expected article category to be Website');
	t.equal(
		article.link,
		'https://secure.runescape.com/m=news/gameblast15--friday-1200-utc--live-stream?oldschool=1',
		'Expected article link to be correct'
	);
	t.equal(article.year, 2015, 'Expected article year to be 2015');
	t.equal(article.month, 2, 'Expected article month to be 2');
});
