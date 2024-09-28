import type { LootBank } from "../../meta/types";
export interface TeamMember {
    id: string;
    performancePercentage: number;
    isMVP: boolean;
}
export interface ZalcanoOptions {
    team: TeamMember[];
}
declare class ZalcanoClass {
    allItems: number[];
    rollNonUniqueLoot(perfPercent: number, isMVP: boolean): [number, number];
    kill({ team }: Readonly<ZalcanoOptions>): LootBank;
}
declare const Zalcano: ZalcanoClass;
export default Zalcano;
//# sourceMappingURL=Zalcano.d.ts.map