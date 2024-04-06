import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import HerbDropTable from "../../../subtables/HerbDropTable";
import { GemTable } from "../../../subtables/RareDropTable";

const WildySlayerCaveTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 90)
	.add("Blighted anglerfish", [1, 2], 119)
	.add("Blighted manta ray", [1, 2], 119)
	.add("Blighted karambwan", [1, 2], 179)
	.add("Blighted teleport spell sack", [1, 10], 179)
	.add("Blighted ancient ice sack", [1, 10], 179)
	.add("Blighted vengeance spell sack", [1, 10], 179)
	.add("Blighted super restore(4)", 1, 358)
	.add("Revenant cave teleport", 1, 358)
	.add("Dareeyak teleport (tablet)", 1, 1790)
	.add("Wilderness crabs teleport", 1, 1790)
	.add("Carrallanger teleport (tablet)", 1, 1790)
	.add("Paddewwa teleport (tablet)", 1, 1790)
	.add("Annakarl teleport (tablet)", 1, 1790)
	.add("Lassar teleport (tablet)", 1, 1790)
	.add("Kharyrll teleport (tablet)", 1, 1790)
	.add("Senntisten teleport (tablet)", 1, 1790)
	.add("Ghorrock teleport (tablet)", 1, 1790)
	.add("Target teleport", 1, 1790)
	.add("Magic shortbow scroll", 1, 4476)
	.add("Ring of wealth scroll", 1, 4476)
	.add("Trouver parchment", 2, 17_903)
	.add("Looting bag note", 1, 17_903);

const GreenDragonTable = new LootTable()
	.every("Dragon bones")
	.every("Green dragonhide")

	/* Weapons and armour */
	.add("Steel platelegs", 1, 4)
	.add("Steel battleaxe", 1, 3)
	.add("Mithril axe", 1, 3)
	.add("Mithril spear", 1, 2)
	.add("Mithril kiteshield", 1, 1)
	.add("Adamant full helm", 1, 1)
	.add("Rune dagger", 1, 1)

	/* Runes*/
	.add("Water rune", 75, 8)
	.add("Nature rune", 15, 5)
	.add("Law rune", 3, 3)
	.add("Fire rune", 37, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 15)

	/* Coins */
	.add("Coins", 44, 29)
	.add("Coins", 132, 25)
	.add("Coins", 200, 10)
	.add("Coins", 11, 5)
	.add("Coins", 440, 1)

	/* Other */
	.add("Bass", 1, 3)
	.add("Adamantite ore", 1, 3)

	/* Gem drop table */
	.add(GemTable, 1, 5)

	/* Tertiary */
	.tertiary(35, "Ensouled dragon head")
	.tertiary(128, "Clue scroll (hard)");

const GreenDragonWildyCaveTable = new LootTable().every(GreenDragonTable).tertiary(1.61, WildySlayerCaveTable);

export default new SimpleMonster({
	id: 260,
	name: "Green dragon",
	table: GreenDragonTable,
	wildyCaveTable: GreenDragonWildyCaveTable,
	aliases: ["green dragon", "green drags"],
});
