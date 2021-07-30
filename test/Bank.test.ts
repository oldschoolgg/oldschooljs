import Bank from '../dist/structures/Bank';
import Items from '../dist/structures/Items';
import {
	addArrayToBank,
	addBanks,
	addItemToBank,
	bankFromLootTableOutput,
	bankHasAllItemsFromBank,
	bankHasItem,
	multiplyBank,
	numItemsBankHasInBank,
	removeBankFromBank,
	removeItemFromBank,
	resolveNameBank
} from '../dist/util';

describe('Bank', () => {
	test('convert string bank to number bank', () => {
		expect.assertions(1);
		const strBank = {
			Toolkit: 2,
			'Ammo Mould': 4,
			Candle: 1
		};
		const numBank = {
			1: 2,
			4: 4,
			36: 1
		};
		expect(resolveNameBank(strBank)).toEqual(numBank);
	});

	test('convert loot item array to number bank', () => {
		expect.assertions(1);
		const lootItems = [
			{
				item: 6,
				quantity: 2
			},
			{
				item: 67,
				quantity: 2
			},
			{
				item: 6,
				quantity: 8
			},
			{
				item: 32,
				quantity: 1
			}
		];
		const expected = {
			6: 10,
			32: 1,
			67: 2
		};
		expect(bankFromLootTableOutput(lootItems)).toEqual(expected);
	});

	test('join a number of banks', () => {
		expect.assertions(1);
		const banks = [
			{
				45: 9,
				14: 4,
				36: 1
			},
			{
				1: 2,
				4: 4,
				36: 5
			},
			{
				1: 3,
				8: 4,
				87: 1
			}
		];
		const expected = {
			1: 5,
			4: 4,
			8: 4,
			14: 4,
			36: 6,
			45: 9,
			87: 1
		};

		expect(addBanks(banks)).toEqual(expected);
	});

	test('bank contains item', () => {
		expect.assertions(4);
		const bank = { 1: 2, 3: 4 };

		expect(bankHasItem(bank, 1)).toBeTruthy();
		expect(bankHasItem(bank, 2)).toBeFalsy();
		expect(bankHasItem(bank, 3, 3)).toBeTruthy();
		expect(bankHasItem(bank, 1, 4)).toBeFalsy();
	});
	test('bank has all items', () => {
		expect.assertions(2);
		const bankToHave = resolveNameBank({
			'Fire rune': 1000,
			'Air rune': 1,
			'Chaos rune': 101010
		});

		const bankThatShouldntHave = resolveNameBank({
			'Fire rune': 1000,
			'Air rune': 1,
			'Chaos rune': 1
		});

		const bankThatShouldHave = resolveNameBank({
			'Fire rune': 104200,
			'Air rune': 43432,
			'Chaos rune': 121010,
			'Death rune': 121010
		});

		expect(bankHasAllItemsFromBank(bankThatShouldHave, bankToHave)).toBeTruthy();
		expect(bankHasAllItemsFromBank(bankThatShouldntHave, bankToHave)).toBeFalsy();
	});

	test('remove item from bank', () => {
		expect.assertions(3);
		const bank = {
			45: 9,
			87: 1
		};

		expect(removeItemFromBank(bank, 87)).toEqual({
			45: 9
		});

		expect(removeItemFromBank(bank, 98, 1)).toEqual({
			45: 9,
			87: 1
		});

		expect(removeItemFromBank(bank, 45, 2)).toEqual({
			45: 7,
			87: 1
		});
	});

	test('remove bank from bank', () => {
		expect.assertions(1);
		const sourceBank = resolveNameBank({
			'Fire rune': 100,
			'Air rune': 50
		});

		const bankToRemove = resolveNameBank({
			'Fire rune': 50,
			'Air rune': 50
		});

		const expectedBank = resolveNameBank({
			'Fire rune': 50
		});

		expect(removeBankFromBank(sourceBank, bankToRemove)).toEqual(expectedBank);
	});

	test('add item to bank', () => {
		expect.assertions(2);
		const bank = {
			45: 9,
			87: 1
		};

		const expected = {
			45: 9,
			69: 420,
			87: 1
		};

		const expectedInc = {
			45: 9,
			87: 2
		};

		expect(addItemToBank(bank, 69, 420)).toEqual(expected);
		expect(addItemToBank(bank, 87)).toEqual(expectedInc);
	});

	test('add bank to bank', () => {
		expect.assertions(1);

		const bank = { 1: 2 };

		const bank2 = { 3: 4 };

		const expected = { 1: 2, 3: 4 };

		expect(addBanks([bank, bank2])).toEqual(expected);
	});

	test('add array of items to bank', () => {
		expect.assertions(1);

		const bank = { 1: 2 };

		const items = [3, 4, 5];

		const expected = { 1: 2, 3: 1, 4: 1, 5: 1 };

		expect(addArrayToBank(bank, items)).toEqual(expected);
	});

	test('multiply bank items', () => {
		expect.assertions(1);

		const bank = { 1: 2, 3: 4 };

		const expected = { 1: 4, 3: 8 };

		expect(multiplyBank(bank, 2)).toEqual(expected);
	});

	test('numItemsBankHasInBank', () => {
		expect.assertions(2);
		const sourceBank1 = { 1: 2, 3: 4 };
		const bankToHave1 = { 1: 4, 3: 8 };

		expect(numItemsBankHasInBank(sourceBank1, bankToHave1)).toEqual(2);

		const sourceBank2 = { 1: 0, 3: 4 };
		const bankToHave2 = { 1: 4, 3: 8 };

		expect(numItemsBankHasInBank(sourceBank2, bankToHave2)).toEqual(1);
	});

	test('mutate filter', () => {
		const bank = new Bank({
			Toolkit: 2,
			'Ammo Mould': 4,
			Candle: 1
		});
		expect(bank.length).toEqual(3);
		const empty = bank.filter(() => false);
		expect(bank.length).toEqual(3);
		expect(empty.length).toEqual(0);
		bank.filter((item) => item.name === 'Candle', true);
		expect(bank.length).toEqual(1);
	});

	test('value', () => {
		const bank = new Bank({
			Toolkit: 2
		});
		expect(bank.value()).toEqual(0);
		const runePlatebody = Items.get('Rune platebody');
		const bank2 = new Bank({
			'Rune platebody': 10
		});
		expect(runePlatebody.price).toBeGreaterThan(25_000);
		expect(bank2.value()).toEqual(runePlatebody.price * 10);
		const bank3 = new Bank({
			'Rune platebody': 10,
			'Rune platelegs': 10,
			'Rune boots': 10,
			Toolkit: 1,
			'Abyssal book': 10000
		});
		expect(runePlatebody.price).toBeGreaterThan(25_000);
		expect(bank3.value()).toEqual(
			runePlatebody.price * 10 +
				Items.get('Rune platelegs').price * 10 +
				Items.get('Rune boots').price * 10
		);
	});
});
