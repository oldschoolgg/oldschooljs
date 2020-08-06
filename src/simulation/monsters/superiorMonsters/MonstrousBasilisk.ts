import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { BasiliskPreTable } from '../vannakaMonsters/Basilisk';

const MonstrousBasiliskTable = new LootTable()
	.every('Bones')
	.every(BasiliskPreTable, 3)

	/* Tertiary */
	.oneIn(2000, 'Basilisk head')

	/* Superior Slayer tertiary */
	.oneIn(292, 'Mist battlestaff')
	.oneIn(292, 'Dust battlestaff')
	.oneIn(1022, 'Eternal gem')
	.oneIn(1022, 'Imbued heart');

export default new SimpleMonster({
	id: 7395,
	name: 'Monstrous basilisk',
	table: MonstrousBasiliskTable,
	aliases: ['monstrous basilisk']
});
