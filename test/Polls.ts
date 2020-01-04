import { Polls } from '../dist';

import test from 'tape';

test('Generic checks', async t => {
	t.plan(3);

	t.equal(Polls.size > 163, true, 'Expected atleast 163 polls');

	const raidsPoll = Polls.find(poll => poll.title === 'More Raids Rewards');
	if (!raidsPoll) return t.fail('Expected raids poll.');
	t.equal(raidsPoll.questions.length, 11, 'Expected atleast 163 polls');

	const pollsFrom2013 = Polls.filter(poll => new Date(poll.datePosted).getFullYear() === 2013);
	t.equal(pollsFrom2013.size, 23, 'Expected 23 polls in 2013');
});

test('Method checks', async t => {
	t.plan(1);

	const pollsFrom2013 = await Polls.fetchYear(2013);
	t.equal(pollsFrom2013.length, 23, 'Expected 23 polls in 2013');
});
