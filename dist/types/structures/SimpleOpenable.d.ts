import type { OpenableOptions } from "../meta/types";
import Bank from "./Bank";
import type LootTable from "./LootTable";
import Openable from "./Openable";
interface SimpleOpenableOptions extends OpenableOptions {
    table: LootTable;
}
export default class SimpleOpenable extends Openable {
    table: LootTable;
    constructor(options: SimpleOpenableOptions);
    open(quantity?: number): Bank;
}
export {};
//# sourceMappingURL=SimpleOpenable.d.ts.map