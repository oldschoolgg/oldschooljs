import { expect, test } from 'vitest';

import { Items } from '../src';

test('Items Sanity Test', async () => {
	const item27624 = Items.get(27_624)!;
	expect(item27624.id).toEqual(27_624);
	expect(item27624.name).toEqual('Ancient sceptre');
	expect(item27624.members).toEqual(true);
	expect(item27624.tradeable).toBeUndefined();
	expect(item27624.equipable).toEqual(true);
	expect(item27624.stackable).toBeUndefined();
	expect(item27624.noteable).toBeUndefined();
	expect(item27624.cost).toEqual(211_000);
	// expect(item27624.lowalch).toBeUndefined();
	// expect(item27624.highalch).toBeUndefined();
	expect(item27624.weight).toEqual(2.267);
	expect(item27624.buy_limit).toBeUndefined();
	expect(item27624.release_date).toEqual('2023-01-11');
	expect(item27624.examine).toEqual('A very old and powerful stick.');

	const item27626 = Items.get(27_626)!;
	expect(item27626.id).toEqual(27_626);
	expect(item27626.name).toEqual('Ancient sceptre (l)');
	expect(item27626.members).toEqual(true);
	expect(item27626.tradeable).toBeUndefined();
	expect(item27626.equipable).toEqual(true);
	expect(item27626.stackable).toBeUndefined();
	expect(item27626.noteable).toBeUndefined();
	expect(item27626.cost).toEqual(211_000);
	// expect(item27626.lowalch).toBeUndefined();
	// expect(item27626.highalch).toBeUndefined();
	expect(item27626.weight).toEqual(2.267);
	expect(item27626.buy_limit).toBeUndefined();
	expect(item27626.release_date).toEqual('2023-01-11');
	expect(item27626.examine).toEqual('A very old and powerful stick.');

	const item27612 = Items.get(27_612)!;
	expect(item27612.id).toEqual(27_612);
	expect(item27612.name).toEqual('Venator bow (uncharged)');
	expect(item27612.members).toEqual(true);
	expect(item27612.tradeable).toEqual(true);
	expect(item27612.equipable).toEqual(true);
	expect(item27612.stackable).toBeUndefined();
	expect(item27612.cost).toEqual(750_000);
	expect(item27612.lowalch).toEqual(300_000);
	expect(item27612.highalch).toEqual(450_000);
	expect(item27612.buy_limit).toBeUndefined();

	const item27610 = Items.get(27_610)!;
	expect(item27610.id).toEqual(27_610);
	expect(item27610.name).toEqual('Venator bow');
	expect(item27610.members).toEqual(true);
	expect(item27610.tradeable).toBeUndefined();
	expect(item27610.equipable).toEqual(true);
	expect(item27610.stackable).toBeUndefined();
	expect(item27610.noteable).toBeUndefined();
	expect(item27610.cost).toEqual(750_000);
	expect(item27610.lowalch).toEqual(300_000);
	expect(item27610.highalch).toEqual(450_000);
	expect(item27610.buy_limit).toBeUndefined();
}, 30_000);
