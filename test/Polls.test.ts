import { describe, expect, test } from 'vitest';

import { Polls } from '../src';

describe('Polls', () => {
	test('Generic checks', () => {
		expect.assertions(3);

		expect(Polls.size > 163).toEqual(true);

		const raidsPoll = Polls.find(poll => poll.title === 'More Raids Rewards');
		if (!raidsPoll) throw new Error('Expected raids poll.');
		expect(raidsPoll.questions.length).toEqual(11);

		const pollsFrom2013 = Polls.filter(poll => new Date(poll.datePosted).getFullYear() === 2013);
		expect(pollsFrom2013.size).toEqual(23);
	});
});
