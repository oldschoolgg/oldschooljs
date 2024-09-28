import type { Item, ItemID } from "../meta/types";
import { Collection } from "./Collection";
export declare const itemNameMap: Map<string, number>;
type ItemResolvable = number | string;
export interface ItemCollection {
    [index: string]: Item;
}
export declare const CLUE_SCROLLS: number[];
export declare const CLUE_SCROLL_NAMES: string[];
export declare const USELESS_ITEMS: number[];
declare class Items extends Collection<ItemID, Item> {
    get(item: ItemResolvable): Item | undefined;
    modifyItem(itemName: ItemResolvable, data: Partial<Item>): void;
    private resolveID;
}
declare const itemsExport: Items;
export default itemsExport;
//# sourceMappingURL=Items.d.ts.map