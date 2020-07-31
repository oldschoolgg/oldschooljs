import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

export const GhoulTable = new LootTable().every('Bones').tertiary(5000, 'Ghoul champion scroll');

export default new SimpleMonster({
	id: 289,
	name: 'Ghoul',
	table: GhoulTable,
	aliases: ['ghoul']
});
