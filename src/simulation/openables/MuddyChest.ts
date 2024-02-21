import LootTable from "../../structures/LootTable";
import SimpleOpenable from "../../structures/SimpleOpenable";

const MuddyChestTable = new LootTable()
	.every("Uncut ruby")
	.every("Mithril bar")
	.every("Mithril dagger")
	.every("Anchovy pizza")
	.every("Law rune", 2)
	.every("Death rune", 2)
	.every("Chaos rune", 10);

export default new SimpleOpenable({
	id: 991,
	name: "Muddy chest",
	aliases: ["muddy chest", "muddy"],
	table: MuddyChestTable,
});
