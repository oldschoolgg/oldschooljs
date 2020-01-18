import LootTable from '../structures/LootTable';
import RareDropTable, { GemTable } from './RareDropTable';
import SimpleMonster from '../structures/SimpleMonster';
import HerbDropTable from './HerbDropTable';

export const ChaosElementalTable = new LootTable()
	.tertiary(200, 'Clue scroll (elite)')
    .tertiary(300, 'Pet chaos elemental')
    .tertiary(256, 'Dragon pickaxe')

	/* Weapons and armour */
	.addItem('Dragon dagger', 1, 11)
    .addItem('Dragon 2h sword', 1, 1)

    /* Runes and ammunition */
    .addItem('Air rune', 500, 10)
    .addItem('Blood rune', 75, 10)
    .addItem('Chaos rune', 250, 10)
    .addItem('Death rune', 125, 10)
    .addItem('Mithril dart', 300, 10)
    .addItem('Rune arrow', 150, 10)

    /* Other */
    .addItem('Strange fruit', 10, 13)
    .addItem('Antidote++(4)', 1, 10)
    .addItem('Weapon poison(++)', 1, 10)
    .addItem('Coins', 7500, 8)

    /* Subtables */
    .add(HerbDropTable, 1, 4)
	.add(RareDropTable, 1, 8)
	.add(GemTable, 1, 3)
export default new SimpleMonster({ id: 2054, name: 'Chaos Elemental', table: ChaosElementalTable });
