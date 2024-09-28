import type { BankItem, IntKeyBank, Item, ItemBank } from "../meta/types";
type ItemResolvable = Item | string | number;
export default class Bank {
    private map;
    frozen: boolean;
    static withSanitizedValues(source: ItemBank | IntKeyBank): Bank;
    constructor(initialBank?: IntKeyBank | ItemBank | Bank);
    removeInvalidValues(): Bank;
    private resolveItemID;
    clear(item?: Item | string | number): this;
    private makeFromInitialBank;
    toJSON(): ItemBank;
    set(item: ItemResolvable, quantity: number): this;
    freeze(): this;
    amount(item: ItemResolvable): number;
    addItem(item: number, quantity?: number): this;
    removeItem(item: number | string, quantity?: number): this;
    add(item: string | number | IntKeyBank | Bank | Item | undefined, quantity?: number): Bank;
    remove(item: string | number | ItemBank | Bank, quantity?: number): Bank;
    random(): BankItem | null;
    multiply(multiplier: number, itemsToNotMultiply?: number[]): this;
    has(items: Item | string | number | (string | number)[] | ItemBank | Bank): boolean;
    items(): [Item, number][];
    forEach(fn: (item: Item, quantity: number) => unknown): void;
    clone(): Bank;
    fits(bank: Bank): number;
    filter(fn: (item: Item, quantity: number) => boolean): Bank;
    toString(): string;
    get length(): number;
    value(): number;
    equals(otherBank: Bank): boolean;
    difference(otherBank: Bank): Bank;
    validate(): string[];
    validateOrThrow(): void;
    get itemIDs(): number[];
}
export {};
//# sourceMappingURL=Bank.d.ts.map