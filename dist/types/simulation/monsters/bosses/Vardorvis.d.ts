import type { MonsterKillOptions } from "../../../meta/types";
import Bank from "../../../structures/Bank";
import Monster from "../../../structures/Monster";
declare class VardorvisSingleton extends Monster {
    allItems: number[];
    kill(quantity?: number, options?: MonsterKillOptions): Bank;
}
export declare const Vardorvis: VardorvisSingleton;
export {};
//# sourceMappingURL=Vardorvis.d.ts.map