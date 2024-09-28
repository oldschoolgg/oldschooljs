import type { MonsterData } from "../meta/monsterData";
import type { MonsterKillOptions, MonsterOptions } from "../meta/types";
import type Bank from "./Bank";
export default abstract class Monster {
    id: number;
    name: string;
    aliases: string[];
    data: MonsterData;
    allItems: number[];
    abstract kill(quantity: number, options: MonsterKillOptions): Bank;
    constructor(options: MonsterOptions);
}
//# sourceMappingURL=Monster.d.ts.map