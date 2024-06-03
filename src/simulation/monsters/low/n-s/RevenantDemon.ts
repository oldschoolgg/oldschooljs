import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import { makeRevTable } from "../../../../util";

const SecondaryTable = new LootTable()
	.add("Blighted entangle sack", [1, 10], 13200)
	.add("Blighted manta ray", [1, 2], 9870)
	.add("Blighted anglerfish", [1, 2], 9870)
	.add("Blighted ancient ice sack", [1, 10], 6580)
	.add("Blighted teleport spell sack", [1, 10], 6580)
	.add("Blighted vengeance sack", [1, 10], 6580)
	.add("Blighted karambwan", [1, 2], 6580)
	.add("Blighted super restore(4)", 1, 3290)
	.add("Revenant cave teleport", 1, 3290);

const RevenantDemonPreTable = new LootTable()
	.every("Revenant ether", [2, 20])

	/* Weapons and armour */
	.add("Bracelet of ethereum (uncharged)", 1, 8570)
	.add("Battlestaff", 4, 2860)
	.add("Rune full helm", 2, 1140)
	.add("Rune platebody", 2, 1140)
	.add("Rune platelegs", 2, 1140)
	.add("Rune kiteshield", 2, 1140)
	.add("Rune warhammer", 2, 1140)
	.add("Dragon dagger", 2, 571)
	.add("Dragon longsword", 2, 571)
	.add("Dragon platelegs", [1, 2], 286)
	.add("Dragon plateskirt", [1, 2], 286)

	/* Resources */
	.add("Coal", [30, 60], 3430)
	.add("Adamantite bar", [4, 6], 3430)
	.add("Blighted manta ray", [10, 15], 2290)
	.add("Runite ore", [2, 4], 2290)
	.add("Black dragonhide", 4, 2290)
	.add("Yew logs", [20, 40], 2290)
	.add("Blighted super restore(4)", [1, 3], 1710)
	.add("Runite bar", [2, 3], 1710)
	.add("Mahogany plank", [8, 16], 1710)
	.add("Magic logs", [8, 16], 1140)
	.add("Uncut dragonstone", [2, 5], 571)

	/* Other */
	.add("Coins", [1, 251], 43100)
	.add("Revenant cave teleport", [1, 5], 2860)
	.add("Law rune", [20, 45], 2860)
	.add("Death rune", [30, 60], 2860)
	.add("Blood rune", [50, 100], 2860)
	.add("Dragonstone bolt tips", [20, 40], 1710)
	.add("Onyx bolt tips", [3, 6], 1710);

const RevenantDemonTable = new LootTable()
	.every(RevenantDemonPreTable)
	.add(SecondaryTable, 1, 6584)
	.add(new LootTable(), 1, 3416);

export default new SimpleMonster({
	id: 7936,
	name: "Revenant demon",
	table: RevenantDemonTable,
	aliases: ["revenant demon"],
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
