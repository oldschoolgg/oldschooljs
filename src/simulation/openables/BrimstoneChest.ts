import LootTable from '../../structures/LootTable';
import { ItemBank, OpenableOptions } from '../../meta/types';
import Loot from '../../structures/Loot';
import SimpleOpenable from '../../structures/SimpleOpenable';

const BrimstoneChestTable = new LootTable()
	.add('Uncut diamond', [25, 35], 5)
	.add('Uncut ruby', [25, 35], 5)
	.add('Coal', [300, 500], 5)
	.add('Coins', [50000, 150000], 5)
	.add('Gold ore', [100, 200], 4)
	.add('Dragon arrowtips', [50, 200], 4)
	.add('Iron ore', [350, 500], 3)
	.add('Rune full helm', [2, 4], 3)
	.add('Rune platebody', [1, 2], 3)
	.add('Rune platelegs', [1, 2], 3)
	.add('Runite ore', [10, 15], 2)
	.add('Steel bar', [300, 500], 2)
	.add('Magic logs', [120, 160], 2)
	.add('Dragon dart tip', [40, 160], 2)
	.add('Palm tree seed', [2, 4], 1)
	.add('Magic seed', [2, 4], 1)
	.add('Celastrus seed', [2, 4], 1)
	.add('Dragonfruit tree seed', [1, 4], 1)
	.add('Redwood tree seed', 1, 1)
	.add('Torstol seed', [3, 5], 1)
	.add('Snapdragon seed', [3, 5], 1)
	.add('Ranarr seed', [3, 5], 1)
	.add('Pure essence', [3000, 6000], 1)
	.oneIn(200, 'Broken dragon hasta')
	.oneIn(1000, 'Mystic hat (dusk)')
	.oneIn(1000, 'Mystic robe top (dusk)')
	.oneIn(1000, 'Mystic robe bottom (dusk)')
	.oneIn(1000, 'Mystic gloves (dusk)')
	.oneIn(1000, 'Mystic boots (dusk)');

interface BrimstoneChestOptions extends OpenableOptions {
	table: LootTable;
}

class BrimstoneChestOpenable extends SimpleOpenable {
	public table: LootTable;

	constructor(options: BrimstoneChestOptions) {
		super(options);
		this.table = options.table;
	}

	public open(fishlvl: number = 1, quantity = 1): ItemBank {
		var tempTable = clone(this.table);
		const loot = new Loot();

		switch (true) {
			case fishlvl < 40: {
				tempTable.add('Raw tuna', [100, 350], 3);
				break;
			}
			case fishlvl < 50: {
				tempTable.add('Raw lobster', [100, 350], 3);
				break;
			}
			case fishlvl < 62: {
				tempTable.add('Raw swordfish', [100, 300], 3);
				break;
			}
			case fishlvl < 76: {
				tempTable.add('Raw monkfish', [100, 300], 3);
				break;
			}
			case fishlvl < 79: {
				tempTable.add('Raw shark', [100, 250], 3);
				break;
			}
			case fishlvl < 81: {
				tempTable.add('Raw sea turtle', [80, 200], 3);
				break;
			}
			case fishlvl >= 81: {
				tempTable.add('Raw manta ray', [80, 160], 3);
				break;
			}
		}

		for (let i = 0; i < quantity; i++) {
			loot.add(tempTable.roll());
		}

		tempTable = new LootTable();
		return loot.values();
	}
}

export default new BrimstoneChestOpenable({
	id: 23083,
	name: 'Brimstone chest',
	aliases: ['brimstone chest', 'brimstone'],
	table: BrimstoneChestTable
});

//Consider moving this function somewhere else in future.
/**
 * @function
 * @description Deep clone a class instance.
 * @param {object} instance The class instance you want to clone.
 * @returns {object} A new cloned instance.
 */
function clone(instance: any) {
	return Object.assign(
		Object.create(
			// Set the prototype of the new object to the prototype of the instance.
			// Used to allow new object behave like class instance.
			Object.getPrototypeOf(instance)
		),
		// Prevent shallow copies of nested structures like arrays, etc
		JSON.parse(JSON.stringify(instance))
	);
}
