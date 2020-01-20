import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';

const ChaosFanaticUniqueTable = new LootTable().add('Odium shard 1').add('Malediction shard 1');

export const ChaosFanaticTable = new LootTable()
	.every('Bones')
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(1000, 'Pet chaos elemental')
	.add(ChaosFanaticUniqueTable, undefined, 1)

	/* Weapons and armour */
	.addItem('Battlestaff', 5, 5)
	.addItem('Splitbark body', 1, 5)
	.addItem('Splitbark legs', 1, 5)
	.addItem(
		[
			['Zamorak monk top', 1],
			['Zamorak monk bottom', 1]
		],
		1,
		4
	)
	.addItem('Ancient staff', 1, 1)

	/* Runes */
	.addItem('Fire rune', 250, 4)
	.addItem('Smoke rune', 30, 4)
	.addItem('Chaos rune', 175, 4)
	.addItem('Blood rune', 50, 4)

	/* Consumables */
	.addItem('Monkfish', 3, 8)
	.addItem('Shark', 1, 8)
	.addItem('Prayer potion(4)', 1, 8)
	.addItem('Anchovy pizza', 8, 4)

	/* Other */
	.addItem('Coins', [499, 3998], 18)
	.addItem('Grimy lantadyme', 4, 8)
	.addItem('Ring of life', 1, 7)
	.addItem('Chaos talisman', 1, 6)
	.addItem('Wine of zamorak', 10, 6)
	.addItem(
		[
			['Uncut emerald', 6],
			['Uncut sapphire', 4]
		],
		1,
		5
	)
	.addItem('Sinister key', 1, 4)
	.addItem('Pure essence', 250, 2)

	/* Subtables */
	.add(RareDropTable, 1, 4)
	.add(GemTable, 1, 4);

export default new SimpleMonster({ id: 6619, name: 'Chaos Fanatic', table: ChaosFanaticTable });
