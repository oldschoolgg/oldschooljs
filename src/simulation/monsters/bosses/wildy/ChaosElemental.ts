import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";
import HerbDropTable from "../../../subtables/HerbDropTable";
import RareDropTable, { GemTable } from "../../../subtables/RareDropTable";

const ChaosElementalMinorTable = new LootTable()
	.add("Anchovy pizza", 3)
	.add("Babydragon bones", 2)
	.add("Bat bones", 5)
	.add("Big bones", 3)
	.add("Bones", 4)
	.add("Dragon bones")
	.add("Super attack(4)")
	.add("Super defence(4)")
	.add("Super strength(4)")
	.add("Tuna", 5);

const ChaosElementalTable = new LootTable()
	.every(ChaosElementalMinorTable, 1)
	.tertiary(200, "Clue scroll (elite)")
	.tertiary(300, "Pet chaos elemental")
	.oneIn(256, "Dragon pickaxe")

	/* Weapons and armour */
	.add("Dragon dagger", 1, 11)
	.add("Dragon 2h sword", 1, 1)

	/* Runes and ammunition */
	.add("Air rune", 500, 10)
	.add("Blood rune", 75, 10)
	.add("Chaos rune", 250, 10)
	.add("Death rune", 125, 10)
	.add("Mithril dart", 300, 10)
	.add("Rune arrow", 150, 10)

	/* Other */
	.add("Strange fruit", 10, 13)
	.add("Antidote++(4)", 1, 10)
	.add("Weapon poison(++)", 1, 10)
	.add("Coins", 7500, 8)

	/* Subtables */
	.add(HerbDropTable, 1, 4)
	.add(RareDropTable, 1, 8)
	.add(GemTable, 1, 3);

export default new SimpleMonster({
	id: 2054,
	name: "Chaos Elemental",
	table: ChaosElementalTable,
	aliases: ["chaos ele", "chaos elemental", "chaos el"],
});
