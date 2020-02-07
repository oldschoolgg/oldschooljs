import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';

export const HellhoundTable = new LootTable()
	.every('Bones')

	/* Other */
	.oneIn(32_768, 'Smouldering stone')

	/* Tertiary */
	.tertiary(64, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 104,
	name: 'Hellhound',
	table: HellhoundTable,
	aliases: ['hellhound', 'hellh']
});
