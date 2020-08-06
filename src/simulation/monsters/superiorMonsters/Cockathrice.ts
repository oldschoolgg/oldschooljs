import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { CockatricePreTable } from '../mazchnaMonsters/Cockatrice';

const CockathriceTable = new LootTable()
	.every('Bones')
	.every(CockatricePreTable, 3)

	/* Tertiary */
	.oneIn(13, 'Clue scroll (medium)')
	.oneIn(1000, 'Cockatrice head')

	/* Superior Slayer tertiary */
	.oneIn(340, 'Mist battlestaff')
	.oneIn(340, 'Dust battlestaff')
	.oneIn(1190, 'Eternal gem')
	.oneIn(1190, 'Imbued heart');

export default new SimpleMonster({
	id: 7393,
	name: 'Cockathrice',
	table: CockathriceTable,
	aliases: ['cockathrice']
});
