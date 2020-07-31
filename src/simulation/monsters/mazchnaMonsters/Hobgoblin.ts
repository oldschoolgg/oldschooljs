import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';
import HerbDropTable from '../../subtables/HerbDropTable';
import UncommonSeedDropTable from '../../subtables/UncommonSeedDropTable';

export const HobgoblinTable = new LootTable({ limit: 128 })
	.every('Bones')

	/* Weapons */
	.add('Iron sword', 1, 3)
	.add('Steel dagger', 1, 3)
	.add('Steel longsword', 1, 1)

	/* Runes and ammunition */
	.add('Law rune', 2, 3)
	.add('Water rune', 2, 2)
	.add('Fire rune', 7, 2)
	.add('Body rune', 6, 2)
	.add('Chaos rune', 3, 2)
	.add('Nature rune', 4, 2)
	.add('Cosmic rune', 2, 1)
	.add('Iron javelin', 5, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 7)

	/* Seeds */
	.add(UncommonSeedDropTable, 1, 12)

	/* Coins */
	.add('Coins', 15, 34)
	.add('Coins', 5, 12)
	.add('Coins', 28, 4)
	.add('Coins', 62, 4)
	.add('Coins', 42, 3)
	.add('Coins', 1, 3)
	.add('Coins', 1, 1)

	/* Other */
	.add('Limpwurt root', 1, 21)
	.add('Goblin mail', 1, 2)

	/* Gem drop table */
	.add(GemTable, 1, 2)

	/* Tertiary */
	.tertiary(70, 'Clue scroll (beginner)')
	.tertiary(5000, 'Hobgoblin champion scroll');

export default new SimpleMonster({
	id: 2241,
	name: 'Hobgoblin',
	table: HobgoblinTable,
	aliases: ['hobgoblin']
});
