import GWRareDropTable, { GWGemTable, ShardTable } from './simulation/subtables/GWRareDropTable';
import LootTable from './structures/LootTable';

export function makelootTableClass(_lootTableClass: any, small?: boolean) {
	const lootTableClass = _lootTableClass as typeof LootTable;

	const GeneralGraardorArmorTable = new lootTableClass()
		.add('Bandos chestplate')
		.add('Bandos tassets')
		.add('Bandos boots');

	const MinionUniqueTable = new lootTableClass().add('Coins', [1400, 1500], 124).add(GeneralGraardorArmorTable, 1, 3);

	const MinionShardTable = new lootTableClass().add('Coins', [1400, 1500], 9).add(ShardTable, 1, 3);

	const MinionTable = new lootTableClass()
		.every('Bones')
		.add(MinionUniqueTable, 1, 1)
		.add(MinionShardTable, 1, 1)
		.add('Steel dart', [95, 100], 8)
		.add('Nature rune', [15, 20], 8)
		.add('Cosmic rune', [25, 30], 8)
		.add('Shark', 2, 8)
		.add('Chilli potato', 3, 8)
		.add('Steel arrow', [95, 100], 7)
		.add('Coins', [1400, 1500], 66)
		.add('Limpwurt root', 5, 8)
		.add('Combat potion(3)', 1, 2)
		.add('Super strength(3)', 1, 2)
		.tertiary(128, 'Clue scroll (hard)')
		.tertiary(5000, 'Goblin champion scroll');

	if (small) {
		return MinionTable;
	}

	const StrongsackMinionTable = new lootTableClass({ limit: 6 }).every(MinionTable).add('Kebab', 1, 1);
	const SteelwillMinionTable = new lootTableClass({ limit: 6 }).every(MinionTable).add('Beer', 1, 1);
	const GrimspikeMinionTable = new lootTableClass({ limit: 6 }).every(MinionTable).add('Right eye patch', 1, 1);

	const UniqueTable = new lootTableClass()
		.add(GeneralGraardorArmorTable, 1, 4)
		.add(ShardTable, 1, 2)
		.add('Bandos hilt')
		.add('Coins', [20_100, 20_600], 5);

	return (
		new lootTableClass()
			.every('Big bones')
			.every(StrongsackMinionTable)
			.every(SteelwillMinionTable)
			.every(GrimspikeMinionTable)
			.add(UniqueTable, 1, 3)
			.tertiary(250, 'Clue scroll (elite)')
			.tertiary(400, 'Long bone')
			.tertiary(5000, 'Pet general graardor')
			.tertiary(5013, 'Curved bone')

			/* Weapons and armour */
			.add('Rune longsword', 1, 8)
			.add('Rune 2h sword', 1, 8)
			.add('Rune platebody', 1, 8)
			.add('Rune pickaxe', 1, 6)

			/* Other */
			.add('Coins', [19_500, 20_000], 28)
			.add('Grimy snapdragon', 3, 8)
			.add('Snapdragon seed', 1, 8)
			.add('Super restore(4)', 3, 8)
			.add('Adamantite ore', [15, 20], 8)
			.add('Coal', [115, 120], 8)
			.add('Magic logs', [15, 20], 8)
			.add('Nature rune', [65, 70], 8)

			.add(GWRareDropTable, 1, 8)
			.add(GWGemTable, 1, 2)
	);
}
