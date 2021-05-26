import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const FeverSpiderTable = new LootTable({ limit: 128 }).add('Grimy kwuarm', 8);

export default new SimpleMonster({
	id: 626,
	name: 'Fever spider',
	table: FeverSpiderTable,
	aliases: ['fever spider']
});
