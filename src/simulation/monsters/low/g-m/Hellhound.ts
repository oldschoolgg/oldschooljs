import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const HellhoundTable = new LootTable()
	.every('Bones')
	.oneIn(32_768, 'Smouldering stone')
	.tertiary(64, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 104,
	name: 'Hellhound',
	table: HellhoundTable,
	aliases: ['hellhound', 'hellh']
});
