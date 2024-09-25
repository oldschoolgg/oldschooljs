import type { CustomKillLogic, MonsterKillOptions, MonsterOptions } from "../meta/types";
import Bank from "./Bank";
import type LootTable from "./LootTable";
import Monster from "./Monster";
interface SimpleMonsterOptions extends MonsterOptions {
    table?: LootTable;
    onTaskTable?: LootTable;
    wildyCaveTable?: LootTable;
    pickpocketTable?: LootTable;
    customKillLogic?: CustomKillLogic;
}
export default class SimpleMonster extends Monster {
    table?: LootTable;
    onTaskTable?: LootTable;
    wildyCaveTable?: LootTable;
    pickpocketTable?: LootTable;
    customKillLogic?: CustomKillLogic;
    constructor(options: SimpleMonsterOptions);
    kill(quantity?: number, options?: MonsterKillOptions): Bank;
}
export {};
//# sourceMappingURL=SimpleMonster.d.ts.map