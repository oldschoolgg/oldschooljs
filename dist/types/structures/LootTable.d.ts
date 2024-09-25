import Bank from "./Bank";
export declare function reduceNumByPercent(value: number, percent: number): number;
export declare function randInt(min: number, max: number): number;
export declare function randFloat(min: number, max: number): number;
export declare function roll(upperLimit: number): boolean;
export interface LootTableOptions {
    limit?: number;
}
export interface LootTableMoreOptions {
    multiply?: boolean;
    freeze?: boolean;
}
export interface LootTableItem {
    item: number | LootTable;
    weight?: number;
    quantity: number | number[];
    options?: LootTableMoreOptions;
}
export interface OneInItems extends LootTableItem {
    chance: number;
}
export declare function isArrayOfItemTuples(x: readonly unknown[]): x is [string, (number | number[])?][];
export interface LootTableRollOptions {
    tertiaryItemPercentageChanges?: Map<string, number>;
    targetBank?: Bank;
}
export default class LootTable {
    length: number;
    table: LootTableItem[];
    totalWeight: number;
    limit?: number;
    oneInItems: OneInItems[];
    tertiaryItems: OneInItems[];
    everyItems: LootTableItem[];
    allItems: number[];
    constructor(lootTableOptions?: LootTableOptions);
    clone(): LootTable;
    private resolveName;
    private addToAllItems;
    oneIn(chance: number, item: LootTable | number | string, quantity?: number | number[], options?: LootTableMoreOptions): this;
    tertiary(chance: number, item: LootTable | number | string, quantity?: number | number[], options?: LootTableMoreOptions): this;
    every(item: LootTable | number | string, quantity?: number | number[], options?: LootTableMoreOptions): this;
    add(item: LootTable | number | string, quantity?: number[] | number, weight?: number, options?: LootTableMoreOptions): this;
    roll(quantity?: number): Bank;
    roll(quantity: number, options: {
        targetBank?: undefined;
    } & LootTableRollOptions): Bank;
    roll(quantity: number, options: {
        targetBank: Bank;
    } & LootTableRollOptions): null;
    private addResultToLoot;
    protected determineQuantity(quantity: number | number[]): number;
}
//# sourceMappingURL=LootTable.d.ts.map