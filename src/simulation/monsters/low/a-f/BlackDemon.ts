import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import HerbDropTable from "../../../subtables/HerbDropTable";
import RareDropTable, { GemTable } from "../../../subtables/RareDropTable";

const WildySlayerCaveTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 61)
	.add("Blighted anglerfish", [1, 2], 81)
	.add("Blighted manta ray", [1, 2], 81)
	.add("Blighted karambwan", [1, 2], 122)
	.add("Blighted teleport spell sack", [1, 10], 122)
	.add("Blighted ancient ice sack", [1, 10], 122)
	.add("Blighted vengeance sack", [1, 10], 122)
	.add("Blighted super restore(4)", 1, 244)
	.add("Revenant cave teleport", 1, 244)
	.add("Dareeyak teleport (tablet)", 1, 1220)
	.add("Wilderness crabs teleport", 1, 1220)
	.add("Carrallanger teleport (tablet)", 1, 1220)
	.add("Paddewwa teleport (tablet)", 1, 1220)
	.add("Annakarl teleport (tablet)", 1, 1220)
	.add("Lassar teleport (tablet)", 1, 1220)
	.add("Kharyrll teleport (tablet)", 1, 1220)
	.add("Senntisten teleport (tablet)", 1, 1220)
	.add("Ghorrock teleport (tablet)", 1, 1220)
	.add("Target teleport", 1, 1220)
	.add("Magic shortbow scroll", 1, 3049)
	.add("Ring of wealth scroll", 1, 3049)
	.add("Trouver parchment", 2, 12_198)
	.add("Looting bag note", 1, 12_198);

const BlackDemonTable = new LootTable()
	.every("Malicious ashes")

	/* Weapons and armour */
	.add("Black sword", 1, 4)
	.add("Steel battleaxe", 1, 3)
	.add("Black axe", 1, 2)
	.add("Mithril kiteshield", 1, 1)
	.add("Rune med helm", 1, 1)
	.add("Rune chainbody", 1, 1)

	/* Runes and ammunition */
	.add("Air rune", 50, 8)
	.add("Chaos rune", 10, 7)
	.add("Blood rune", 7, 4)
	.add("Fire rune", 37, 1)
	.add("Law rune", 3, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 23)

	/* Coins */
	.add("Coins", 132, 40)
	.add("Coins", 30, 7)
	.add("Coins", 44, 6)
	.add("Coins", 220, 6)
	.add("Coins", 460, 1)

	/* Other */
	.add("Lobster", 1, 3)
	.add("Adamantite bar", 1, 2)
	.add("Defence potion(3)", 1, 1)

	/* RDT */
	.add(RareDropTable, 1, 1)
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(35, "Ensouled demon head")
	.tertiary(128, "Clue scroll (hard)");

const BlackDemonWildyCaveTable = new LootTable().every(BlackDemonTable).tertiary(1.1, WildySlayerCaveTable);

export default new SimpleMonster({
	id: 240,
	name: "Black Demon",
	table: BlackDemonTable,
	wildyCaveTable: BlackDemonWildyCaveTable,
	aliases: ["black demon"],
});
