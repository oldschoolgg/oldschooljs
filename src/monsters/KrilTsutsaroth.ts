import LootTable from '../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from './GWRareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const AttStrTable = new LootTable().addItem([
	['Super attack(3)', 3],
	['Super strength(3)', 3]
]);

const RestoreBrewTable = new LootTable().addItem([
	['Super restore(3)', 3],
	['Zamorak brew(3)', 3]
]);

const UniqueTable = new LootTable()
	.addItem('Steam battlestaff', 1, 4)
	.addItem('Zamorakian spear', 1, 4)
	.addItem('Staff of the dead')
	.addItem('Zamorak hilt')
	.add(ShardTable, undefined, 2);

export const KrilTsutsarothTable = new LootTable()
	.every('Ashes')
	.add(UniqueTable, undefined, 3)
	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(5000, `Pet k'ril tsutsaroth`)

	/* Weapons and armour */
	.addItem('Adamant arrow(p++)', [295, 300], 8)
	.addItem('Rune scimitar', 1, 8)
	.addItem('Adamant platebody', 1, 8)
	.addItem('Rune platelegs', 1, 7)
	.addItem('Dragon dagger(p++)', 1, 2)

	/* Potions */
	.add(AttStrTable, undefined, 8)
	.add(RestoreBrewTable, undefined, 8)

	/* Other */
	.addItem('Coins', [19500, 20000], 33)
	.addItem('Grimy lantadyme', 10, 8)
	.addItem('Lantadyme seed', 3, 8)
	.addItem('Death rune', [120, 125], 8)
	.addItem('Blood rune', [80, 85], 8)

	.add(GWRareDropTable, undefined, 8)
	.add(GWGemTable, undefined, 2);

export default new SimpleMonster({
	id: 3129,
	name: `K'ril Tsutsaroth`,
	table: KrilTsutsarothTable
});
