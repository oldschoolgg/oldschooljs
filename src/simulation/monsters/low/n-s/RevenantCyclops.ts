import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import { makeRevTable } from "../../../../util";

const SecondaryTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 11900)
	.add("Blighted manta ray", [1, 2], 8930)
	.add("Blighted anglerfish", [1, 2], 8930)
	.add("Blighted ancient ice sack", [1, 10], 5950)
	.add("Blighted teleport spell sack", [1, 10], 5950)
	.add("Blighted vengeance sack", [1, 10], 5950)
	.add("Blighted karambwan", [1, 2], 5950)
	.add("Blighted super restore(4)", 1, 2980)
	.add("Revenant cave teleport", 1, 2980);

const RevenantCyclopsPreTable = new LootTable()
	.every("Revenant ether", [2, 20])

	/* Weapons and armour */
	.add("Bracelet of ethereum (uncharged)", 1, 7080)
	.add("Battlestaff", 4, 2360)
	.add("Rune full helm", 2, 944)
	.add("Rune platebody", 2, 944)
	.add("Rune platelegs", 2, 944)
	.add("Rune kiteshield", 2, 944)
	.add("Rune warhammer", 2, 944)
	.add("Dragon dagger", 2, 472)
	.add("Dragon longsword", 2, 472)
	.add("Dragon platelegs", [1, 2], 236)
	.add("Dragon plateskirt", [1, 2], 236)

	/* Resources */
	.add("Coal", [30, 60], 2830)
	.add("Adamantite bar", [4, 6], 2830)
	.add("Blighted manta ray", [10, 15], 1890)
	.add("Runite ore", [2, 4], 1890)
	.add("Black dragonhide", 4, 1890)
	.add("Yew logs", [20, 40], 1890)
	.add("Blighted super restore(4)", [1, 3], 1420)
	.add("Runite bar", [2, 3], 1420)
	.add("Mahogany plank", [8, 16], 1420)
	.add("Magic logs", [8, 16], 944)
	.add("Uncut dragonstone", [2, 5], 472)

	/* Other */
	.add("Coins", [1, 226], 52900)
	.add("Revenant cave teleport", [1, 5], 2360)
	.add("Law rune", [20, 45], 2360)
	.add("Death rune", [30, 60], 2360)
	.add("Blood rune", [50, 100], 2360)
	.add("Dragonstone bolt tips", [20, 40], 1420)
	.add("Onyx bolt tips", [3, 6], 1420);

const RevenantCyclopsTable = new LootTable()
	.every(RevenantCyclopsPreTable)
	.add(SecondaryTable, 1, 5952)
	.add(new LootTable(), 1, 4048);

export default new SimpleMonster({
	id: 7934,
	name: "Revenant cyclops",
	table: RevenantCyclopsTable,
	aliases: ["revenant cyclops"],
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
