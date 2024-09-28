import type { ItemBank, LootBank } from "../../meta/types";
import Bank from "../../structures/Bank";
import LootTable from "../../structures/LootTable";
import Minigame from "../../structures/Minigame";
export interface TeamMember {
    id: string;
    personalPoints: number;
    canReceiveAncientTablet?: boolean;
    canReceiveDust?: boolean;
}
export interface ChambersOfXericOptions {
    challengeMode?: boolean;
    timeToComplete?: number;
    team: TeamMember[];
}
export declare const CoXUniqueTable: LootTable;
export declare class ChambersOfXericClass extends Minigame {
    id: number;
    aliases: string[];
    name: string;
    allItems: number[];
    maxRoll: number;
    determineUniqueChancesFromTeamPoints(teamPoints: number): number[];
    elligibleForDust(teamSize: number, completionTime: number): boolean;
    rollLootFromChances(chances: number[]): Bank;
    rollNonUniqueLoot(personalPoints: number): ItemBank;
    complete(_options: ChambersOfXericOptions): LootBank;
}
export declare const ChambersOfXeric: ChambersOfXericClass;
//# sourceMappingURL=ChambersOfXeric.d.ts.map