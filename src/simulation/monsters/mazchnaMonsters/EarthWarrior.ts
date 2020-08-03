import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import UncommonSeedDropTable from '../../subtables/UncommonSeedDropTable';
import { GemTable } from '../../subtables/RareDropTable';

export const EarthWarriorTable = new LootTable({ limit: 128 })

	/* Weapons */
	.add('Steel spear', 1, 3)
	.add('Staff of earth', 1, 2)

	/* Runes */
	.add('Earth rune', 12, 13)
	.add('Nature rune', 3, 9)
	.add('Chaos rune', 3, 7)
	.add('Law rune', 2, 6)
	.add('Death rune', 2, 4)
	.add('Earth rune', 60, 3)
	.add('Blood rune', 2, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 14)

	/* Seeds */
	.add(UncommonSeedDropTable, 1, 18)

	/* Coins */
	.add('Coins', 12, 18)

	/* Gem drop table */
	.add(GemTable, 1, 2);

export default new SimpleMonster({
	id: 2840,
	name: 'Earth warrior',
	table: EarthWarriorTable,
	aliases: ['earth warrior']
});
