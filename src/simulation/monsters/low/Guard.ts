import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import FixedAllotmentSeedTable from '../../subtables/FixedAllotmentSeedTable';

export const GuardTable = new LootTable(128)
	.every('Bones')
	.tertiary(106, 'Clue scroll (medium)')

	/* Runes and ammunition */
	.addItem('Iron bolts', [2, 12], 10)
	.addItem('Steel arrow', 1, 4)
	.addItem('Bronze arrow', 1, 3)
	.addItem('Air rune', 6, 2)
	.addItem('Earth rune', 3, 2)
	.addItem('Fire rune', 2, 2)
	.addItem('Blood rune', 1, 1)
	.addItem('Chaos rune', 1, 1)
	.addItem('Nature rune', 1, 1)
	.addItem('Steel arrow', 5, 1)

	/* Coins */
	.addItem('Coins', 1, 19)
	.addItem('Coins', 7, 16)
	.addItem('Coins', 12, 9)
	.addItem('Coins', 4, 8)
	.addItem('Coins', 25, 4)
	.addItem('Coins', 17, 4)
	.addItem('Coins', 30, 2)

	/* Other */
	.add(FixedAllotmentSeedTable, undefined, 18)
	.addItem('Iron dagger', 1, 6)
	.addItem('Body talisman', 1, 4)
	.addItem('Grain', 1, 1)
	.addItem('Iron ore', 1, 1);

export default new SimpleMonster({
	id: 995,
	name: 'Guard',
	table: GuardTable,
	aliases: ['guard']
});
