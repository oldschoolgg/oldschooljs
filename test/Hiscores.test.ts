import { Hiscores } from '../dist';

test('Hiscores', async () => {
	const [lynxTitan, zulu, magnaboy, virtualMagnaboy, dmmTournyFaux] = await Promise.all([
		Hiscores.fetch('Lynx Titan'),
		Hiscores.fetch('Zulu'),
		Hiscores.fetch('Magnaboy'),
		Hiscores.fetch('Magnaboy', { virtualLevels: true }),
		Hiscores.fetch('Faux', { virtualLevels: true })
	]);

	expect(lynxTitan.username).toBe('Lynx Titan');
	expect(lynxTitan.combatLevel).toBe(126);
	expect(lynxTitan.skills.overall.level).toBe(2277);
	expect(lynxTitan.skills.overall.xp).toBe(4600000000);
	expect(lynxTitan.clues.hard.score >= 22).toBe(true);
	expect(typeof lynxTitan.minigames.bountyHunter.rank).toBe('number');

	expect(zulu.bossRecords.giantMole.rank > 1).toBe(true);

	expect(zulu.bossRecords.commanderZilyana.rank > 1).toBe(true);
	expect(zulu.bossRecords.commanderZilyana.score).toBe(1082);

	expect(zulu.bossRecords.zulrah.rank > 1).toBe(true);
	expect(zulu.bossRecords.zulrah.score).toBe(2523);

	expect(zulu.bossRecords.callisto.rank > 1).toBe(true);
	expect(zulu.bossRecords.callisto.score).toBe(327);

	expect(zulu.bossRecords.cerberus.rank > 1).toBe(true);
	expect(zulu.bossRecords.cerberus.score).toBe(7080);

	expect(zulu.minigames.bountyHunter.rank > 1).toBe(true);
	expect(zulu.minigames.bountyHunter.score).toBe(4);

	expect(zulu.minigames.bountyHunterRogue.rank > 1).toBe(true);
	expect(zulu.minigames.bountyHunterRogue.score).toBe(3);

	expect(zulu.minigames.LMS.score).toBe(504);

	expect(magnaboy.clues.all.score).toBe(157);

	expect(magnaboy.clues.beginner.score).toBe(6);
	expect(magnaboy.clues.easy.score).toBe(15);

	expect(magnaboy.clues.medium.score).toBe(60);
	expect(magnaboy.clues.hard.score).toBe(53);

	expect(magnaboy.clues.elite.score).toBe(16);
	expect(magnaboy.clues.master.score).toBe(7);

	expect(magnaboy.minigames.bountyHunter.rank).toBe(-1);
	expect(magnaboy.minigames.bountyHunter.score).toBe(-1);

	expect(magnaboy.minigames.bountyHunterRogue.rank > 1).toBe(true);
	expect(magnaboy.minigames.bountyHunterRogue.score).toBe(2);

	expect(magnaboy.minigames.LMS.score).toBe(-1);

	expect(virtualMagnaboy.skills.firemaking.level).toBe(106);
	expect(virtualMagnaboy.skills.cooking.level).toBe(100);
	expect(virtualMagnaboy.skills.fletching.level).toBe(99);

	// DMM Tourny
	expect(dmmTournyFaux.username).toEqual('Faux');
	// Dont die Faux
	expect(dmmTournyFaux.combatLevel).toBeGreaterThan(30);
	expect(dmmTournyFaux.skills.agility.level).toBeGreaterThan(49);
}, 30_000);
