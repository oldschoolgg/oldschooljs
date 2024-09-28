import type { LootBank } from "../../meta/types";
import Bank from "../../structures/Bank";
import LootTable from "../../structures/LootTable";
export interface TeamMember {
    id: string;
    deaths: number[];
}
export interface TheatreOfBloodOptions {
    hardMode: boolean;
    team: TeamMember[];
}
interface ParsedMember extends TeamMember {
    numDeaths: number;
    points: number;
}
export interface TOBRoom {
    name: string;
    difficultyRating: number;
    timeWeighting: number;
}
export declare const TOBRooms: TOBRoom[];
export declare const ToBUniqueTable: LootTable;
export declare class TheatreOfBloodClass {
    nonUniqueLoot(member: ParsedMember, isHardMode: boolean, deaths: number[]): Bank;
    uniqueDecide(team: ParsedMember[]): ParsedMember;
    complete(_options: TheatreOfBloodOptions): {
        loot: LootBank;
        percentChanceOfUnique: number;
        totalDeaths: number;
        teamPoints: number;
    };
}
export declare const TheatreOfBlood: TheatreOfBloodClass;
export {};
//# sourceMappingURL=TheatreOfBlood.d.ts.map