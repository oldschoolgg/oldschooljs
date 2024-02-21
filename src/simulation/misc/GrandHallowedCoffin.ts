import LootTable from "../../structures/LootTable";

export const GrandHallowedCoffin = new LootTable()
	.every("Hallowed mark", [8, 10])
	.tertiary(200, "Ring of endurance (uncharged)")
	.tertiary(30, "Clue scroll (elite)")
	.add("Rune 2h sword")
	.add("Rune platebody")
	.add("Law rune", [150, 250])
	.add("Blood rune", [150, 250])
	.add("Soul rune", [150, 250])
	.add("Runite bolts", [100, 300])
	.add("Monkfish", [2, 6])
	.add("Sanfew serum(4)", [1, 2])
	.add("Ranarr seed", [1, 2])
	.add("Coins", [17_500, 25_000]);
