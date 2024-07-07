import type { ItemBank } from "../meta/types";
import itemID from "./itemID";

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
 * Resolves a bank which uses item names or item IDs.
 * @param bank A bank to resolve
 */
export function resolveBank(bank: Record<string, number>): ItemBank {
	const newBank: ItemBank = {};

	for (const [nameOrID, val] of Object.entries(bank)) {
		const int = Number(nameOrID);
		const id = Number.isNaN(int) ? itemID(nameOrID) : int;
		newBank[id] = val;
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

export function fasterResolveBank(bank: ItemBank) {
	const firstKey = Object.keys(bank)[0];
	if (!Number.isNaN(Number(firstKey))) {
		return bank;
	}

	return resolveBank(bank);
}
