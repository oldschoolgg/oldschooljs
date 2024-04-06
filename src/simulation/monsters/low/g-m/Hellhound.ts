import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";

const WildySlayerCaveTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 65)
	.add("Blighted anglerfish", [1, 2], 87)
	.add("Blighted manta ray", [1, 2], 87)
	.add("Blighted karambwan", [1, 2], 131)
	.add("Blighted teleport spell sack", [1, 10], 131)
	.add("Blighted ancient ice sack", [1, 10], 131)
	.add("Blighted vengeance sack", [1, 10], 131)
	.add("Blighted super restore(4)", 1, 261)
	.add("Revenant cave teleport", 1, 261)
	.add("Dareeyak teleport", 1, 1306)
	.add("Wilderness crabs teleport", 1, 1306)
	.add("Carrallanger teleport", 1, 1306)
	.add("Paddewwa teleport", 1, 1306)
	.add("Annakarl teleport", 1, 1306)
	.add("Lassar teleport", 1, 1306)
	.add("Kharyrll teleport", 1, 1306)
	.add("Senntisten teleport", 1, 1306)
	.add("Ghorrock teleport", 1, 1306)
	.add("Target teleport", 1, 1306)
	.add("Magic shortbow scroll", 1, 3265)
	.add("Ring of wealth scroll", 1, 3265)
	.add("Trouver parchment", 2, 13_059)
	.add("Looting bag note", 1, 13_059);

const HellhoundTable = new LootTable()
	.every("Vile ashes")
	.oneIn(32_768, "Smouldering stone")
	.tertiary(64, "Clue scroll (hard)");

const HellhoundWildyCaveTable = new LootTable().every(HellhoundTable).tertiary(1.25, WildySlayerCaveTable);

export default new SimpleMonster({
	id: 104,
	name: "Hellhound",
	table: HellhoundTable,
	wildyCaveTable: HellhoundWildyCaveTable,
	aliases: ["hellhound", "hellh"],
});
