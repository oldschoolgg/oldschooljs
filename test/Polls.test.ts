import { Polls } from '../dist';

test('Generic checks', async (done) => {
	expect.assertions(3);

	expect(Polls.size > 163).toBe(true);

	const raidsPoll = Polls.find((poll) => poll.title === 'More Raids Rewards');
	if (!raidsPoll) return done.fail('Expected raids poll.');
	expect(raidsPoll.questions.length).toBe(11);

	const pollsFrom2013 = Polls.filter((poll) => new Date(poll.datePosted).getFullYear() === 2013);
	expect(pollsFrom2013.size).toBe(23);
});

test('Method checks', async () => {
	expect.assertions(1);

	const pollsFrom2013 = await Polls.fetchYear(2013);
	expect(pollsFrom2013.length).toBe(23);
});
