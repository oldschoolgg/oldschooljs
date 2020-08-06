import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { PyrefiendPreTable } from '../mazchnaMonsters/Pyrefiend';

const FlamingPyrelordTable = new LootTable()
	.every('Ashes')
	.every(PyrefiendPreTable, 3)

	/* Tertiary */
	.oneIn(13, 'Clue scroll (medium)')

	/* Superior Slayer tertiary */
	.oneIn(325, 'Mist battlestaff')
	.oneIn(325, 'Dust battlestaff')
	.oneIn(1138, 'Eternal gem')
	.oneIn(1138, 'Imbued heart');

export default new SimpleMonster({
	id: 7394,
	name: 'Flaming pyrelord',
	table: FlamingPyrelordTable,
	aliases: ['flaming pyrelord']
});
