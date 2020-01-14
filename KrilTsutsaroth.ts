import LootTable from '../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from './GWRareDropTable';
import SimpleMonster from '../structures/SimpleMonster';

const AttStrTable = new LootTable()
    .addItem([
            ['Super attack(3)', 3],
            ['Super strength(3)', 3]
    ]);

const RestoreBrewTable = new LootTable()
    .addItem([
            ['Super restore(3)', 3],
            ['Zamorak brew(3)', 3]
    ]);

export const KrilTsutsarothTable = new LootTable()
	.every('Ashes')
	.addItem('Steam battlestaff', 1, 4)
	.addItem('Zamorakian spear', 1, 4)
	.addItem('Staff of the dead', 1, 1)
	.addItem('Zamorak hilt', 1, 1)
	.add(ShardTable, undefined, 2)
	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(5000, `Pet k'ril tsutsaroth`)

	/* Weapons and armour */
	.addItem('Adamant arrow(p++)', [295, 300], 32)
	.addItem('Rune scimitar', 1, 32)
	.addItem('Adamant platebody', 1, 32)
	.addItem('Rune platelegs', 1, 28)
	.addItem('Dragon dagger(p++)', 1, 8)

	/* Potions */
	.add(AttStrTable, undefined, 32)
	.add(RestoreBrewTable, undefined, 32)


	/* Other */
	.addItem('Coins', [19500, 20000], 132)
	.addItem('Grimy lantadyme', 10, 32)
	.addItem('Lantadyme seed', 3, 32)
	.addItem('Death rune', [120, 125], 32)
	.addItem('Blood rune', [80, 85], 32)



	.add(GWRareDropTable, undefined, 32)
	.add(GWGemTable, undefined, 8);

export default new SimpleMonster({ id: 3129, name: `K'ril Tsutsaroth`, table: KrilTsutsarothTable });