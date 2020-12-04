import { Polls } from '../dist';

describe('Polls', () => {
	jest.setTimeout(20000);

	test('Generic checks', (done) => {
		expect.assertions(3);

		expect(Polls.size > 163).toEqual(true);

		const raidsPoll = Polls.find((poll) => poll.title === 'More Raids Rewards');
		if (!raidsPoll) return fail('Expected raids poll.');
		expect(raidsPoll.questions.length).toEqual(11);

		const pollsFrom2013 = Polls.filter(
			(poll) => new Date(poll.datePosted).getFullYear() === 2013
		);
		expect(pollsFrom2013.size).toEqual(23);
		return done();
	});

	test('Method checks', async () => {
		expect.assertions(1);

		const pollsFrom2013 = await Polls.fetchYear(2013);
		expect(pollsFrom2013.length).toEqual(23);
	});
});
