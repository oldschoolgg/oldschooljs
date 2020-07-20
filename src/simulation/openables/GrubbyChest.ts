import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const FoodTable = new LootTable()
	.add('Egg potato', 4, 12)
	.add('Shark', 4, 7)
	.add(
		[
			['Saradomin brew(2)', 3],
			['Super restore(2)', 1]
		],
		1,
		1
	);

const PotionTable = new LootTable()
	.add(
		[
			['Super attack(2)', 1],
			['Super strength(2)', 1],
			['Super defence(2)', 1]
		],
		1,
		2
	)
	.add(
		[
			['Super defence(2)', 1],
			['Ranging potion(2)', 1]
		],
		1,
		2
	)
	.add('Super restore(3)', 2, 1)
	.add('Prayer potion(3)', 2, 1);

const GrubbyChestTable = new LootTable()
	/* Food roll */
	// TODO: check back for wiki drop table update in future (Written: 2020-07-20)
	.every(FoodTable, 2)

	/* Potion roll */
	// TODO: check back for wiki drop table update in future (Written: 2020-07-20)
	.every(PotionTable, 1)

	/* Main roll */
	.add('Grimy toadflax', 10, 7)
	.add('Crystal key', 1, 6)
	.add('Law rune', 200, 10)
	.add('Death rune', 200, 10)
	.add('Astral rune', 200, 10)
	.add('Dragon dart tip', 50, 3)
	.add('Dragon arrowtips', 100, 2)
	.add('Blood rune', 200, 10)
	.add('Dragon bones', 10, 6)
	.add('Red dragonhide', 10, 6)
	.add('Grimy ranarr weed', 10, 7)
	.add('Grimy snapdragon', 10, 7)
	.add('Grimy torstol', 5, 7)
	.add('Coins', 10000, 9);

export default new SimpleOpenable({
	id: 23499,
	name: 'Grubby chest',
	aliases: ['grubby chest', 'grubby'],
	table: GrubbyChestTable
});
