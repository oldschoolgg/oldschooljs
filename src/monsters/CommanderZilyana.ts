import LootTable from '../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from './GWRareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const BrewRestoreTable = new LootTable().addItem([
	['Saradomin brew(3)', 3],
	['Super restore(4)', 3]
]);

const DefMagicTable = new LootTable().addItem([
	['Super defence(3)', 3],
	['Magic potion(3)', 3]
]);

const UniqueTable = new LootTable()
	.addItem('Saradomin sword', 1, 4)
	.addItem("Saradomin's light", 1, 2)
	.addItem('Armadyl crossbow')
	.addItem('Saradomin hilt')
	.add(ShardTable, undefined, 2)
	.addItem('Coins', [19_500, 20_000], 2);

export const CommanderZilyanaTable = new LootTable()
	.every('Bones')
	.add(UniqueTable, undefined, 3)
	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet zilyana')

	/* Weapons and armour */
	.addItem('Adamant platebody', 1, 8)
	.addItem('Rune dart', [35, 40], 8)
	.addItem('Rune kiteshield', 1, 8)
	.addItem('Rune plateskirt', 1, 8)

	/* Potions */
	.addItem('Prayer potion(4)', 3, 8)
	.add(DefMagicTable, undefined, 8)
	.add(BrewRestoreTable, undefined, 6)

	/* Other */
	.addItem('Coins', [19500, 20000], 27)
	.addItem('Diamond', 6, 8)
	.addItem('Law rune', [95, 100], 8)
	.addItem('Grimy ranarr weed', 5, 8)
	.addItem('Ranarr seed', 2, 8)
	.addItem('Magic seed', 1, 1)

	.add(GWRareDropTable, undefined, 8)
	.add(GWGemTable, undefined, 2);

export default new SimpleMonster({
	id: 2205,
	name: 'Commander Zilyana',
	table: CommanderZilyanaTable
});
