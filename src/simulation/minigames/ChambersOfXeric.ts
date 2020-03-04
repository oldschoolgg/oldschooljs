import Minigame from '../../structures/Minigame';
import { addArrayOfNumbers, randFloat } from '../../util/util';
import LootTable from '../../structures/LootTable';
import { ReturnedLootItem, ItemBank } from '../../meta/types';
import Loot from '../../structures/Loot';

interface TeamMember {
	id: string;
	personalPoints: number;
}

export interface ChambersOfXericOptions {
	challengeMode: boolean;
	team: TeamMember[];
}

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
		const uniqueDeciderTable = new LootTable();

		for (const teamMember of options.team) {
			// Give every team member a Loot.
			lootResult[teamMember.id] = new Loot();

			// Add this member to the "unique decider table", using their points as the weight.
			uniqueDeciderTable.addAny(teamMember.id, 1, teamMember.personalPoints);
		}

		// For every unique item received, add it to someones loot.
		for (const uniqueItem of uniqueLoot) {
			const receipientID = uniqueDeciderTable.roll()[0].item;
			lootResult[receipientID].add(uniqueItem);
		}

		// Convert the `Loot` classes to a ItemBank
		const result: { [key: string]: ItemBank } = {};
		for (const [id, loot] of Object.entries(lootResult)) {
			result[id] = loot.values();
		}

		return result;
	}
}

const ChambersOfXeric = new ChambersOfXericClass();
export default ChambersOfXeric;
