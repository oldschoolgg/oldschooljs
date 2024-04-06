import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import CommonSeedDropTable from "../../../subtables/CommonSeedDropTable";
import HerbDropTable from "../../../subtables/HerbDropTable";
import { GemTable } from "../../../subtables/RareDropTable";

const WildySlayerCaveTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 84)
	.add("Blighted anglerfish", [1, 2], 112)
	.add("Blighted manta ray", [1, 2], 112)
	.add("Blighted karambwan", [1, 2], 168)
	.add("Blighted teleport spell sack", [1, 10], 168)
	.add("Blighted ancient ice sack", [1, 10], 168)
	.add("Blighted vengeance spell sack", [1, 10], 168)
	.add("Blighted super restore(4)", 1, 336)
	.add("Revenant cave teleport", 1, 336)
	.add("Dareeyak teleport (tablet)", 1, 1682)
	.add("Wilderness crabs teleport", 1, 1682)
	.add("Carrallanger teleport (tablet)", 1, 1682)
	.add("Paddewwa teleport (tablet)", 1, 1682)
	.add("Annakarl teleport (tablet)", 1, 1682)
	.add("Lassar teleport (tablet)", 1, 1682)
	.add("Kharyrll teleport (tablet)", 1, 1682)
	.add("Senntisten teleport (tablet)", 1, 1682)
	.add("Ghorrock teleport (tablet)", 1, 1682)
	.add("Target teleport", 1, 1682)
	.add("Magic shortbow scroll", 1, 4205)
	.add("Ring of wealth scroll", 1, 4205)
	.add("Trouver parchment", 2, 16_818)
	.add("Looting bag note", 1, 16_818);

const AnkouTable = new LootTable({ limit: 100 })
	.every("Bones")

	.oneIn(33, "Left skull half")

	/* Weapons and armor */
	.add("Black knife", 1, 1)
	.add("Black robe", 1, 1)

	/* Runes and ammunition */
	.add("Death rune", 10, 10)
	.add("Blood rune", 11, 6)
	.add("Law rune", 2, 6)
	.add("Adamant arrow", [5, 14], 4)
	.add("Blood rune", 5, 3)

	/* Herbs */
	.add(HerbDropTable, 1, 3)

	/* Seeds */
	.add(CommonSeedDropTable, 1, 1)

	/* Materials */
	.add("Pure essence", 15, 5)
	.add("Mithril ore", [3, 7], 2)

	/* Coins */
	.add("Coins", 8, 33)
	.add("Coins", [5, 204], 10)

	/* Other */
	.add("Bass", 1, 2)
	.add("Weapon poison", 1, 2)
	.add("Fried mushrooms", 1, 1)

	/* RDT */
	.add(GemTable, 1, 2)

	/* Tertiary */
	.tertiary(512, "Clue scroll (hard)");

const AnkouWildyCaveTable = new LootTable().every(AnkouTable).tertiary(1.51, WildySlayerCaveTable);

export default new SimpleMonster({
	id: 2514,
	name: "Ankou",
	table: AnkouTable,
	wildyCaveTable: AnkouWildyCaveTable,
	aliases: ["ankou", "ank"],
});
