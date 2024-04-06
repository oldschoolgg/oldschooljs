import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import HerbDropTable from "../../../subtables/HerbDropTable";
import { GemTable } from "../../../subtables/RareDropTable";
import RareSeedTable from "../../../subtables/RareSeedTable";

const WildySlayerCaveTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 60)
	.add("Blighted anglerfish", [1, 2], 80)
	.add("Blighted manta ray", [1, 2], 80)
	.add("Blighted karambwan", [1, 2], 121)
	.add("Blighted teleport spell sack", [1, 10], 121)
	.add("Blighted ancient ice sack", [1, 10], 121)
	.add("Blighted vengeance sack", [1, 10], 121)
	.add("Blighted super restore(4)", 1, 241)
	.add("Revenant cave teleport", 1, 241)
	.add("Dareeyak teleport (tablet)", 1, 1207)
	.add("Wilderness crabs teleport", 1, 1207)
	.add("Carrallanger teleport (tablet)", 1, 1207)
	.add("Paddewwa teleport (tablet)", 1, 1207)
	.add("Annakarl teleport (tablet)", 1, 1207)
	.add("Lassar teleport (tablet)", 1, 1207)
	.add("Kharyrll teleport (tablet)", 1, 1207)
	.add("Senntisten teleport (tablet)", 1, 1207)
	.add("Ghorrock teleport (tablet)", 1, 1207)
	.add("Target teleport", 1, 1207)
	.add("Magic shortbow scroll", 1, 3016)
	.add("Ring of wealth scroll", 1, 3016)
	.add("Trouver parchment", 2, 12_065)
	.add("Looting bag note", 1, 12_065);

const GreaterNechryaelTable = new LootTable()
	.every("Malicious ashes")

	/* Weapons and armor */
	.add("Adamant kiteshield", 1, 7)
	.add("Rune axe", 1, 7)
	.add("Rune sq shield", 1, 7)
	.add("Adamant battleaxe", 1, 5)
	.add("Rune med helm", 1, 4)
	.add("Rune full helm", 1, 3)
	.add("Mystic air staff", 1, 2)
	.add("Rune boots", 1, 1)
	.add("Rune chainbody", 1, 1)

	/* Runes */
	.add("Death rune", 23, 12)
	.add("Blood rune", 20, 10)
	.add("Chaos rune", 50, 10)
	.add("Air rune", 150, 6)
	.add("Soul rune", 25, 5)

	/* Herbs */
	.add(HerbDropTable, 1, 7)

	/* Seeds */
	.add(RareSeedTable, 2, 5)

	/* Other */
	.add("Lobster", 1, 10)
	.add("Coins", [2000, 2500], 8)
	.add("Gold bar", 5, 7)
	.add("Tuna", 2, 6)
	.add("Wine of zamorak", 3, 2)

	/* Gem drop table */
	.add(GemTable, 1, 3)

	/* Tertiary */
	.tertiary(128, "Clue scroll (hard)");

const GreaterNechryaelWildyCaveTable = new LootTable()
	.every(GreaterNechryaelTable)
	.tertiary(1.09, WildySlayerCaveTable);

export default new SimpleMonster({
	id: 7278,
	name: "Greater Nechryael",
	table: GreaterNechryaelTable,
	wildyCaveTable: GreaterNechryaelWildyCaveTable,
	aliases: ["greater nechryael", "greater nech", "greater nechs", "g nechs"],
});
