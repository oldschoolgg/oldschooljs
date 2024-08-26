import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import { makeRevTable } from "../../../../util";

const SecondayTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 17400)
	.add("Blighted manta ray", [1, 2], 13000)
	.add("Blighted anglerfish", [1, 2], 13000)
	.add("Blighted ancient ice sack", [1, 10], 8700)
	.add("Blighted teleport spell sack", [1, 10], 8700)
	.add("Blighted vengeance sack", [1, 10], 8700)
	.add("Blighted karambwan", [1, 2], 8700)
	.add("Blighted super restore(4)", 1, 4350)
	.add("Revenant cave teleport", 1, 4350);

const RevenantDragonPreTable = new LootTable()
	.every("Revenant ether", [2, 24])

	/* Weapons and armour */
	.add("Bracelet of ethereum (uncharged)", 1, 15100)
	.add("Battlestaff", 4, 5030)
	.add("Rune full helm", 2, 2010)
	.add("Rune platebody", 2, 2010)
	.add("Rune platelegs", 2, 2010)
	.add("Rune kiteshield", 2, 2010)
	.add("Rune warhammer", 2, 2010)
	.add("Dragon dagger", 2, 1010)
	.add("Dragon longsword", 2, 1010)
	.add("Dragon platelegs", [1, 2], 503)
	.add("Dragon plateskirt", [1, 2], 503)

	/* Resources */
	.add("Coal", [30, 60], 6030)
	.add("Adamantite bar", [4, 6], 6030)
	.add("Blighted manta ray", [10, 15], 4020)
	.add("Runite ore", [2, 4], 4020)
	.add("Black dragonhide", 4, 4020)
	.add("Yew logs", [20, 40], 4020)
	.add("Blighted super restore(4)", [1, 3], 3010)
	.add("Runite bar", [2, 3], 3010)
	.add("Mahogany plank", [8, 16], 3010)
	.add("Magic logs", [8, 16], 2010)
	.add("Uncut dragonstone", [2, 5], 1010)

	/* Other */
	.add("Revenant cave teleport", [1, 5], 5030)
	.add("Law rune", [20, 45], 5030)
	.add("Death rune", [30, 60], 5030)
	.add("Blood rune", [50, 100], 5030)
	.add("Dragonstone bolt tips", [20, 40], 3010)
	.add("Onyx bolt tips", [3, 6], 3010);

const RevenantDragonTable = new LootTable()
	.every(RevenantDragonPreTable)
	.add(SecondayTable, 1, 869)
	.add(new LootTable(), 1, 131);

export default new SimpleMonster({
	id: 7940,
	name: "Revenant dragon",
	table: RevenantDragonTable,
	aliases: ["revenant dragon"],
	customKillLogic: makeRevTable({
		seeds: [1100, 1100],
		uniqueTable: [2933, 587],
		ancientEmblem: [4400, 4400],
		ancientTotem: [1100, 1100],
		ancientCrystal: [1467, 1467],
		ancientStatuette: [2000, 2000],
		topThree: [4400, 4400],
	}),
});
