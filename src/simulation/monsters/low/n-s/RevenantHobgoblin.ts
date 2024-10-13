import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import { makeRevTable } from "../../../../util";

const SecondaryTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 1050)
	.add("Blighted manta ray", [1, 2], 789)
	.add("Blighted anglerfish", [1, 2], 789)
	.add("Blighted ancient ice sack", [1, 10], 526)
	.add("Blighted teleport spell sack", [1, 10], 526)
	.add("Blighted vengeance sack", [1, 10], 526)
	.add("Blighted karambwan", [1, 2], 526)
	.add("Blighted super restore(4)", 1, 263)
	.add("Revenant cave teleport", 1, 263);

const RevenantHobgoblinPreTable = new LootTable()
	.every("Revenant ether", [2, 16])

	/* Weapons and armour */
	.add("Bracelet of ethereum (uncharged)", 1, 4150)
	.add("Battlestaff", 4, 1380)
	.add("Rune full helm", 2, 553)
	.add("Rune platebody", 2, 553)
	.add("Rune platelegs", 2, 553)
	.add("Rune kiteshield", 2, 553)
	.add("Rune warhammer", 2, 553)
	.add("Dragon dagger", 2, 277)
	.add("Dragon longsword", 2, 277)
	.add("Dragon platelegs", [1, 2], 138)
	.add("Dragon plateskirt", [1, 2], 138)

	/* Resources */
	.add("Coal", [30, 60], 1660)
	.add("Adamantite bar", [4, 6], 1660)
	.add("Blighted manta ray", [10, 15], 1110)
	.add("Runite ore", [2, 4], 1110)
	.add("Black dragonhide", 4, 1110)
	.add("Yew logs", [20, 40], 1110)
	.add("Blighted super restore(4)", [1, 3], 830)
	.add("Runite bar", [2, 3], 830)
	.add("Mahogany plank", [8, 16], 830)
	.add("Magic logs", [8, 16], 553)
	.add("Uncut dragonstone", [2, 5], 277)

	/* Other */
	.add("Coins", [1, 176], 72500)
	.add("Revenant cave teleport", [1, 5], 1380)
	.add("Law rune", [20, 45], 1380)
	.add("Death rune", [30, 60], 1380)
	.add("Blood rune", [50, 100], 1380)
	.add("Dragonstone bolt tips", [20, 40], 830)
	.add("Onyx bolt tips", [3, 6], 830);

const RevenantHobgoblinTable = new LootTable()
	.every(RevenantHobgoblinPreTable)
	.add(SecondaryTable, 1, 5258)
	.add(new LootTable(), 1, 4742);

export default new SimpleMonster({
	id: 7933,
	name: "Revenant hobgoblin",
	table: RevenantHobgoblinTable,
	aliases: ["revenant hobgoblin"],
	customKillLogic: makeRevTable({
		seeds: [1727, 1727],
		uniqueTable: [4605, 921],
		ancientEmblem: [6908, 6908],
		ancientTotem: [1727, 1727],
		ancientCrystal: [2302, 2302],
		ancientStatuette: [3454, 3454],
		topThree: [6908, 6908],
	}),
});
