import type { SimpleTableItem } from "../meta/types";
export default class SimpleTable<T> {
    length: number;
    table: SimpleTableItem<T>[];
    totalWeight: number;
    constructor();
    add(item: T, weight?: number): this;
    delete(item: T): this;
    roll(): SimpleTableItem<T>["item"];
}
//# sourceMappingURL=SimpleTable.d.ts.map