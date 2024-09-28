import type { MonsterKillOptions } from "../../../meta/types";
import Bank from "../../../structures/Bank";
import Monster from "../../../structures/Monster";
declare class TheWhispererSingleton extends Monster {
    allItems: number[];
    kill(quantity?: number, options?: MonsterKillOptions): Bank;
}
export declare const TheWhisperer: TheWhispererSingleton;
export {};
//# sourceMappingURL=TheWhisperer.d.ts.map