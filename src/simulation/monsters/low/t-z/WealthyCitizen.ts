import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";

export default new SimpleMonster({
	id: 13302,
	name: "Wealthy Citizen",
	pickpocketTable: new LootTable({ limit: 1445 })
		.add("Coins", 85, 1343)
		.add("House keys", 1, 85)
		.add("Clue Scroll (Easy)", 1, 17),
	aliases: ["wealthy citizen", "wealthy", "citizen", "varlamore citizen"],
});
