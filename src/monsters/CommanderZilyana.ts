import LootTable from '../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from './GWRareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const BrewRestoreTable = new LootTable()
    .addItem([
            ['Saradomin brew(3)', 3],
            ['Super restore(4)', 3]
    ]);

const DefMagicTable = new LootTable()
    .addItem([
            ['Super defence(3)', 3],
            ['Magic potion(3)', 3]
    ]);

export const CommanderZilyanaTable = new LootTable()
	.every('Bones')
	.addItem('Saradomin sword', 1, 4)
	.tertiary(250, 'Clue scroll (elite)')
	.addItem(`Saradomin's light`, 1, 2)
	.addItem('Armadyl crossbow', 1, 1)
	.addItem('Saradomin hilt', 1, 1)
	.add(ShardTable, undefined, 2)
	.tertiary(5000, 'Pet zilyana')

	/* Weapons and armour */
	.addItem('Adamant platebody', 1, 32)
	.addItem('Rune dart', [35, 40], 32)
	.addItem('Rune kiteshield', 1, 32)
	.addItem('Rune plateskirt', 1, 32)

	/* Potions */
	.addItem('Prayer potion(4)', 3, 32)
	.add(BrewRestoreTable, undefined, 24)
	.add(DefMagicTable, undefined, 32)


	/* Other */
	.addItem('Coins', [19500, 20000], 110)
	.addItem('Diamond', 6, 32)
	.addItem('Law rune', [95, 100], 32)
	.addItem('Grimy ranarr weed', 5, 32)
	.addItem('Ranarr seed', 2, 32)
	.addItem('Magic seed', 1, 4)



	.add(GWRareDropTable, undefined, 32)
	.add(GWGemTable, undefined, 8);

export default new SimpleMonster({ id: 2205, name: 'Commander Zilyana', table: CommanderZilyanaTable });
