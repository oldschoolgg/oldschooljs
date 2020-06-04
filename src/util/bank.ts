import { NumberKeyedBank, StringKeyedBank, ReturnedLootItem } from '../meta/types';
import itemID from './itemID';

export function addArrayOfBanks(
	arrayOfBanks: readonly Partial<NumberKeyedBank>[]
): NumberKeyedBank {
	const newBank: Partial<NumberKeyedBank> = {};

	for (const bank of arrayOfBanks) {
		for (const [itemID, quantity] of Object.entries(bank)) {
			const numID = parseInt(itemID, 10);
			if (newBank[numID]) newBank[numID] += quantity;
			else newBank[numID] = quantity;
		}
	}

	return newBank;
}

export function bankFromLootTableOutput(tableOutput: ReturnedLootItem[]): NumberKeyedBank {
	const newBank: NumberKeyedBank = {};

	for (const { item, quantity } of tableOutput) {
		if (newBank[item]) newBank[item] += quantity;
		else newBank[item] = quantity;
	}

	return newBank;
}

export function transformStringBankToIdBank(nameBank: StringKeyedBank): NumberKeyedBank {
	const newBank: NumberKeyedBank = {};

	for (const [name, number] of Object.entries(nameBank)) {
		newBank[itemID(name)] = number;
	}

	return newBank;
}

export function bankHasItem(itemBank: NumberKeyedBank, itemID: number, quantity = 1): boolean {
	return typeof itemBank[itemID] === 'number' && itemBank[itemID] >= quantity;
}

export function bankHasAllItemsFromBank(
	bankToCheck: NumberKeyedBank,
	bankToHave: NumberKeyedBank
): boolean {
	const itemsToHave: [string, number][] = Object.entries(bankToHave);

	for (const [itemID, qty] of itemsToHave) {
		if (!bankHasItem(bankToCheck, parseInt(itemID), qty)) {
			return false;
		}
	}

	return true;
}

export function removeItemFromBank(
	bank: NumberKeyedBank,
	itemID: number,
	amountToRemove = 1
): NumberKeyedBank {
	const newBank = { ...bank };
	const currentValue = bank[itemID];

	// If they don't have this item in the bank, just return it.
	if (typeof currentValue === 'undefined') return bank;

	// If they will have 0 or less of this item afterwards, delete it entirely.
	if (currentValue - amountToRemove <= 0) {
		delete newBank[itemID];
	} else {
		newBank[itemID] = currentValue - amountToRemove;
	}

	return newBank;
}

export function removeBankFromBank(
	targetBank: NumberKeyedBank,
	bankToRemove: NumberKeyedBank
): NumberKeyedBank {
	let newBank = { ...targetBank };

	for (const [itemID, qty] of Object.entries(bankToRemove)) {
		newBank = removeItemFromBank(newBank, parseInt(itemID), qty);
	}

	return newBank;
}

export function addItemToBank(
	bank: NumberKeyedBank,
	itemID: number,
	amountToAdd = 1
): NumberKeyedBank {
	const newBank = { ...bank };

	if (newBank[itemID]) newBank[itemID] += amountToAdd;
	else newBank[itemID] = amountToAdd;

	return newBank;
}

export function addBankToBank(fromBank: NumberKeyedBank, toBank: NumberKeyedBank): NumberKeyedBank {
	let newBank = { ...toBank };

	for (const [itemID, quantity] of Object.entries(fromBank)) {
		newBank = addItemToBank(newBank, parseInt(itemID), quantity);
	}

	return newBank;
}

export function addArrayOfItemsToBank(bank: NumberKeyedBank, items: number[]): NumberKeyedBank {
	let newBank = { ...bank };

	for (const item of items) {
		newBank = addItemToBank(newBank, item);
	}

	return newBank;
}

export function multiplyBankItems(bank: NumberKeyedBank, times: number): NumberKeyedBank {
	const newBank = { ...bank };
	for (const [itemID] of Object.entries(newBank)) {
		newBank[parseInt(itemID)] *= times;
	}
	return newBank;
}
