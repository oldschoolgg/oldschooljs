import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import HerbDropTable from "../../../subtables/HerbDropTable";
import UncommonSeedDropTable from "../../../subtables/UncommonSeedDropTable";

const GiantSeaSnakeTable = new LootTable()
	.every("Big bones")

	/* Runes and ammunition */
	.add("Water rune", 15, 2)
	.add("Mist rune", 1, 2)
	.add("Broad arrows", 4, 2)

	/* Herbs */
	.add(HerbDropTable, 1, 5)

	/* Seeds */
	.add(UncommonSeedDropTable, 1, 14)

	/* Coins */
	.add("Coins", 44, 41)
	.add("Coins", 32, 11)
	.add("Coins", 24, 9)
	.add("Coins", 23, 7)

	/* Other */
	.add("Adamant dart tip", 2, 10)
	.add("Fishing bait", 50, 4)
	.add("Pearl bolt tips", 3, 4)
	.add("Raw bass", 2, 4)
	.add("Water orb", 1, 3)
	.add("Raw lobster", 1, 2)
	.add("Seaweed", 5, 2)
	.add("Edible seaweed", 5, 2)
	.add("Casket", 1, 2)
	.add("Oyster pearl", 2, 1)
	.add("Oyster pearls", 1, 1)

	/* Tertiary */
	.tertiary(128, "Clue scroll (medium)")
	.tertiary(400, "Long bone")
	.tertiary(5013, "Curved bone");

export default new SimpleMonster({
	id: 1101,
	name: "Giant Sea Snake",
	table: GiantSeaSnakeTable,
	aliases: ["giant sea snake"],
});
