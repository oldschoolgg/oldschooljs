import LootTable from '../../../structures/LootTable';
import GWRareDropTable, { GWGemTable, ShardTable } from '../../subtables/GWRareDropTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const GeneralGraardorArmorTable = new LootTable()
	.add('Bandos chestplate')
	.add('Bandos tassets')
	.add('Bandos boots');

const MinionUniqueTable = new LootTable()
	.add('Coins', [1_400, 1_500], 124)
	.add(GeneralGraardorArmorTable, 1, 3);

const MinionShardTable = new LootTable().add('Coins', [1_400, 1_500], 9).add(ShardTable, 1, 3);

const MinionTable = new LootTable()
	.every('Bones')
	.add(MinionUniqueTable, 1, 1)
	.add(MinionShardTable, 1, 1)
	.addItem('Steel dart', [95, 100], 8)
	.addItem('Nature rune', [15, 20], 8)
	.addItem('Cosmic rune', [25, 30], 8)
	.addItem('Shark', 2, 8)
	.addItem('Chilli potato', 3, 8)
	.addItem('Steel arrow', [95, 100], 7)
	.addItem('Coins', [1_400, 1_500], 66)
	.addItem('Limpwurt root', 5, 8)
	.addItem('Combat potion(3)', 1, 2)
	.addItem('Super strength(3)', 1, 2)
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(5000, 'Goblin champion scroll');

const StrongsackMinionTable = new LootTable(6).every(MinionTable).addItem('Kebab', 1, 1);
const SteelwillMinionTable = new LootTable(6).every(MinionTable).addItem('Beer', 1, 1);
const GrimspikeMinionTable = new LootTable(6).every(MinionTable).addItem('Right eye patch', 1, 1);

const UniqueTable = new LootTable()
	.add(GeneralGraardorArmorTable, undefined, 4)
	.add(ShardTable, undefined, 2)
	.addItem('Bandos hilt')
	.addItem('Coins', [20_100, 20_600], 5);

export const GeneralGraardorTable = new LootTable()
	.every('Big bones')
	.every(StrongsackMinionTable)
	.every(SteelwillMinionTable)
	.every(GrimspikeMinionTable)
	.add(UniqueTable, undefined, 3)
	.tertiary(250, 'Clue scroll (elite)')
	.tertiary(400, 'Long bone')
	.tertiary(5000, 'Pet general graardor')
	.tertiary(5013, 'Curved bone')

	/* Weapons and armour */
	.addItem('Rune longsword', 1, 8)
	.addItem('Rune 2h sword', 1, 8)
	.addItem('Rune platebody', 1, 8)
	.addItem('Rune pickaxe', 1, 6)

	/* Other */
	.addItem('Coins', [19500, 20000], 28)
	.addItem('Grimy snapdragon', 3, 8)
	.addItem('Snapdragon seed', 1, 8)
	.addItem('Super restore(4)', 3, 8)
	.addItem('Adamantite ore', [15, 20], 8)
	.addItem('Coal', [115, 120], 8)
	.addItem('Magic logs', [15, 20], 8)
	.addItem('Nature rune', [65, 70], 8)

	.add(GWRareDropTable, undefined, 8)
	.add(GWGemTable, undefined, 2);

export default new SimpleMonster({
	id: 2215,
	name: 'General Graardor',
	table: GeneralGraardorTable,
	aliases: ['graardor', 'bandos', 'general graardor']
});
