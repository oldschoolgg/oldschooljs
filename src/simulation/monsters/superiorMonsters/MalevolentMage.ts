import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { InfernalMagePreTable } from '../vannakaMonsters/InfernalMage';

const MalevolentMageTable = new LootTable()
	.every('Bones')
	.every(InfernalMagePreTable, 3)

	/* Superior Slayer tertiary */
	.oneIn(274, 'Mist battlestaff')
	.oneIn(275, 'Dust battlestaff')
	.oneIn(960, 'Eternal gem')
	.oneIn(960, 'Imbued heart');

export default new SimpleMonster({
	id: 7396,
	name: 'Malevolent Mage',
	table: MalevolentMageTable,
	aliases: ['malevolent mage']
});
