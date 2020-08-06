import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { RockslugTable } from '../mazchnaMonsters/Rockslug';

const GiantRockslugTable = new LootTable()
	.every(RockslugTable, 3)

	/* Superior Slayer tertiary */
	.oneIn(354, 'Mist battlestaff')
	.oneIn(354, 'Dust battlestaff')
	.oneIn(1240, 'Eternal gem')
	.oneIn(1240, 'Imbued heart');

export default new SimpleMonster({
	id: 7392,
	name: 'Giant rockslug',
	table: GiantRockslugTable,
	aliases: ['giant rockslug']
});
