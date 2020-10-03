import test from 'tape';

import { Wiki } from '../dist';

test('Searching', async t => {
	t.plan(2);

	const searchResults = await Wiki.search('tbow');
	const twistedBow = searchResults[0];
	t.equal(twistedBow.title, 'Twisted bow', 'Expected Twisted bow name to be correct');

	t.equal(searchResults.length, 2, 'tbow search should only have 2 results.');
});

test('Random', async t => {
	t.plan(2);

	const fiveRandom = await Wiki.random(5);
	const twentyRandom = await Wiki.random(20);

	t.equal(fiveRandom.length, 5, 'Expected to have 5 random pages.');
	t.equal(twentyRandom.length, 20, 'Expected to have 20 random pages.');
});

test('Fetching by ID', async t => {
	t.plan(1);

	const twistedBowPage = await Wiki.fetchPage(82098);
	if (!twistedBowPage) return t.fail('Failed to fetch page');
	t.equal(twistedBowPage.title, 'Twisted bow', 'Expected to fetch twisted bow article by ID');
});
