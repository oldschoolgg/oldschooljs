import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import HerbDropTable from '../subtables/HerbDropTable';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';
import RareSeedTable from '../subtables/RareSeedTable';

const DBHerbTable = new LootTable()
	.add(HerbDropTable, 1, 4)
	.add([[HerbDropTable], [HerbDropTable]], 1, 1);

export const DarkBeastTable = new LootTable()
	.every('Big bones')

	/*Weapons and armour */
	.addItem('Black battleaxe', 1, 3)
	.addItem('Adamant sq shield', 1, 1)
	.addItem('Rune chainbody', 1, 1)
	.addItem('Rune med helm', 1, 1)
	.addItem('Rune full helm', 1, 1)
	.addItem('Rune 2h sword', 1, 1)
	.addItem('Rune battleaxe', 1, 1)
	.oneIn(512, 'Dark bow')

	/* Runes and ammunition */
	.addItem('Death rune', 20, 8)
	.addItem('Chaos rune', 30, 7)
	.addItem('Blood rune', 15, 4)

	/* Herbs */
	.add(DBHerbTable, undefined, 24)

	/* Seeds */
	.add(RareSeedTable, undefined, 4)

	/* Coins */
	.add('Coins', 152, 40)
	.add('Coins', 64, 6)
	.add('Coins', 95, 6)
	.add('Coins', 220, 5)

	/* Other */
	.addItem('Shark', 1, 3)
	.addItem('Adamantite bar', 3, 2)
	.addItem('Adamantite ore', 5, 1)
	.addItem('Death talisman', 1, 1)
	.addItem('Runite ore', 1, 1)
	.addItem('Shark', 2, 1)

	/* Rdt */
	.add(RareDropTable, undefined, 3)
	.add(GemTable, undefined, 3)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(400, 'Long bone')
	.tertiary(1200, 'Clue scroll (elite)')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 4005,
	name: 'Dark Beast',
	table: DarkBeastTable,
	aliases: ['dark beast', 'dark b']
});
