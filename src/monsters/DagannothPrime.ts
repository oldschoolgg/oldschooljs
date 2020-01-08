import LootTable from '../structures/LootTable';
import RareDropTable, { GemTable } from './RareDropTable';
import RareSeedTable from './RareSeedTable';
import TalismanTable from './TalismanTable';
import SimpleMonster from '../structures/SimpleMonster';

export const DagannothPrimeTable = new LootTable()
	.every('Dagannoth bones')
	.every('Dagannoth hide')
	.tertiary(20, 'Ensouled dagannoth head')
	.tertiary(42, 'Clue scroll (hard)')
	.tertiary(750, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet dagannoth prime')

	/* Weapons and armour */
	.addItem('Earth battlestaff', 1, 10)
	.addItem('Water battlestaff', 1, 5)
	.addItem('Air battlestaff', 1, 4)
	.addItem('Battlestaff', [1, 10], 1)
	.addItem('Fremennik blade')
	.addItem('Fremennik shield')
	.addItem('Fremennik helm')
	.addItem('Mud battlestaff')
	.addItem('Dragon axe')
	.addItem('Farseer helm')
	.addItem('Skeletal top')
	.addItem('Skeletal bottoms')
	.addItem('Seers ring')

	/* Runes */
	.addItem('Air rune', [100, 200], 6)
	.addItem('Earth rune', [50, 100], 5)
	.addItem('Blood rune', [25, 75], 2)
	.addItem('Law rune', [10, 75], 2)
	.addItem('Nature rune', [25, 50], 2)
	.addItem('Mud rune', [25, 75], 2)
	.addItem('Death rune', [25, 85], 2)

	/* Talismans */
	.addItem('Earth talisman', [25, 75], 10)
	.addItem('Air talisman', [25, 75], 7)
	.addItem('Water talisman', [1, 76], 7)
	.add(TalismanTable)

	/* Other */
	.addItem('Shark', 5, 10)
	.addItem('Oyster pearls', 1, 5)
	.addItem('Pure essence', 150, 5)
	.addItem('Grimy ranarr weed', 1, 5)
	.addItem('Coins', [500, 1109], 3)
	.add(RareDropTable, undefined, 8)
	.add(GemTable, undefined, 10)
	.add(RareSeedTable, undefined, 7);

export default new SimpleMonster({ id: 2266, name: 'Dagannoth Prime', table: DagannothPrimeTable });
