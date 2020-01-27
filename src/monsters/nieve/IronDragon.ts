import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../subtables/RareDropTable';

export const IronDragonTable = new LootTable()
	.every('Dragon bones')
	.every('iron bar', 5)

	/* Pre-roll */
	.oneIn(1024, 'Dragon plateskirt')
	.oneIn(1024, 'Dragon platelegs')

	/*Weapons and armour */
	.addItem('Rune dart(p)', 9, 7)
	.addItem('Adamant 2h sword', 1, 4)
	.addItem('Adamant axe', 1, 3)
	.addItem('Adamant battleaxe', 1, 3)
	.addItem('Rune knife', 5, 3)
	.addItem('Adamant sq shield', 1, 1)
	.addItem('Rune med helm', 1, 1)
	.addItem('Rune battleaxe', 1, 1)

	/* Runes and ammunition */
	.addItem('Rune javelin', 4, 20)
	.addItem('Blood rune', 15, 19)
	.addItem('Adamant bolts', [2, 12], 6)
	.addItem('Soul rune', 3, 5)

	/* Coins */
	.addItem('Coins', 270, 20)
	.addItem('Coins', 550, 10)
	.addItem('Coins', 990, 1)

	/* Other */
	.addItem('Super strength(1)', 1, 8)
	.addItem('Runite limbs', 1, 5)
	.addItem('Adamantite bar', 2, 3)
	.addItem('Curry', 1, 3)

	/* Rdt */
	.add(RareDropTable, undefined, 2)
	.add(GemTable, undefined, 3)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(10000, 'Draconic visage')

	/* Catacombs tertiary */
	.tertiary(203, 'Ancient shard')
	.tertiary(305, 'Dark totem base')
	.tertiary(305, 'Dark totem middle')
	.tertiary(305, 'Dark totem top');

export default new SimpleMonster({
	id: 272,
	name: 'Iron Dragon',
	table: IronDragonTable,
	aliases: ['iron dragon', 'iron d']
});
