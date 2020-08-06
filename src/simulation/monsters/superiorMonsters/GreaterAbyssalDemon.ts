import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { AbyssalDemonPreTable } from '../vannakaMonsters/AbyssalDemon';

const TotemPieceTable = new LootTable()
	.add('Dark totem base')
	.add('Dark totem middle')
	.add('Dark totem top');

const GreaterAbyssalDemonTable = new LootTable()
	.every('Ashes')
	.every('Ensouled abyssal head')
	.every(AbyssalDemonPreTable, 3)
	.tertiary(13, 'Clue scroll (hard)')
	.tertiary(120, 'Clue scroll (elite)')
	.tertiary(6000, 'Abyssal head')
	.every(TotemPieceTable)
	.tertiary(66, 'Ancient shard')

	/* Superior Slayer tertiary */
	.tertiary(99, 'Mist battlestaff')
	.tertiary(99, 'Dust battlestaff')
	.tertiary(346, 'Eternal gem')
	.tertiary(345, 'Imbued heart');

export default new SimpleMonster({
	id: 7410,
	name: 'Greater abyssal demon',
	table: GreaterAbyssalDemonTable,
	aliases: ['greater abyssal demon']
});
