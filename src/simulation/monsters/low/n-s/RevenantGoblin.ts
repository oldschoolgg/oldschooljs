import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import { makeRevTable } from "../../../../util";

const SecondaryTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 8510)
	.add("Blighted manta ray", [1, 2], 6380)
	.add("Blighted anglerfish", [1, 2], 6380)
	.add("Blighted ancient ice sack", [1, 10], 4260)
	.add("Blighted teleport spell sack", [1, 10], 4260)
	.add("Blighted vengeance sack", [1, 10], 4260)
	.add("Blighted karambwan", [1, 2], 4260)
	.add("Blighted super restore(4)", 1, 2130)
	.add("Revenant cave teleport", 1, 2130);

export const RevenantGoblinPreTable = new LootTable()
	.every("Revenant ether", [2, 8])

	/* Weapons and armour */
	.add("Bracelet of ethereum (uncharged)", 1, 868)
	.add("Battlestaff", 4, 289)
	.add("Rune full helm", 2, 116)
	.add("Rune platebody", 2, 116)
	.add("Rune platelegs", 2, 116)
	.add("Rune kiteshield", 2, 116)
	.add("Rune warhammer", 2, 116)
	.add("Dragon dagger", 2, 58)
	.add("Dragon longsword", 2, 58)
	.add("Dragon platelegs", [1, 2], 30)
	.add("Dragon plateskirt", [1, 2], 30)

	/* Resources */
	.add("Coal", [30, 60], 347)
	.add("Adamantite bar", [4, 6], 347)
	.add("Blighted manta ray", [10, 15], 232)
	.add("Runite ore", [2, 4], 232)
	.add("Black dragonhide", 4, 232)
	.add("Yew logs", [20, 40], 232)
	.add("Blighted super restore(4)", [1, 3], 174)
	.add("Runite bar", [2, 3], 174)
	.add("Mahogany plank", [8, 16], 174)
	.add("Magic logs", [8, 16], 116)
	.add("Uncut dragonstone", [2, 5], 58)

	/* Other */
	.add("Coins", [1, 76], 94300)
	.add("Revenant cave teleport", [1, 5], 289)
	.add("Law rune", [20, 45], 289)
	.add("Death rune", [30, 60], 289)
	.add("Blood rune", [50, 100], 289)
	.add("Dragonstone bolt tips", [20, 40], 174)
	.add("Onyx bolt tips", [3, 6], 174);

const RevenantGoblinTable = new LootTable()
	.every(RevenantGoblinPreTable)
	.add(SecondaryTable, 1, 4257)
	.add(new LootTable(), 1, 5743);

export default new SimpleMonster({
	id: 7931,
	name: "Revenant goblin",
	table: RevenantGoblinTable,
	aliases: ["revenant goblin"],
	customKillLogic: makeRevTable({
		seeds: [4032, 4032],
		uniqueTable: [10_751, 2150],
		ancientEmblem: [16_126, 16_126],
		ancientTotem: [4032, 4032],
		ancientCrystal: [5375, 5375],
		ancientStatuette: [8063, 8063],
		topThree: [16_126, 16_126],
	}),
});
