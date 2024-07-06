import { describe, expect, test } from "vitest";

import Bank from "../src/structures/Bank";
import Items from "../src/structures/Items";
import {
	addArrayToBank,
	addItemToBank,
	bankFromLootTableOutput,
	bankHasAllItemsFromBank,
	bankHasItem,
	itemID,
	multiplyBank,
	numItemsBankHasInBank,
	removeBankFromBank,
	removeItemFromBank,
	resolveNameBank,
} from "../src/util";

describe("Bank", () => {
	test("convert string bank to number bank", () => {
		expect.assertions(1);
		const strBank = {
			Toolkit: 2,
			"Ammo Mould": 4,
			Candle: 1,
		};
		const numBank = {
			1: 2,
			4: 4,
			36: 1,
		};
		expect(resolveNameBank(strBank)).toEqual(numBank);
	});

	test("convert loot item array to number bank", () => {
		expect.assertions(1);
		const lootItems = [
			{
				item: 6,
				quantity: 2,
			},
			{
				item: 67,
				quantity: 2,
			},
			{
				item: 6,
				quantity: 8,
			},
			{
				item: 32,
				quantity: 1,
			},
		];
		const expected = {
			6: 10,
			32: 1,
			67: 2,
		};
		expect(bankFromLootTableOutput(lootItems)).toEqual(expected);
	});

	test("bank contains item", () => {
		expect.assertions(4);
		const bank = { 1: 2, 3: 4 };

		expect(bankHasItem(bank, 1)).toBeTruthy();
		expect(bankHasItem(bank, 2)).toBeFalsy();
		expect(bankHasItem(bank, 3, 3)).toBeTruthy();
		expect(bankHasItem(bank, 1, 4)).toBeFalsy();
	});
	test("bank has all items", () => {
		expect.assertions(2);
		const bankToHave = resolveNameBank({
			"Fire rune": 1000,
			"Air rune": 1,
			"Chaos rune": 101_010,
		});

		const bankThatShouldntHave = resolveNameBank({
			"Fire rune": 1000,
			"Air rune": 1,
			"Chaos rune": 1,
		});

		const bankThatShouldHave = resolveNameBank({
			"Fire rune": 104_200,
			"Air rune": 43_432,
			"Chaos rune": 121_010,
			"Death rune": 121_010,
		});

		expect(bankHasAllItemsFromBank(bankThatShouldHave, bankToHave)).toBeTruthy();
		expect(bankHasAllItemsFromBank(bankThatShouldntHave, bankToHave)).toBeFalsy();
	});

	test("remove item from bank", () => {
		expect.assertions(3);
		const bank = {
			45: 9,
			87: 1,
		};

		expect(removeItemFromBank(bank, 87)).toEqual({
			45: 9,
		});

		expect(removeItemFromBank(bank, 98, 1)).toEqual({
			45: 9,
			87: 1,
		});

		expect(removeItemFromBank(bank, 45, 2)).toEqual({
			45: 7,
			87: 1,
		});
	});

	test("remove bank from bank", () => {
		expect.assertions(1);
		const sourceBank = resolveNameBank({
			"Fire rune": 100,
			"Air rune": 50,
		});

		const bankToRemove = resolveNameBank({
			"Fire rune": 50,
			"Air rune": 50,
		});

		const expectedBank = resolveNameBank({
			"Fire rune": 50,
		});

		expect(removeBankFromBank(sourceBank, bankToRemove)).toEqual(expectedBank);
	});

	test("add item to bank", () => {
		expect.assertions(2);
		const bank = {
			45: 9,
			87: 1,
		};

		const expected = {
			45: 9,
			69: 420,
			87: 1,
		};

		const expectedInc = {
			45: 9,
			87: 2,
		};

		expect(addItemToBank(bank, 69, 420)).toEqual(expected);
		expect(addItemToBank(bank, 87)).toEqual(expectedInc);
	});

	test("add bank to bank", () => {
		expect.assertions(1);

		const bank = { 1: 2 };

		const bank2 = { 3: 4 };

		const expected = { 1: 2, 3: 4 };

		expect(new Bank(bank).add(bank2).bank).toEqual(expected);
	});

	test("add array of items to bank", () => {
		expect.assertions(1);

		const bank = { 1: 2 };

		const items = [3, 4, 5];

		const expected = { 1: 2, 3: 1, 4: 1, 5: 1 };

		expect(addArrayToBank(bank, items)).toEqual(expected);
	});

	test("add item to bank", () => {
		const bank = new Bank();

		const item = Items.get("Twisted bow")!;
		bank.add(item);

		expect(bank.equals(new Bank().add("Twisted bow"))).toBeTruthy();
		bank.add(item);

		expect(bank.equals(new Bank().add("Twisted bow", 2))).toBeTruthy();
	});

	test("multiply bank items", () => {
		const bank = { 1: 2, 3: 4 };
		const expected = { 1: 4, 3: 8 };
		expect(multiplyBank(bank, 2)).toEqual(expected);
	});

	test("multiply bank items, excluded", () => {
		const bank = new Bank().add("Coal", 100).add("Trout", 100).add("Egg", 100).add("Bones", 100);
		bank.add(undefined);
		const expected = new Bank().add("Coal", 200).add("Trout", 100).add("Egg", 100).add("Bones", 200);
		expect(bank.multiply(2, ["Trout", "Egg"].map(itemID))).toEqual(expected);
		expect(bank.amount("Coal")).toEqual(200);
		expect(bank.amount("Egg")).toEqual(100);
	});

	test("numItemsBankHasInBank", () => {
		expect.assertions(2);
		const sourceBank1 = { 1: 2, 3: 4 };
		const bankToHave1 = { 1: 4, 3: 8 };

		expect(numItemsBankHasInBank(sourceBank1, bankToHave1)).toEqual(2);

		const sourceBank2 = { 1: 0, 3: 4 };
		const bankToHave2 = { 1: 4, 3: 8 };

		expect(numItemsBankHasInBank(sourceBank2, bankToHave2)).toEqual(1);
	});

	test("mutate filter", () => {
		const bank = new Bank({
			Toolkit: 2,
			"Ammo Mould": 4,
			Candle: 1,
		});
		expect(bank.length).toEqual(3);
		const empty = bank.filter(() => false);
		expect(bank.length).toEqual(3);
		expect(empty.length).toEqual(0);
		bank.filter(item => item.name === "Candle", true);
		expect(bank.length).toEqual(1);
	});

	test("value", () => {
		const bank = new Bank({
			Toolkit: 2,
		});
		expect(bank.value()).toEqual(0);
		const runePlatebody = Items.get("Rune platebody")!;
		const bank2 = new Bank({
			"Rune platebody": 10,
		});
		expect(runePlatebody.price).toBeGreaterThan(25_000);
		expect(bank2.value()).toEqual(runePlatebody.price * 10);
		const bank3 = new Bank({
			"Rune platebody": 10,
			"Rune platelegs": 10,
			"Rune boots": 10,
			Toolkit: 1,
			"Abyssal book": 10_000,
		});
		expect(runePlatebody.price).toBeGreaterThan(25_000);
		expect(bank3.value()).toEqual(
			runePlatebody.price * 10 + Items.get("Rune platelegs")!.price * 10 + Items.get("Rune boots")!.price * 10,
		);
	});

	test("init from bank", () => {
		const start: any = { 1: 1 };
		let bank = new Bank(start);
		const bankToTest = new Bank(bank);
		delete start[1];
		delete bank.bank[1];
		start[2] = 1;
		bank.bank[2] = 1;
		bank = bank.multiply(100);
		bank.bank = {};
		expect(bankToTest.amount(1)).toEqual(1);
		expect(bankToTest.length).toEqual(1);
	});

	test("frozen bank", () => {
		const bank = new Bank().add("Twisted bow", 73).add("Egg", 5);
		bank.freeze();
		try {
			bank.bank[5] = 1;
		} catch {}
		expect(bank.length).toEqual(2);
		expect(() => bank.add("Twisted bow")).toThrowError();
		try {
			bank.add("Twisted bow");
		} catch {}
		try {
			bank.addItem(itemID("Twisted bow"));
		} catch {}
		try {
			bank.remove(itemID("Twisted bow"));
		} catch {}
		try {
			bank.multiply(5);
		} catch {}
		try {
			bank.filter(() => true, true);
		} catch {}
		expect(bank.amount("Twisted bow")).toEqual(73);
	});

	test("equals", () => {
		const bank = new Bank().add("Twisted bow", 73).add("Egg", 5);
		bank.add(undefined);
		bank.add({});
		bank.add(new Bank());
		bank.remove({});
		bank.remove(new Bank());
		expect(bank.equals(new Bank())).toEqual(false);
		expect(bank.equals(new Bank().add("Twisted bow", 73).add("Egg", 4))).toEqual(false);
		expect(bank.equals(new Bank().add("Twisted bow", 73).add("Egg", 5).add("Coal"))).toEqual(false);
		expect(bank.equals(new Bank().add("Twisted bow", 73).add("Egg", 5))).toEqual(true);

		const bank2 = new Bank().add("Twisted bow");
		expect(bank2.equals(new Bank())).toEqual(false);
		expect(bank2.equals(new Bank().add("Coal"))).toEqual(false);
		expect(bank2.equals(new Bank().add("Twisted bow", 2))).toEqual(false);
		expect(bank2.equals(new Bank().add("Twisted bow", 1).add("Coal"))).toEqual(false);
		expect(bank2.equals(bank2)).toEqual(true);
	});

	test("difference", () => {
		const bank = new Bank().add("Twisted bow", 73).add("Egg", 5);
		bank.add(undefined);
		bank.add({});
		bank.add(new Bank());
		expect(bank.difference(new Bank()).equals(bank)).toBeTruthy();

		const bank2 = new Bank().add("Twisted bow", 73).add("Egg", 5);
		expect(
			bank2.difference(new Bank().add("Twisted bow", 72).add("Egg", 5)).equals(new Bank().add("Twisted bow", 1)),
		).toBeTruthy();
	});

	test("random", () => {
		const bank = new Bank().add("Twisted bow", 73).add("Egg", 5);
		expect(bank.random()).toBeTruthy();
		expect(new Bank().random()).toBeFalsy();
	});
});
