import type { MonsterKillOptions } from "../../../meta/types";
import Bank from "../../../structures/Bank";
import Monster from "../../../structures/Monster";
declare class DukeSucellusSingleton extends Monster {
    allItems: number[];
    kill(quantity?: number, options?: MonsterKillOptions): Bank;
}
export declare const DukeSucellus: DukeSucellusSingleton;
export {};
//# sourceMappingURL=DukeSucellus.d.ts.map