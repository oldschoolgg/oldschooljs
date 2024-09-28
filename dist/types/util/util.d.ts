import { type hiscoreURLs } from "../constants";
import type { CustomKillLogic, Item } from "../meta/types";
import LootTable from "../structures/LootTable";
import type Player from "../structures/Player";
export declare function resolvePlayerFromHiscores(csvData: string, accountType: keyof typeof hiscoreURLs): Player;
export declare function isValidUsername(username: string): boolean;
export declare function convertLVLtoXP(lvl: number): number;
export declare function convertXPtoLVL(xp: number, cap?: number): number;
export declare function getBrimKeyChanceFromCBLevel(combatLevel: number): number;
export declare function getLarranKeyChanceFromCBLevel(combatLevel: number, slayerMonster: boolean): number;
export declare function JSONClone<O>(object: O): O;
export declare function getAncientShardChanceFromHP(hitpoints: number): number;
export declare function getTotemChanceFromHP(hitpoints: number): number;
export declare function getSlayersEnchantmentChanceFromHP(hitpoints: number): number;
export interface RevTable {
    uniqueTable: RevTableItem;
    ancientEmblem: RevTableItem;
    ancientTotem: RevTableItem;
    ancientCrystal: RevTableItem;
    ancientStatuette: RevTableItem;
    topThree: RevTableItem;
    seeds: RevTableItem;
}
type RevTableItem = [number, number];
export declare const revsUniqueTable: LootTable;
export declare function makeRevTable(table: RevTable): CustomKillLogic;
export declare function randomVariation(value: number, percentage: number): number;
export declare function getItem(itemName: string | number | undefined): Item | null;
export declare function getItemOrThrow(itemName: string | number | undefined): Item;
export declare function resolveItems(_itemArray: string | number | (string | number)[]): number[];
type ResolvableItem = number | string;
export type ArrayItemsResolvable = (ResolvableItem | ResolvableItem[])[];
export type ArrayItemsResolved = (number | number[])[];
export declare function deepResolveItems(itemArray: ArrayItemsResolvable): ArrayItemsResolved;
export declare function itemTupleToTable(items: [string, number | [number, number]][]): LootTable;
export * from "./smallUtils";
//# sourceMappingURL=util.d.ts.map