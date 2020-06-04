import { NumberKeyedBank, StringKeyedBank, ReturnedLootItem } from '../meta/types';
import itemID from './itemID';

/**
 * Joins an array of banks together
 * @param arrayOfBanks An array of number-keyed banks
 */
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

/**
 * Generate a bank based on loot table output
 * @param tableOutput
 */
export function bankFromLootTableOutput(tableOutput: ReturnedLootItem[]): NumberKeyedBank {
	const newBank: NumberKeyedBank = {};

	for (const { item, quantity } of tableOutput) {
		if (newBank[item]) newBank[item] += quantity;
		else newBank[item] = quantity;
	}

	return newBank;
}

/**
 * Transforms a string-based bank to an ID-based bank
 * @param nameBank A string-based bank to convert
 */
export function transformStringBankToIdBank(nameBank: StringKeyedBank): NumberKeyedBank {
	const newBank: NumberKeyedBank = {};

	for (const [name, number] of Object.entries(nameBank)) {
		newBank[itemID(name)] = number;
	}

	return newBank;
}

/**
 * Checks if a bank includes an amount or more of an item
 * @param itemBank A NumberKeyed bank
 * @param itemID The item ID to check for
 * @param quantity The quantity of items the bank should have. Defaults to 1
 */
export function bankHasItem(itemBank: NumberKeyedBank, itemID: number, quantity = 1): boolean {
	return typeof itemBank[itemID] === 'number' && itemBank[itemID] >= quantity;
}

/**
 * Checks if a bank includes all the items from another bank
 * @param bankToHave The source bank
 * @param bankToCheck The target bank
 */
export function bankHasAllItemsFromBank(
	bankToHave: NumberKeyedBank,
	bankToCheck: NumberKeyedBank
): boolean {
	const itemsToHave: [string, number][] = Object.entries(bankToHave);

	for (const [itemID, qty] of itemsToHave) {
		if (!bankHasItem(bankToCheck, parseInt(itemID), qty)) {
			return false;
		}
	}

	return true;
}

/**
 * Removes an item or a quantity of items from a bank
 * @param bank A NumberKeyed bank to remove from
 * @param itemID The item ID to remove
 * @param amountToRemove The quantity to remove. Defaults to 1
 */
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

/**
 * Removes the contents of a bank from another bank
 * @param bankToRemove The source bank
 * @param targetBank The target bank
 */
export function removeBankFromBank(
	bankToRemove: NumberKeyedBank,
	targetBank: NumberKeyedBank
): NumberKeyedBank {
	let newBank = { ...targetBank };

	for (const [itemID, qty] of Object.entries(bankToRemove)) {
		newBank = removeItemFromBank(newBank, parseInt(itemID), qty);
	}

	return newBank;
}

/**
 * Adds an item to a bank
 * @param bank A NumberKeyed bank to add items in
 * @param itemID The item ID to add
 * @param amountToAdd Quantity of items to be added. Defaults to 1
 */
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

/**
 * Adds the content of a bank to another bank
 * @param fromBank The source bank
 * @param toBank The target bank
 */
export function addBankToBank(fromBank: NumberKeyedBank, toBank: NumberKeyedBank): NumberKeyedBank {
	let newBank = { ...toBank };

	for (const [itemID, quantity] of Object.entries(fromBank)) {
		newBank = addItemToBank(newBank, parseInt(itemID), quantity);
	}

	return newBank;
}

/**
 * Adds an array of items in a bank
 * @param bank A NumberKeyed bank to add items to
 * @param items An array of item IDs
 */
export function addArrayOfItemsToBank(bank: NumberKeyedBank, items: number[]): NumberKeyedBank {
	let newBank = { ...bank };

	for (const item of items) {
		newBank = addItemToBank(newBank, item);
	}

	return newBank;
}

/**
 * Multiplies a bank's contents by the times specified
 * @param bank A NumberKeyed bank whose contents will be multiplied
 * @param times How many times should the contents be multiplied
 */
export function multiplyBankItems(bank: NumberKeyedBank, times: number): NumberKeyedBank {
	const newBank = { ...bank };
	for (const [itemID] of Object.entries(newBank)) {
		newBank[parseInt(itemID)] *= times;
	}
	return newBank;
}
