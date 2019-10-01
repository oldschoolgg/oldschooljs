import { Polls } from '../dist';

import * as test from 'tape';

test('Generic checks', async t => {
	t.plan(2);

	t.equal(Polls.size > 163, true, 'Expected atleast 163 polls');

	const raidsPoll = Polls.find(poll => poll.title === 'More Raids Rewards');
	if (!raidsPoll) return t.fail('Expected raids poll.');
	t.equal(raidsPoll.questions.length, 11, 'Expected atleast 163 polls');
});

test('Invalid data checks', async assert => {
	for (const poll of Polls.values()) {
		if (Object.values(poll).some(value => value == null)) {
			assert.fail('Found null/undefined value');
		}
	}
	assert.end();
});
