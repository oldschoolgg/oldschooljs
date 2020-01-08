import LootTable from '../structures/LootTable';
import RareDropTable, { GemTable } from './RareDropTable';
import TalismanTable from './TalismanTable';
import SimpleMonster from '../structures/SimpleMonster';

export const DagannothRexTable = new LootTable()
	.every('Dagannoth bones')
	.every('Dagannoth hide')
	.tertiary(20, 'Ensouled dagannoth head')
	.tertiary(42, 'Clue scroll (hard)')
	.tertiary(750, 'Clue scroll (elite)')
	.tertiary(5000, 'Pet dagannoth Rex')

	/* Weapons and armour */
	.addItem('Steel kiteshield', 1, 17)
	.addItem('Mithril warhammer', 1, 11)
	.addItem('Adamant axe', 1, 7)
	.addItem('Steel platebody', 1, 4)
	.addItem('Mithril pickaxe', 1, 3)
	.addItem('Adamant platebody', 1, 2)
	.addItem('Fremennik blade', 1, 2)
	.addItem('Rune axe')
	.addItem('Fremennik shield')
	.addItem('Fremennik helm')
	.addItem('Mithril 2h sword')
	.addItem('Dragon axe')
	.addItem('Ring of life')
	.addItem('Rock-shell plate')
	.addItem('Rock-shell legs')
	.addItem('Berserker ring')
	.addItem('Warrior ring')

	/* Potions */
	.addItem('Antifire potion(2)')
	.addItem('Prayer potion(2)')
	.addItem('Restore potion(2)')
	.addItem('Super attack(2)')
	.addItem('Super strength(2)')
	.addItem('Super defence(2)')
	.addItem('Zamorak brew(2)')

	/* Ores and bars */
	.addItem('Mithril ore', 25, 10)
	.addItem('Adamantite bar', 1, 3)
	.addItem('Coal', 100, 2)
	.addItem('Iron ore', 150, 1)
	.addItem('Steel bar', [15, 30], 1)

	/* Other */
	.addItem('Coins', [500, 1109], 10)
	.addItem('Grimy ranarr weed', 1, 7)
	.addItem('Bass', 5, 7)
	.addItem('Swordfish', 5, 4)
	.addItem('Shark', 5, 1)
	.add(RareDropTable, undefined, 8)
	.add(GemTable, undefined, 10)
	.add(TalismanTable);

export default new SimpleMonster({ id: 2267, name: 'Dagannoth Rex', table: DagannothRexTable });
