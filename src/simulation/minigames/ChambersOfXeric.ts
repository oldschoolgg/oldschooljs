import Minigame from '../../structures/Minigame';
import { addArrayOfNumbers, randFloat, roll } from '../../util/util';
import LootTable from '../../structures/LootTable';
import { ReturnedLootItem, ItemBank } from '../../meta/types';
import Loot from '../../structures/Loot';
import convertNameBank from '../../util/convertNameBank';
import SimpleTable from '../../structures/SimpleTable';
import itemID from '../../util/itemID';

interface TeamMember {
	id: string;
	personalPoints: number;
}

export interface ChambersOfXericOptions {
	challengeMode: boolean;
	team: TeamMember[];
}

const itemScales = convertNameBank({
	'Death rune': 36,
	'Blood rune': 32,
	'Soul rune': 20,
	'Rune arrow': 14,
	'Dragon arrow': 202,
	'Grimy toadflax': 525,
	'Grimy ranarr weed': 800,
	'Grimy irit leaf': 162,
	'Grimy avantoe': 234,
	'Grimy kwuarm': 378,
	'Grimy snapdragon': 1348,
	'Grimy cadantine': 358,
	'Grimy lantadyme': 249,
	'Grimy dwarf weed': 201,
	'Grimy torstol': 824,
	'Silver ore': 20,
	Coal: 20,
	'Gold ore': 44,
	'Mithril ore': 32,
	'Adamantite ore': 167,
	'Runite ore': 2093,
	'Uncut sapphire': 189,
	'Uncut emerald': 142,
	'Uncut ruby': 250,
	'Uncut diamond': 514,
	'Lizardman fang': 28,
	'Pure essence': 2,
	Saltpetre: 24,
	'Teak plank': 100,
	'Mahogany plank': 240,
	Dynamite: 54,
	'Torn prayer scroll': 999_999
});

const NonUniqueTable = new SimpleTable<number>();
for (const itemID of Object.keys(itemScales)) NonUniqueTable.add(parseInt(itemID));

const UniqueTable = new LootTable()
	.add('Dexterous prayer scroll', 1, 20)
	.add('Arcane prayer scroll', 1, 20)

	.add('Twisted buckler', 1, 4)
	.add('Dragon hunter crossbow', 1, 4)

	.add("Dinh's bulwark", 1, 3)
	.add('Ancestral hat', 1, 3)
	.add('Ancestral robe top', 1, 3)
	.add('Ancestral robe bottom', 1, 3)
	.add('Dragon claws', 1, 3)

	.add('Elder maul', 1, 2)
	.add('Kodai insignia', 1, 2)
	.add('Twisted bow', 1, 2)

	.tertiary(53, 'Olmlet');

class ChambersOfXericClass extends Minigame {
	id = 1;
	aliases = ['raids'];
	name = 'Chambers of Xeric';

	maxRoll = 570_000 * (1 / 8675);

	/**
	 * For every 8,675 total points obtained, a 1% chance to obtain a unique loot is given.
	 * This chance is capped at 65.7% (570k points), further points will be sent to
	 * roll for a second unique loot. A team who possesses 855,000 points in total has
	 * an 65.7% chance to receive a unique loot, then a 32.85% chance to obtain a
	 * second unique loot. Up to three unique rewards can be obtained per raid.
	 */
	public determineUniqueChancesFromTeamPoints(teamPoints: number): number[] {
		const chances = [];

		let totalChancePercentage = teamPoints * (1 / 8675);

		for (let i = 0; i < 3; i++) {
			if (totalChancePercentage > this.maxRoll) {
				chances.push(this.maxRoll);
				totalChancePercentage -= this.maxRoll;
			} else {
				chances.push(totalChancePercentage);
				break;
			}
		}

		return chances;
	}

	public rollLootFromChances(chances: number[]): ReturnedLootItem[] {
		let loot: ReturnedLootItem[] = [];

		for (const chance of chances) {
			if (randFloat(1, 100) < chance) {
				loot = loot.concat(UniqueTable.roll());
			}
		}

		return loot;
	}

	// We're rolling 2 non-unique loots based off a number of personal points.
	public rollNonUniqueLoot(personalPoints: number): ItemBank {
		// First, pick which items we will be giving them.
		const [firstItem, secondItem] = [NonUniqueTable.roll(), NonUniqueTable.roll()];

		// Now return an ItemBank of these 2 items, the quantity is [points / scale].
		// With a minimum of 1.
		const loot: ItemBank = {
			[firstItem.item]: Math.max(1, Math.floor(personalPoints / itemScales[firstItem.item])),
			[secondItem.item]: Math.max(1, Math.floor(personalPoints / itemScales[secondItem.item]))
		};

		if (roll(12)) {
			loot[itemID('Clue scroll (elite)')] = 1;
		}

		return loot;
	}

	public complete(
		options: ChambersOfXericOptions
	): {
		[key: string]: ItemBank;
	} {
		const teamPoints = addArrayOfNumbers(
			options.team.map((val: TeamMember) => val.personalPoints)
		);

		const dropChances = this.determineUniqueChancesFromTeamPoints(teamPoints);
		const uniqueLoot = this.rollLootFromChances(dropChances);

		const lootResult: {
			[key: string]: Loot;
		} = {};

		// This table is used to pick which team member gets the unique(s).
		const uniqueDeciderTable = new SimpleTable<string>();

		for (const teamMember of options.team) {
			// Give every team member a Loot.
			lootResult[teamMember.id] = new Loot();

			// Add this member to the "unique decider table", using their points as the weight.
			uniqueDeciderTable.add(teamMember.id, teamMember.personalPoints);
		}

		// For every unique item received, add it to someones loot.
		for (const uniqueItem of uniqueLoot) {
			if (uniqueDeciderTable.table.length === 0) break;
			const receipientID = uniqueDeciderTable.roll().item;
			lootResult[receipientID].add(uniqueItem);
			uniqueDeciderTable.delete(receipientID);
		}

		// For everyone who didn't receive a unique, i.e wasn't removed from the
		// unique decider table, give them a non-unique roll.
		for (const leftOverRecipient of uniqueDeciderTable.table) {
			// Find this member in the team, and get their points.
			const pointsOfThisMember = options.team.find(
				member => member.id === leftOverRecipient.item
			).personalPoints;

			const entries = Object.entries(this.rollNonUniqueLoot(pointsOfThisMember));
			for (const [itemID, quantity] of entries) {
				lootResult[leftOverRecipient.item].add(parseInt(itemID), quantity);
			}
		}

		// Convert everyones loot to ItemBanks.
		const result: { [key: string]: ItemBank } = {};
		for (const [id, loot] of Object.entries(lootResult)) {
			result[id] = loot.values();
		}

		return result;
	}
}

const ChambersOfXeric = new ChambersOfXericClass();
export default ChambersOfXeric;
