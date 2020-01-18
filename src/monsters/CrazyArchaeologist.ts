import LootTable from '../structures/LootTable';
import RareDropTable, { GemTable } from './RareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const CrazyArchaeologistUniqueTable = new LootTable()
    .add('Odium shard 2')
    .add('Malediction shard 2')

export const CrazyArchaeologistTable = new LootTable()
    .every('Bones')
	.tertiary(128, 'Clue scroll (hard)')
    .add(CrazyArchaeologistUniqueTable, undefined, 1)
    
	/* Weapons and armour */
	.addItem('Amulet of power', 1, 7)
    .addItem('Rune crossbow', 2, 5)
    .addItem("Red d'hide body", 1, 4)
    .addItem('Rune knife', 10, 4)
 

    /* Runes and ammunition */

	.addItem('Mud rune', 30, 4)
	.addItem('Cannonball', 150, 4)
	.addItem('Dragon arrow', 75, 1)



    /* Consumables */
    .addItem('Shark', 1, 8)
    .addItem('Potato with cheese', 3, 8)
    .addItem('Prayer potion(4)', 1, 8)
    .addItem('Anchovy pizza', 8, 4)

    /* Other */
    .addItem('Coins', [499, 3998], 18)
    .addItem('Grimy dwarf weed', 4, 8)
    .addItem('White berries', 10, 6)
    .addItem('Silver ore', 40, 6)
    .addItem(
		[
			['Uncut emerald', 6],
			['Uncut sapphire', 4]
		],
		1,
		5
	)
    .addItem('Red dragonhide', 10, 5)
    .addItem('Rusty sword', 1, 4)
    .addItem('Muddy key', 1, 4)
    .addItem('Onyx bolt tips', 12, 4)
    .addItem('Long bone', 1, 2)
    .addItem('Fedora', 1, 1)


	/* Subtables */
	.add(RareDropTable, 1, 4)
	.add(GemTable, 1, 4)

export default new SimpleMonster({ id: 6618, name: 'Crazy Archaeologist', table: CrazyArchaeologistTable });
