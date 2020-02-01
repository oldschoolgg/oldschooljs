import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const TzTokJadTable = new LootTable().every('Fire cape').oneIn(100, 'Tzrek-jad');

export default new SimpleMonster({
	id: 3127,
	name: 'TzTokJad',
	table: TzTokJadTable,
	aliases: ['tztokjad', 'jad']
});
