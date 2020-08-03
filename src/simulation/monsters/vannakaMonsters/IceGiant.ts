import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import UncommonSeedDropTable from '../../subtables/UncommonSeedDropTable';
import { GemTable } from '../../subtables/RareDropTable';

//Wildy loot table, not rev cave
const IceGiantTable = new LootTable()
	.every('Big bones')

	/*Weapons and armour */
	.add('Iron 2h sword', 1, 5)
	.add('Black kiteshield', 1, 4)
	.add('Steel axe', 1, 4)
	.add('Steel sword', 1, 4)
	.add('Iron platelegs', 1, 1)
	.add('Mithril mace', 1, 1)
	.add('Mithril sq shield', 1, 1)

	/* Runes and ammunition */
	.add('Adamant arrow', 5, 6)
	.add('Nature rune', 6, 4)
	.add('Mind rune', 24, 3)
	.add('Body rune', 37, 3)
	.add('Law rune', 3, 2)
	.add('Water rune', 12, 1)
	.add('Cosmic rune', 4, 1)
	.add('Death rune', 3, 1)
	.add('Blood rune', 2, 1)

	/* Seeds */
	.add(UncommonSeedDropTable, 1, 8)

	/* Coins */
	.add('Coins', 117, 32)
	.add('Coins', 53, 12)
	.add('Coins', 196, 10)
	.add('Coins', 8, 7)
	.add('Coins', 22, 6)
	.add('Coins', 400, 2)

	/* Other */
	.add('Jug of wine', 1, 3)
	.add('Mithril ore', 1, 1)
	.add('Banana', 1, 1)

	/* Gem drop table */
	.add(GemTable, 1, 4)

	/* Tertiary */
	.tertiary(21, 'Ensouled giant head')
	.tertiary(40, 'Clue scroll (beginner)')
	.tertiary(400, 'Long bone')
	.tertiary(5000, 'Giant champion scroll')
	.tertiary(5013, 'Curved bone');

export default new SimpleMonster({
	id: 2085,
	name: 'Ice giant',
	table: IceGiantTable,
	aliases: ['ice giant']
});
