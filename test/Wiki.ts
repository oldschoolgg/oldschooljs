import { Wiki } from '../dist';

import * as test from 'tape';

test('Searching', async t => {
	t.plan(2);

	const emptyResult = await Wiki.search('');
	t.equal(emptyResult.length, 0, 'Expected empty result to have length 0');

	const searchResults = await Wiki.search('tbow');
	const twistedBow = searchResults[0];
	t.equal(twistedBow.title, 'Twisted bow', 'Expected Twisted bow name to be correct');
});

test('Fetching by ID', async t => {
	t.plan(1);

	const twistedBowPage = await Wiki.fetchPage(82098);
	if (!twistedBowPage) return t.fail('Failed to fetch page');
	t.equal(twistedBowPage.title, 'Twisted bow', 'Expected to fetch twisted bow article by ID');
});
