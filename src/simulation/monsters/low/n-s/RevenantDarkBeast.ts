import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import { makeRevTable } from "../../../../util";

const SecondaryTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 15400)
	.add("Blighted manta ray", [1, 2], 11500)
	.add("Blighted anglerfish", [1, 2], 11500)
	.add("Blighted ancient ice sack", [1, 10], 7690)
	.add("Blighted teleport spell sack", [1, 10], 7690)
	.add("Blighted vengeance sack", [1, 10], 7690)
	.add("Blighted karambwan", [1, 2], 7690)
	.add("Blighted super restore(4)", 1, 3850)
	.add("Revenant cave teleport", 1, 3850);

const RevenantDarkBeastPreTable = new LootTable()
	.every("Revenant ether", [2, 22])

	/* Weapons and armour */
	.add("Bracelet of ethereum (uncharged)", 1, 12100)
	.add("Battlestaff", 4, 4040)
	.add("Rune full helm", 2, 1620)
	.add("Rune platebody", 2, 1620)
	.add("Rune platelegs", 2, 1620)
	.add("Rune kiteshield", 2, 1620)
	.add("Rune warhammer", 2, 1620)
	.add("Dragon dagger", 2, 808)
	.add("Dragon longsword", 2, 808)
	.add("Dragon platelegs", [1, 2], 404)
	.add("Dragon plateskirt", [1, 2], 404)

	/* Resources */
	.add("Coal", [30, 60], 4850)
	.add("Adamantite bar", [4, 6], 4850)
	.add("Blighted manta ray", [10, 15], 3230)
	.add("Runite ore", [2, 4], 3230)
	.add("Black dragonhide", 4, 3230)
	.add("Yew logs", [20, 40], 3230)
	.add("Blighted super restore(4)", [1, 3], 2420)
	.add("Runite bar", [2, 3], 2420)
	.add("Mahogany plank", [8, 16], 2420)
	.add("Magic logs", [8, 16], 1620)
	.add("Uncut dragonstone", [2, 5], 808)

	/* Other */
	.add("Coins", [1, 251], 19500)
	.add("Revenant cave teleport", [1, 5], 4040)
	.add("Law rune", [20, 45], 4040)
	.add("Death rune", [30, 60], 4040)
	.add("Blood rune", [50, 100], 4040)
	.add("Dragonstone bolt tips", [20, 40], 2420)
	.add("Onyx bolt tips", [3, 6], 2420);

const RevenantDarkBeastTable = new LootTable()
	.every(RevenantDarkBeastPreTable)
	.add(SecondaryTable, 1, 7686)
	.add(new LootTable(), 1, 2314);

export default new SimpleMonster({
	id: 7938,
	name: "Revenant dark beast",
	table: RevenantDarkBeastTable,
	aliases: ["revenant dark beast"],
	customKillLogic: makeRevTable({
		seeds: [1210, 1210],
		uniqueTable: [3227, 645],
		ancientEmblem: [4840, 4840],
		ancientTotem: [1210, 1210],
		ancientCrystal: [1613, 1613],
		ancientStatuette: [2420, 2420],
		topThree: [4840, 4840],
	}),
});
