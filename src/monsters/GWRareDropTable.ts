import LootTable from '../structures/LootTable';

const GWMegaRareTable = new LootTable()
	.addItem('Coins', [19500, 20000], 113)
	.addItem('Rune spear', 1, 8)
	.addItem('Shield left half', 1, 4)
	.addItem('Dragon spear', 1, 3);

export const ShardTable = new LootTable()
	.addItem('Godsword shard 1')
	.addItem('Godsword shard 2')
	.addItem('Godsword shard 3');

export const GWGemTable = new LootTable()
	.addItem('Coins', [19500, 20000], 63)
	.addItem('Uncut sapphire', 1, 32)
	.addItem('Uncut emerald', 1, 16)
	.addItem('Uncut ruby', 1, 8)
	.addItem('Chaos Talisman', 1, 3)
	.addItem('Uncut diamond', 1, 2)
	.addItem('Rune javelin', 5, 1)
	.addItem('Loop half of key')
	.addItem('Tooth half of key')
	.add(GWMegaRareTable);

const GWRareDropTable = new LootTable()
	/* Runes and ammunition */
	.addItem('Nature rune', [62, 67], 3)
	.addItem('Adamant javelin', [15, 20], 2)
	.addItem('Death rune', [40, 45], 2)
	.addItem('Law rune', [40, 45], 2)
	.addItem('Rune arrow', [38, 43], 2)
	.addItem('Steel arrow', [145, 150], 2)

	/* Weapons and armour */
	.addItem('Rune 2h sword', 1, 3)
	.addItem('Rune battleaxe', 1, 3)
	.addItem('Rune sq shield', 1, 2)
	.addItem('Dragon med helm', 1, 1)
	.addItem('Rune kiteshield', 1, 1)
	.addItem('Rune sword', 1, 5)

	/* Other */
	.addItem('Coins', [19500, 20000], 20)
	.addItem('Loop half of key', 1, 21)
	.addItem('Tooth half of key', 1, 20)
	.addItem('Dragonstone', 1, 2)
	.addItem('Silver ore', 100, 2)

	/* Subtables */
	.add(GWGemTable, 1, 20)
	.add(GWMegaRareTable, 1, 15);

export default GWRareDropTable;
