import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareDropTable from '../../subtables/RareDropTable';
import HerbDropTable from '../../subtables/HerbDropTable';
import CommonSeedDropTable from '../../subtables/CommonSeedDropTable';

const MutatedZygomiteTable = new LootTable()
	.every('Ashes')

	/*Weapons and armour */
	.addItem('Steel axe', 1, 10)
	.addItem('Steel 2h sword', 1, 10)
	.addItem('Mithril full helm', 1, 5)
	.addItem('Rune full helm', 1, 5)

	/* Runes and ammunition */
	.addItem('Nature rune', 5, 15)
	.addItem('Law rune', [10, 20], 10)
	.addItem('Earth rune', 15, 10)

	/* Herbs */
	.add(HerbDropTable, 1, 16)

	/* Seeds */
	.add(CommonSeedDropTable, 1, 10)

	/* Other */
	.addItem('Coins', [44, 400], 9)
	.addItem('Supercompost', [1, 3], 7)
	.addItem('Mort myre fungus', [1, 5], 7)
	.addItem('Clay', 1, 7)
	.addItem('Fungicide', 1, 7)

	/* Rdt */
	.add(RareDropTable, 1, 1);

export default new SimpleMonster({
	id: 537,
	name: 'Mutated Zygomite',
	table: MutatedZygomiteTable,
	aliases: ['mutated zygomite', 'zygomite']
});
