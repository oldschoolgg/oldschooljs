import type { ItemBank } from "../meta/types";
export declare function resolveNameBank<T>(nameBank: Record<string, T>): Record<string, T>;
export declare function resolveBank(bank: Record<string, number>): ItemBank;
export declare function addItemToBank(bank: ItemBank, itemID: number, amountToAdd?: number): ItemBank;
export declare function fasterResolveBank(bank: ItemBank): ItemBank;
//# sourceMappingURL=bank.d.ts.map