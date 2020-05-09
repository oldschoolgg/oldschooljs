import { Hiscores } from '../dist';

import test from 'tape';

test('Hiscores', async t => {
	t.plan(38);

	const [lynxTitan, zulu, magnaboy, leaguesmagnaboy, virtualMagnaboy] = await Promise.all([
		Hiscores.fetch('Lynx Titan'),
		Hiscores.fetch('Zulu'),
		Hiscores.fetch('Magnaboy'),
		Hiscores.fetch('Magnaboy', {
			type: 'seasonal'
		}),
		Hiscores.fetch('Magnaboy', { virtualLevels: true })
	]);

	t.equal(lynxTitan.username, 'Lynx Titan', 'Expected name to equal Lynx Titan.');
	t.equal(lynxTitan.combatLevel, 126, 'Expected combat level to equal 126');
	t.equal(lynxTitan.skills.overall.level, 2277, 'Expected total level to equal 2277');
	t.equal(lynxTitan.skills.overall.xp, 4600000000, 'Expected total xp to equal 4600000000');
	t.equal(lynxTitan.clues.all.score >= 22, true, 'Expected correct clue scores');
	t.equal(
		typeof lynxTitan.minigames.bountyHunter.rank,
		'number',
		'Expected correct minigame scores'
	);

	t.equal(zulu.bossRecords.giantMole.rank > 1, true);
	t.equal(zulu.bossRecords.giantMole.score, 1222);

	t.equal(zulu.bossRecords.commanderZilyana.rank > 1, true);
	t.equal(zulu.bossRecords.commanderZilyana.score, 1082);

	t.equal(zulu.bossRecords.zulrah.rank > 1, true);
	t.equal(zulu.bossRecords.zulrah.score, 2522);

	t.equal(zulu.bossRecords.callisto.rank > 1, true);
	t.equal(zulu.bossRecords.callisto.score, 327);

	t.equal(zulu.bossRecords.cerberus.rank > 1, true);
	t.equal(zulu.bossRecords.cerberus.score, 7073);

	t.equal(zulu.minigames.bountyHunter.rank > 1, true);
	t.equal(zulu.minigames.bountyHunter.score, 4);

	t.equal(zulu.minigames.bountyHunterRogue.rank > 1, true);
	t.equal(zulu.minigames.bountyHunterRogue.score, 3);

	t.equal(zulu.minigames.LMS.score, 500);

	t.equal(magnaboy.clues.all.score, 147);

	t.equal(magnaboy.clues.beginner.score, 6);
	t.equal(magnaboy.clues.easy.score, 13);

	t.equal(magnaboy.clues.medium.score, 58);
	t.equal(magnaboy.clues.hard.score, 49);

	t.equal(magnaboy.clues.elite.score, 14);
	t.equal(magnaboy.clues.master.score, 7);

	t.equal(magnaboy.minigames.bountyHunter.rank, -1);
	t.equal(magnaboy.minigames.bountyHunter.score, -1);

	t.equal(magnaboy.minigames.bountyHunterRogue.rank > 1, true);
	t.equal(magnaboy.minigames.bountyHunterRogue.score, 2);

	t.equal(magnaboy.minigames.LMS.score, -1);

	t.equal(leaguesmagnaboy.username, 'Magnaboy');
	t.equal(leaguesmagnaboy.skills.overall.level > 1, true);

	t.equal(virtualMagnaboy.skills.firemaking.level, 106, 'Expected fm level to equal 106');
	t.equal(virtualMagnaboy.skills.cooking.level, 100, 'Expected fm level to equal 106');
	t.equal(virtualMagnaboy.skills.fletching.level, 99, 'Expected fm level to equal 106');
});
