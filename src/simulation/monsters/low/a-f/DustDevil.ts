import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import HerbDropTable from "../../../subtables/HerbDropTable";
import { GemTable } from "../../../subtables/RareDropTable";

const WildySlayerCaveTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 87)
	.add("Blighted anglerfish", [1, 2], 116)
	.add("Blighted manta ray", [1, 2], 116)
	.add("Blighted karambwan", [1, 2], 173)
	.add("Blighted teleport spell sack", [1, 10], 173)
	.add("Blighted ancient ice sack", [1, 10], 173)
	.add("Blighted vengeance sack", [1, 10], 173)
	.add("Blighted super restore(4)", 1, 347)
	.add("Revenant cave teleport", 1, 347)
	.add("Dareeyak teleport (tablet)", 1, 1734)
	.add("Wilderness crabs teleport", 1, 1734)
	.add("Carrallanger teleport (tablet)", 1, 1734)
	.add("Paddewwa teleport (tablet)", 1, 1734)
	.add("Annakarl teleport (tablet)", 1, 1734)
	.add("Lassar teleport (tablet)", 1, 1734)
	.add("Kharyrll teleport (tablet)", 1, 1734)
	.add("Senntisten teleport (tablet)", 1, 1734)
	.add("Ghorrock teleport (tablet)", 1, 1734)
	.add("Target teleport", 1, 1734)
	.add("Magic shortbow scroll", 1, 4336)
	.add("Ring of wealth scroll", 1, 4336)
	.add("Trouver parchment", 2, 17_344)
	.add("Looting bag note", 1, 17_344);

export const DustDevilPreTable = new LootTable()
	/* Weapons and armour */
	.add("Adamant axe", 1, 3)
	.add("Rune dagger", 1, 2)
	.add("Red d'hide vambraces", 1, 2)
	.add("Air battlestaff", 1, 2)
	.add("Earth battlestaff", 1, 2)
	.add("Black d'hide vambraces", 1, 1)
	.add("Mystic air staff", 1, 1)
	.add("Mystic earth staff", 1, 1)
	.add("Dragon dagger", 1, 1)
	.oneIn(4000, "Dust battlestaff")
	.oneIn(32_768, "Dragon chainbody")

	/* Runes and ammunition */
	.add("Dust rune", 200, 10)
	.add("Earth rune", 300, 10)
	.add("Fire rune", 300, 10)
	.add("Chaos rune", 80, 7)
	.add("Rune arrow", 12, 5)
	.add("Soul rune", 20, 4)
	.add("Fire rune", 50, 1)
	.add("Soul rune", 50, 1)

	/* Herbs */
	.add(HerbDropTable, 1, 8)

	/* Other */
	.add("Coins", [2000, 4000], 32)
	.add("Mithril bar", 10, 3)
	.add("Ugthanki kebab", 4, 2)
	.add("Adamantite bar", 4, 1)

	/* RDT */
	.add(GemTable, 1, 8);

const DustDevilTable = new LootTable().every("Bones").every(DustDevilPreTable);

const DustDevilWildyCaveTable = new LootTable().every(DustDevilTable).tertiary(1.56, WildySlayerCaveTable);

export default new SimpleMonster({
	id: 423,
	name: "Dust Devil",
	table: DustDevilTable,
	wildyCaveTable: DustDevilWildyCaveTable,
	aliases: ["dust devil", "dusty", "dusties"],
});
