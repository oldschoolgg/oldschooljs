import { calcPercentOfNum, calcWhatPercent, percentChance, roll } from 'e';
import { O } from 'ts-toolbelt';

import { ItemBank, LootBank } from '../../meta/types';
import Bank from '../../structures/Bank';
import LootTable from '../../structures/LootTable';
import SimpleTable from '../../structures/SimpleTable';
import { resolveNameBank } from '../../util/bank';
import { convertLootBanksToItemBanks } from '../../util/util';

export interface TeamMember {
	id: string;
	damageDone: number;
}

export interface NightmareOptions {
	/**
	 * The members of the team killing the nightmare.
	 */
	team: TeamMember[];
}

const data: Record<string, [number[], number]> = {
	// [name, [quantity_range, weighting]]

	// Runes and ammunition
	'Cosmic rune': [[15, 214], 4],
	'Nature rune': [[6, 138], 4],
	'Death rune': [[24, 165], 4],
	'Blood rune': [[13, 129], 4],
	'Soul rune': [[12, 74], 4],
	'Adamant arrow': [[32, 488], 3],
	'Rune arrow': [[12, 515], 3],

	// Resources
	'Yew logs': [[14, 111], 4],
	'Magic logs': [[3, 50], 4],
	'Gold ore': [[14, 79], 4],
	Coal: [[16, 253], 4],
	'Mithril ore': [[15, 69], 4],
	'Adamantite ore': [[8, 50], 4],
	'Grimy cadantine': [[1, 8], 4],
	'Grimy torstol': [[1, 16], 4],
	'Uncut emerald': [[1, 26], 3],
	'Uncut ruby': [[2, 35], 3],
	'Pure essence': [[420, 3280], 2],

	// Consumables
	Shark: [[1, 15], 6],
	Bass: [[1, 18], 6],
	'Prayer potion(3)': [[2, 10], 5],
	'Saradomin brew(3)': [[1, 10], 5],
	'Zamorak brew(3)': [[1, 8], 5],
	'Sanfew serum(3)': [[1, 11], 5],

	Coins: [[2717, 41_575], 2]
};
const nonUniqueItemRanges = resolveNameBank(data);

const NonUniqueTable = new SimpleTable<number>();
for (const [id, data] of Object.entries(nonUniqueItemRanges)) {
	NonUniqueTable.add(parseInt(id), data[1]);
}

const GearTable = new SimpleTable<string>()
	.add("Inquisitor's mace")
	.add("Inquisitor's great helm", 2)
	.add("Inquisitor's hauberk", 2)
	.add("Inquisitor's plateskirt", 2)
	.add('Nightmare staff', 3);

const OrbTable = new SimpleTable<string>()
	.add('Eldritch orb')
	.add('Volatile orb')
	.add('Harmonised orb');

const mvpTertiary = new LootTable()
	.tertiary(190, 'Clue scroll (elite)')
	.tertiary(1900, 'Jar of dreams')
	.tertiary(3800, 'Little nightmare');

const nonMvpTertiary = new LootTable()
	.tertiary(200, 'Clue scroll (elite)')
	.tertiary(2000, 'Jar of dreams')
	.tertiary(4000, 'Little nightmare');

class NightmareClass {
	hp = 2400;

	public rollNonUniqueLoot(percentage: number, isMvp: boolean): [number, number] {
		const { item } = NonUniqueTable.roll();

		const [range] = nonUniqueItemRanges[item];
		// If the quantity range of the item is 50-100, we
		// give you 50 qty to start, then increase it.
		let quantity = range[0];
		quantity += calcPercentOfNum(percentage, range[1]) - range[0];

		if (isMvp) quantity *= 1.1;

		quantity = Math.floor(Math.max(quantity, range[0]));

		return [item, quantity];
	}

	public kill(
		options: O.Readonly<NightmareOptions>
	): {
		[key: string]: ItemBank;
	} {
		const mvp = options.team.sort((a, b) => b.damageDone - a.damageDone)[0];

		const parsedTeam = options.team.map(teamMember => ({
			...teamMember,
			percentDamage: Math.floor(calcWhatPercent(teamMember.damageDone, this.hp)),
			scaledPercentDamage: Math.floor(
				calcWhatPercent(teamMember.damageDone, this.hp / options.team.length)
			),
			mvp: mvp === teamMember
		}));

		const lootResult: LootBank = {};

		// Construct a weighted table, where the weighting is the percent of the total HP that the team member has damaged,
		// for example, dealing 50% off of the nightmares health will give a weighting of 50, so they're 5x more likely
		// to get the unique than the person who dealt 10%. However, in most realistic scenarios, the team members will have
		// done very similar amounts of damage, varying by only a few percent.
		const WeightedUniqueTable = new SimpleTable<string>();
		for (const teamMember of parsedTeam) {
			lootResult[teamMember.id] = new Bank();

			WeightedUniqueTable.add(teamMember.id, teamMember.percentDamage);
		}

		function giveWeightedDrop(item: string): void {
			const { item: recipient } = WeightedUniqueTable.roll();
			lootResult[recipient].add(item);
		}

		if (roll(120)) {
			giveWeightedDrop(GearTable.roll().item);
		}

		if (roll(600)) {
			giveWeightedDrop(OrbTable.roll().item);
		}

		const secondRollChance = Math.min(75, parsedTeam.length - 5);
		if (secondRollChance > 0 && percentChance(secondRollChance)) {
			if (roll(600)) {
				giveWeightedDrop(OrbTable.roll().item);
			}
			if (roll(120)) {
				giveWeightedDrop(GearTable.roll().item);
			}
		}

		// Hand out non-uniques
		for (const teamMember of parsedTeam) {
			if (Object.keys(lootResult[teamMember.id].bank).length === 0) {
				lootResult[teamMember.id].add(
					...this.rollNonUniqueLoot(teamMember.scaledPercentDamage, teamMember.mvp)
				);
			}
			lootResult[teamMember.id].add(teamMember.mvp ? 'Big bones' : 'Bones');
			lootResult[teamMember.id].add(
				teamMember.mvp ? mvpTertiary.roll() : nonMvpTertiary.roll()
			);
		}

		return convertLootBanksToItemBanks(lootResult);
	}
}

const Nightmare = new NightmareClass();
export default Nightmare;
