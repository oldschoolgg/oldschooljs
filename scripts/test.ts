import { type Bank, LootTable } from "../src";

const TestTable = new LootTable().add("Coal", 5);
function bankToString(samples: number, bank: Bank) {
	return bank
		.items()
		.sort((a, b) => a[0].name.localeCompare(b[0].name))
		.map(([item, qty]) => {
			if (item.name !== "Coal") return "";
			const rate = (samples / qty).toFixed(1);
			return `${item.name}[${(qty / samples).toFixed(1)}]`;
		})
		.filter(i => i.length)
		.join("\n");
}

const tables = [
	new LootTable().add(new LootTable().add(new LootTable().add(new LootTable().add(TestTable)))),
	new LootTable().add(new LootTable().add(TestTable)),
	new LootTable().add(new LootTable().add("Coal", 10).add("Egg", 5)),
	new LootTable().add(new LootTable().add("Coal", 15).add("Egg", 5).add("Egg", 5)),
	new LootTable().add(new LootTable().add("Coal", 15).add("Egg", 5).add("Egg", 5), [1, 10]),
	new LootTable().add(new LootTable().add("Coal", [1, 30]).add("Egg", 5).add("Egg", 5), [1, 10]),
	new LootTable().add(new LootTable().every(TestTable)),
	new LootTable().every(new LootTable().every(TestTable)),
	new LootTable().every(new LootTable().every(new LootTable().add(TestTable))),
	new LootTable().every(new LootTable().every(new LootTable().every(TestTable))),
	new LootTable().every(new LootTable().add(new LootTable().every(TestTable))),
	new LootTable().every(new LootTable().add(new LootTable().add(TestTable).add(TestTable))),
];

for (let i = 0; i < tables.length; i++) {
	const table = tables[i];
	const loot = table.roll(100_000_000);
	console.log(i, bankToString(100_000_000, loot));
}
