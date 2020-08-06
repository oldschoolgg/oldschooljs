import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const PyrelordPreTable = new LootTable()
	/* Weapons and armour */
	.add('Mithril axe', 1, 4)
	.add('Mithril full helm', 1, 4)
	.add('Staff of fire', 1, 3)
	.add('Mithril chainbody', 1, 2)
	.add('Adamant med helm', 1, 1)
	.add('Steel boots', 1, 1)

	/* Runes */
	.add('Fire rune', 50, 21)
	.add('Fire rune', 100, 8)
	.add('Chaos rune', 20, 5)
	.add('Death rune', 5, 3)

	/* Coins */
	.add('Coins', 60, 24)
	.add('Coins', 200, 20)
	.add('Coins', 400, 10)
	.add('Coins', 10, 7)
	.add('Coins', 600, 2)

	/* Other */
	.add('Gold ore', 2, 8)
	.add('Jug of wine', 1, 2)

	/* Gem drop table */
	.add(GemTable, 1, 3);

const PyrelordTable = new LootTable()
	.every('Ashes')
	.every(PyrelordPreTable)

	/* Tertiary */
	.tertiary(104, 'Clue scroll (medium)');

export default new SimpleMonster({
	id: 6762,
	name: 'Pyrelord',
	table: PyrelordTable,
	aliases: ['pyrelord']
});
