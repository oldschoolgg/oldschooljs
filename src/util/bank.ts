import { ItemBank, ReturnedLootItem } from '../meta/types';
import itemID from './itemID';

/**
 * Joins an array of banks together
 * @param arrayOfBanks An array of number-keyed banks
 */
export function addBanks(arrayOfBanks: readonly Partial<ItemBank>[]): ItemBank {
	const newBank: Partial<ItemBank> = {};

	for (const bank of arrayOfBanks) {
		for (const [itemID, quantity] of Object.entries(bank)) {
			const numID = parseInt(itemID);
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
export function bankFromLootTableOutput(tableOutput: ReturnedLootItem[]): ItemBank {
	const newBank: ItemBank = {};

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
export function resolveNameBank<T>(nameBank: Record<string, T>): Record<string, T> {
	const newBank: Record<string, T> = {};

	for (const [name, val] of Object.entries(nameBank)) {
		newBank[itemID(name)] = val;
	}

	return newBank;
}

/**
 * Checks if a bank includes an amount or more of an item
 * @param itemBank A NumberKeyed bank
 * @param itemID The item ID to check for
 * @param quantity The quantity of items the bank should have. Defaults to 1
 */
export function bankHasItem(itemBank: ItemBank, itemID: number, quantity = 1): boolean {
	return typeof itemBank[itemID] === 'number' && itemBank[itemID] >= quantity;
}

/**
 * Checks if a bank includes all the items from another bank
 * @param bankToHave The source bank
 * @param bankToCheck The target bank
 */
export function bankHasAllItemsFromBank(bankToCheck: ItemBank, bankToHave: ItemBank): boolean {
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
export function removeItemFromBank(bank: ItemBank, itemID: number, amountToRemove = 1): ItemBank {
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
 */
export function removeBankFromBank(targetBank: ItemBank, bankToRemove: ItemBank): ItemBank {
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
export function addItemToBank(bank: ItemBank, itemID: number, amountToAdd = 1): ItemBank {
	const newBank = { ...bank };

	if (newBank[itemID]) newBank[itemID] += amountToAdd;
	else newBank[itemID] = amountToAdd;

	return newBank;
}

/**
 * Adds an array of items in a bank
 * @param bank A NumberKeyed bank to add items to
 * @param items An array of item IDs
 */
export function addArrayToBank(bank: ItemBank, items: number[]): ItemBank {
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
export function multiplyBank(bank: ItemBank, times: number): ItemBank {
	const newBank = { ...bank };
	for (const [itemID] of Object.entries(newBank)) {
		newBank[parseInt(itemID)] *= times;
	}
	return newBank;
}

export function numItemsBankHasInBank(bank: ItemBank, bankItemsToHave: ItemBank): number {
	let has = 0;
	for (const itemID of Object.keys(bankItemsToHave).map(i => parseInt(i))) {
		if (bankHasItem(bank, itemID)) {
			has++;
		}
	}
	return has;
}
