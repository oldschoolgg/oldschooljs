import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";

const freshCrabTable = new LootTable().add("Fresh crab claw", 1, 1).add("Fresh crab shell", 1, 1);

export const CrabTable = new LootTable()
	.every("Crab meat")

	.add(new LootTable(), 5, 1) // Nothing drop
	.add(freshCrabTable, 4, 1)
	.add("Oyster", 1, 1);

export default new SimpleMonster({
	id: 4819,
	name: "Crab",
	table: CrabTable,
	aliases: ["crab"],
});
