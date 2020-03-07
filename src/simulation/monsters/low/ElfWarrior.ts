import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import { GemTable } from '../../subtables/RareDropTable';

const ElfWarriorTable = new LootTable()
	.every('Bones')

	/*Weapons and armour */
	.addItem("Green d'hide body", 1, 4)
	.addItem("Green d'hide chaps", 1, 3)
	.addItem('Mithril spear', 1, 2)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Adamant full helm', 1, 1)
	.addItem('Rune dagger', 1, 1)

	/* Runes and ammunition */
	.addItem('Water rune', 70, 8)
	.addItem('Nature rune', 12, 5)
	.addItem('Law rune', 2, 3)
	.addItem('Fire rune', 37, 2)

	/* Herbs */
	.add(HerbDropTable, 1, 15)

	/* Coins */
	.addItem('Coins', 44, 29)
	.addItem('Coins', 180, 10)
	.addItem('Coins', 20, 5)

	/* Other */
	.addItem('Crystal teleport seed', 1, 25)
	.addItem('Bass', 1, 3)
	.addItem('Shark', 1, 3)
	.addItem('Adamantite ore', 1, 2)

	/* Rdt */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(40, 'Ensouled elf head')
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 5293,
	name: 'Elf Warrior',
	table: ElfWarriorTable,
	aliases: ['elf', 'elf warrior']
});
