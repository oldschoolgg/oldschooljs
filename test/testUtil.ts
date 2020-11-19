import { Items } from '../dist';
import { ItemBank } from '../dist/meta/types';

export function withinThreshold(source: number, target: number, epsilon = 5): boolean {
	if (source === target) return true;
	return Math.abs(source - target) < (epsilon / 100) * target;
}

export function checkThreshold(
	done: jest.DoneCallback,
	expectedRates: Record<string, number>,
	result: ItemBank,
	numberDone: number
): void {
	for (const [name, qty] of Object.entries(expectedRates)) {
		const item = Items.get(name);
		if (!item) return done.fail(`Missing item: ${name}`);
		if (!result[item.id]) {
			return done.fail(`Was no ${item.name}[${item.id}] in result, should have been.`);
		}
		expectedRates[item.id.toString()] = qty;
	}

	for (const [itemID, qty] of Object.entries(result)) {
		const item = Items.get(parseInt(itemID));
		if (!item) return done.fail(`Missing item with ID: ${itemID}`);

		const id = item.id;
		const expectedRate = expectedRates[id];
		if (!expectedRate) continue;

		const effectiveRate = numberDone / qty;

		if (!withinThreshold(effectiveRate, expectedRate, 10)) {
			return done.fail(
				`${item.name} wasn't within threshold. 1 in ${effectiveRate} instead of ${expectedRate}`
			);
		}
	}
	return done();
}
