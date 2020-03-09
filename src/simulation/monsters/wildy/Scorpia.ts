import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../../subtables/RareDropTable';

const ScorpiaUniqueTable = new LootTable().add('Odium shard 3').add('Malediction shard 3');

const ScorpiaTable = new LootTable()
	.tertiary(18, 'Ensouled scorpion head')
	.tertiary(100, 'Clue scroll (hard)')
	.tertiary(2016, "Scorpia's offspring")
	.add(ScorpiaUniqueTable, undefined, 1)

	/* Weapons and armour */
	.add('Rune pickaxe', 1, 5)
	.add('Rune 2h sword', 1, 5)
	.add('Rune spear', 1, 5)
	.add('Rune chainbody', 1, 4)
	.add('Rune scimitar', 1, 4)
	.add('Rune sword', 1, 4)
	.add('Rune warhammer', 1, 4)
	.add('Dragon scimitar', 1, 1)

	/* Materials */
	.add(
		[
			['Uncut emerald', 6],
			['Uncut sapphire', 4]
		],
		1,
		5
	)
	.add('Grimy kwuarm', 4, 8)
	.add('Bucket of sand', 25, 6)
	.add('Cactus spine', 10, 6)

	/* Consumables */
	.add('Admiral pie', 3, 8)
	.add('Prayer potion(4)', 1, 8)
	.add('Shark', 1, 8)
	.add('Anchovy pizza', 8, 4)
	.add('Superantipoison(4)', 1, 2)

	/* Other */
	.add('Coins', [499, 3998], 18)
	.add('Phoenix necklace', 1, 7)
	.add('Dust rune', 30, 4)
	.add('Weapon poison(++)', 1, 4)

	/* Subtables */
	.add(RareDropTable, 1, 4)
	.add(GemTable, 1, 4);

export default new SimpleMonster({
	id: 6615,
	name: 'Scorpia',
	table: ScorpiaTable,
	aliases: ['scorpia']
});
