import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import { makeRevTable } from "../../../../util";

const SecondaryTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 12500)
	.add("Blighted manta ray", [1, 2], 9370)
	.add("Blighted anglerfish", [1, 2], 9370)
	.add("Blighted ancient ice sack", [1, 10], 6250)
	.add("Blighted teleport spell sack", [1, 10], 6250)
	.add("Blighted vengeance sack", [1, 10], 6250)
	.add("Blighted karambwan", [1, 2], 6250)
	.add("Blighted super restore(4)", 1, 3130)
	.add("Revenant cave teleport", 1, 3130);

const RevenantHellhoundPreTable = new LootTable()
	.every("Revenant ether", [2, 20])

	/* Weapons and armour */
	.add("Bracelet of ethereum (uncharged)", 1, 7820)
	.add("Battlestaff", 4, 2610)
	.add("Rune full helm", 2, 1040)
	.add("Rune platebody", 2, 1040)
	.add("Rune platelegs", 2, 1040)
	.add("Rune kiteshield", 2, 1040)
	.add("Rune warhammer", 2, 1040)
	.add("Dragon dagger", 2, 522)
	.add("Dragon longsword", 2, 522)
	.add("Dragon platelegs", [1, 2], 261)
	.add("Dragon plateskirt", [1, 2], 261)

	/* Resources */
	.add("Coal", [30, 60], 3130)
	.add("Adamantite bar", [4, 6], 3130)
	.add("Blighted manta ray", [10, 15], 2090)
	.add("Runite ore", [2, 4], 2090)
	.add("Black dragonhide", 4, 2090)
	.add("Yew logs", [20, 40], 2090)
	.add("Blighted super restore(4)", [1, 3], 1560)
	.add("Runite bar", [2, 3], 1560)
	.add("Mahogany plank", [8, 16], 1560)
	.add("Magic logs", [8, 16], 1040)
	.add("Uncut dragonstone", [2, 5], 522)

	/* Other */
	.add("Coins", [1, 226], 47800)
	.add("Revenant cave teleport", [1, 5], 2610)
	.add("Law rune", [20, 45], 2610)
	.add("Death rune", [30, 60], 2610)
	.add("Blood rune", [50, 100], 2610)
	.add("Dragonstone bolt tips", [20, 40], 1560)
	.add("Onyx bolt tips", [3, 6], 1560);

const RevenantHellhoundTable = new LootTable()
	.every(RevenantHellhoundPreTable)
	.add(SecondaryTable, 1, 625)
	.add(new LootTable(), 1, 375);

export default new SimpleMonster({
	id: 7935,
	name: "Revenant hellhound",
	table: RevenantHellhoundTable,
	aliases: ["revenant hellhound"],
	customKillLogic: makeRevTable({
		seeds: [1342, 1342],
		uniqueTable: [3579, 716],
		ancientEmblem: [5368, 5368],
		ancientTotem: [1342, 1342],
		ancientCrystal: [1789, 1789],
		ancientStatuette: [2684, 2684],
		topThree: [5368, 5368],
	}),
});
