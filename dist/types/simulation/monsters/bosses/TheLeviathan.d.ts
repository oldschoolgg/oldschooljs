import type { MonsterKillOptions } from "../../../meta/types";
import Bank from "../../../structures/Bank";
import Monster from "../../../structures/Monster";
declare class TheLeviathanSingleton extends Monster {
    allItems: number[];
    kill(quantity?: number, options?: MonsterKillOptions): Bank;
}
export declare const TheLeviathan: TheLeviathanSingleton;
export {};
//# sourceMappingURL=TheLeviathan.d.ts.map