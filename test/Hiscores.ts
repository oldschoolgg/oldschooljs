import { Hiscores } from '../dist';

import test from 'tape';
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

test('Boss Hiscores', async t => {
	t.plan(25);

	const zulu = await Hiscores.fetch('Zulu');

	t.equal(zulu.bossRecords.giantMole.rank > 1, true);
	t.equal(zulu.bossRecords.giantMole.score, 1222);

	t.equal(zulu.bossRecords.commanderZilyana.rank > 1, true);
	t.equal(zulu.bossRecords.commanderZilyana.score, 1082);

	t.equal(zulu.bossRecords.chambersofXeric.rank > 1, true);
	t.equal(zulu.bossRecords.chambersofXeric.score, 872);

	t.equal(zulu.bossRecords.zulrah.rank > 1, true);
	t.equal(zulu.bossRecords.zulrah.score, 2475);

	t.equal(zulu.minigames.bountyHunter.rank > 1, true);
	t.equal(zulu.minigames.bountyHunter.score, 4);

	t.equal(zulu.minigames.bountyHunterRogue.rank > 1, true);
	t.equal(zulu.minigames.bountyHunterRogue.score, 3);

	t.equal(zulu.minigames.LMS.score, 500);

	const mgby = await Hiscores.fetch('Mgby');

	t.equal(mgby.clues.all.score, 137);

	t.equal(mgby.clues.beginner.score, 5);
	t.equal(mgby.clues.easy.score, 12);

	t.equal(mgby.clues.medium.score, 56);
	t.equal(mgby.clues.hard.score, 44);

	t.equal(mgby.clues.elite.score, 13);
	t.equal(mgby.clues.master.score, 7);

	t.equal(mgby.minigames.bountyHunter.rank, -1);
	t.equal(mgby.minigames.bountyHunter.score, -1);

	t.equal(mgby.minigames.bountyHunterRogue.rank > 1, true);
	t.equal(mgby.minigames.bountyHunterRogue.score, 2);

	t.equal(mgby.minigames.LMS.score, -1);
});

test('Hiscores Virtual Stats', async t => {
	t.plan(4);

	const LynxTitan = await Hiscores.fetch('Lynx Titan', { virtualLevels: true });
	t.equal(LynxTitan.skills.overall.level, 2898, 'Expected total level to equal 2898');

	const Mgby = await Hiscores.fetch('Mgby', { virtualLevels: true });
	t.equal(Mgby.skills.firemaking.level, 106, 'Expected fm level to equal 106');
	t.equal(Mgby.skills.cooking.level, 100, 'Expected fm level to equal 106');
	t.equal(Mgby.skills.fletching.level, 99, 'Expected fm level to equal 106');
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
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		await Hiscores.fetch('Lynx Titan', { type: '....' });
		assert.fail('Invalid account type was not rejected.');
	} catch (err) {
		assert.ok(err, 'Invalid type rejected.');
	}
	assert.end();
});

test('Leagues Hiscores', async t => {
	t.plan(2);

	const LeaguesMgby = await Hiscores.fetch('Mgby', {
		type: 'seasonal'
	});

	t.equal(LeaguesMgby.username, 'Mgby');
	t.equal(LeaguesMgby.skills.overall.level > 1, true);
});
