import { Hiscores } from '../dist/';

import * as test from 'tape';

test('Hiscores Should Return Correct Results', async t => {
	t.plan(6);

	const LynxTitan = await Hiscores.fetch('Lynx Titan');
	t.equal(LynxTitan.username, 'Lynx Titan', 'Expected name to equal Lynx Titan.');
	t.equal(LynxTitan.combatLevel, 126, 'Expected combat level to equal 126');
	t.equal(LynxTitan.skills.overall.level, 2277, 'Expected total level to equal 2277');
	t.equal(LynxTitan.skills.overall.xp, 4600000000, 'Expected total xp to equal 4600000000');
	t.equal(LynxTitan.clues.all.score >= 22, true, 'Expected correct clue scores');
	t.equal(
		typeof LynxTitan.minigames.bountyHunter.rank,
		'number',
		'Expected correct minigame scores'
	);
});

test('Hiscores Handling Invalid Usernames', async assert => {
	const invalidUsernames: any = [
		'Username thats toooooo Long',
		null,
		undefined,
		'',
		'.invalid.',
		'!@#@#$%'
	];
	for (const username of invalidUsernames) {
		try {
			await Hiscores.fetch(username);
			assert.fail('Invalid username was not rejected.');
		} catch (err) {
			assert.ok(err, 'Invalid username rejected.');
		}
	}
	assert.end();
});

test('Hiscores Handling Invalid Account Type', async assert => {
	try {
		// @ts-ignore
		await Hiscores.fetch('Lynx Titan', { type: '....' });
		assert.fail('Invalid account type was not rejected.');
	} catch (err) {
		assert.ok(err, 'Invalid type rejected.');
	}
	assert.end();
});
