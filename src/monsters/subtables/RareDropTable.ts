import LootTable from '../../structures/LootTable';

const MegaRareTable = new LootTable()
	.addItem('Rune spear', 1, 8)
	.addItem('Shield left half', 1, 4)
	.addItem('Dragon spear', 1, 3);

export const GemTable = new LootTable()
	.addItem('Uncut sapphire', 1, 32)
	.addItem('Uncut emerald', 1, 16)
	.addItem('Uncut ruby', 1, 8)
	.addItem('Chaos Talisman', 1, 3)
	.addItem('Uncut diamond', 1, 2)
	.addItem('Rune javelin', 5, 1)
	.addItem('Loop half of key')
	.addItem('Tooth half of key')
	.add(MegaRareTable);

const RareDropTable = new LootTable()
	/* Runes and ammunition */
	.addItem('Nature rune', 67, 3)
	.addItem('Adamant javelin', 20, 2)
	.addItem('Death rune', 45, 2)
	.addItem('Law rune', 45, 2)
	.addItem('Rune arrow', 42, 2)
	.addItem('Steel arrow', 150, 2)

	/* Weapons and armour */
	.addItem('Rune 2h sword', 1, 3)
	.addItem('Rune battleaxe', 1, 3)
	.addItem('Rune sq shield', 1, 2)
	.addItem('Dragon med helm', 1, 1)
	.addItem('Rune kiteshield', 1, 1)

	/* Other */
	.addItem('Coins', 3000, 21)
	.addItem('Loop half of key', 1, 20)
	.addItem('Tooth half of key', 1, 20)
	.addItem('Runite bar', 1, 5)
	.addItem('Dragonstone', 1, 2)
	.addItem('Silver ore', 100, 2)

	/* Subtables */
	.add(GemTable, 1, 20)
	.add(MegaRareTable, 1, 15);

export default RareDropTable;
