import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { PyrelordPreTable } from '../mazchnaMonsters/Pyrelord';

const InfernalPyrelordTable = new LootTable()
	.every('Ashes')
	.every(PyrelordPreTable, 3)

	/* Tertiary */
	.oneIn(11, 'Clue scroll (medium)')

	/* Superior Slayer tertiary */
	.oneIn(325, 'Mist battlestaff')
	.oneIn(325, 'Dust battlestaff')
	.oneIn(1138, 'Eternal gem')
	.oneIn(1138, 'Imbued heart');

export default new SimpleMonster({
	id: 9465,
	name: 'Infernal pyrelord',
	table: InfernalPyrelordTable,
	aliases: ['infernal pyrelord']
});
