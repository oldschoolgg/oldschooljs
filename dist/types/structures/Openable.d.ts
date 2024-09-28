import type { OpenableOpenOptions, OpenableOptions } from "../meta/types";
import type Bank from "./Bank";
export default abstract class Openable {
    id: number;
    name: string;
    aliases: string[];
    abstract open(quantity: number, options: OpenableOpenOptions): Bank;
    allItems: number[];
    constructor(options: OpenableOptions);
}
//# sourceMappingURL=Openable.d.ts.map