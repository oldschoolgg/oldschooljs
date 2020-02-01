import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const TzTokJadTable = new LootTable().every('Infernal cape').oneIn(75, 'Jal-nib-rek');

export default new SimpleMonster({
	id: 7706,
	name: 'TzKalZuk',
	table: TzTokJadTable,
	aliases: ['tzkalzuk', 'zuk']
});
