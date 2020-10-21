import { Wiki } from '../dist';

test('Searching', async () => {
	expect.assertions(2);

	const searchResults = await Wiki.search('tbow');
	const twistedBow = searchResults[0];
	expect(twistedBow.title).toBe('Twisted bow');

	expect(searchResults.length).toBe(2);
});

test('Random', async () => {
	expect.assertions(2);

	const fiveRandom = await Wiki.random(5);
	const twentyRandom = await Wiki.random(20);

	expect(fiveRandom.length).toBe(5);
	expect(twentyRandom.length).toBe(20);
});

test('Fetching by ID', async (done) => {
	expect.assertions(1);

	const twistedBowPage = await Wiki.fetchPage(82098);
	if (!twistedBowPage) return done.fail('Failed to fetch page');
	expect(twistedBowPage.title).toBe('Twisted bow');
});
