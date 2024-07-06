import { type Bank, Items } from "../src";

export function withinThreshold(source: number, target: number, epsilon = 5): boolean {
	if (source === target) return true;
	return Math.abs(source - target) < (epsilon / 100) * target;
}

export function checkThreshold(expectedRates: Record<string, number>, _result: Bank, numberDone: number): void {
	const result = _result.bank;
	for (const [name, qty] of Object.entries(expectedRates)) {
		const item = Items.get(name);
		if (!item) throw new Error(`Missing item: ${name}`);
		if (!result[item.id]) {
			throw new Error(`Was no ${item.name}[${item.id}] in result, should have been.`);
		}
		expectedRates[item.id.toString()] = qty;
	}

	for (const [itemID, qty] of Object.entries(result)) {
		const item = Items.get(Number.parseInt(itemID));
		if (!item) throw new Error(`Missing item with ID: ${itemID}`);

		const { id } = item;
		const expectedRate = expectedRates[id];
		if (!expectedRate) continue;

		const effectiveRate = numberDone / qty;

		if (!withinThreshold(effectiveRate, expectedRate, 10)) {
			throw new Error(`${item.name} wasn't within threshold. 1 in ${effectiveRate} instead of ${expectedRate}`);
		}
	}
}
