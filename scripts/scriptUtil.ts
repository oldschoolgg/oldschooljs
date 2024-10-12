import type { Bank } from "../src";

export function round(int: number) {
	return Math.round(int / 2) * 2;
}

export function bankToString(samples: number, bank: Bank) {
	return bank
		.items()
		.sort((a, b) => a[0].name.localeCompare(b[0].name))
		.map(([item, qty]) => {
			const rate = round(samples / qty);
			return `	${item.name}[1 in ${rate}]`;
		})
		.join("\n");
}
