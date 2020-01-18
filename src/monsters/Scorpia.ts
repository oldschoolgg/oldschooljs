import LootTable from '../structures/LootTable';
import RareDropTable, { GemTable } from './RareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const ScorpiaUniqueTable = new LootTable()
    .add('Odium shard 3')
    .add('Malediction shard 3')

export const ScorpiaTable = new LootTable()
	.tertiary(18, 'Ensouled scorpion head')
	.tertiary(100, 'Clue scroll (hard)')
	.tertiary(2016, "Scorpia's offspring")
    .add(ScorpiaUniqueTable, undefined, 1)
    
	/* Weapons and armour */
	.addItem('Rune pickaxe', 1, 5)
    .addItem('Rune 2h sword', 1, 5)
    .addItem('Rune spear', 1, 5)
    .addItem('Rune chainbody', 1, 4)
    .addItem('Rune scimitar', 1, 4)
    .addItem('Rune sword', 1, 4)
    .addItem('Rune warhammer', 1, 4)
    .addItem('Dragon scimitar', 1, 1)

    /* Materials */
    .addItem(
		[
			['Uncut emerald', 6],
			['Uncut sapphire', 4]
		],
		1,
		5
	)
	.addItem('Grimy kwuarm', 4, 8)
	.addItem('Bucket of sand', 25, 6)
	.addItem('Cactus spine', 10, 6)


    /* Consumables */
    .addItem('Admiral pie', 3, 8)
    .addItem('Prayer potion(4)', 1, 8)
    .addItem('Shark', 1, 8)
    .addItem('Anchovy pizza', 8, 4)
    .addItem('Superantipoison(4)', 1, 2)

    /* Other */
    .addItem('Coins', [499, 3998], 18)
    .addItem('Phoenix necklace', 1, 7)
    .addItem('Dust rune', 30, 4)
    .addItem('Weapon poison(++)', 1, 4)

	/* Subtables */
	.add(RareDropTable, 1, 4)
	.add(GemTable, 1, 4)

export default new SimpleMonster({ id: 6615, name: 'Scorpia', table: ScorpiaTable });
