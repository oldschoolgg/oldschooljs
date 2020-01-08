import LootTable from '../structures/LootTable';
import RareDropTable, { GemTable } from './RareDropTable';
import RareSeedTable from './RareSeedTable';
import TalismanTable from './TalismanTable';
import SimpleMonster from '../structures/SimpleMonster';

export const DagannothSupremeTable = new LootTable()
	.every('Dagannoth bones')
	.every('Dagannoth hide')
	.tertiary(20, 'Ensouled dagannoth head')
	.tertiary(42, 'Clue scroll (hard)')
	.tertiary(750, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet dagannoth supreme')

	/* Weapons and armour */
	.addItem('Mithril knife', [25, 50], 10)
	.addItem(`Red d'hide vamb`, 1, 7)
	.addItem('Rune thrownaxe', [5, 10], 5)
	.addItem('Adamant dart', [10, 25], 5)
	.addItem('Iron knife', [200, 500], 5)
	.addItem('Steel knife', [50, 150], 5)
	.addItem('Fremennik blade')
	.addItem('Fremennik shield')
	.addItem('Fremennik helm')
	.addItem('Seercull')
	.addItem('Dragon axe')
	.addItem('Archer helm')
	.addItem('Spined body')
	.addItem('Spined chaps')
	.addItem('Archers ring')

	/* ammunition */
	.addItem('Steel arrow', [50, 250], 5)
	.addItem('Runite bolts', [2, 12], 5)
	.addItem('Iron arrow', [200, 700], 4)

	/* Other */
	.addItem('Coins', [500, 1109], 10)
	.addItem('Oyster pearls', 1, 6)
	.addItem('Opal bolt tips', [10, 30], 5)
	.addItem('Shark', 5, 5)
	.addItem('Yew logs', [50, 150], 5)
	.addItem('Grimy ranarr weed', 1, 5)
	.addItem('Maple logs', [15, 65], 3)
	.addItem('Runite limbs', 1, 2)
	.addItem('Feather', [250, 500], 1)
	.add(RareDropTable, undefined, 8)
	.add(GemTable, undefined, 10)
	.add(RareSeedTable, undefined, 7)
	.add(TalismanTable);

export default new SimpleMonster({
	id: 2265,
	name: 'Dagannoth Supreme',
	table: DagannothSupremeTable
});
