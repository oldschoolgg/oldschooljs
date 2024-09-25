import type { LootBank } from "../../meta/types";
export interface TeamMember {
    id: string;
    damageDone: number;
}
export interface NightmareOptions {
    team: TeamMember[];
    isPhosani: boolean;
}
declare class NightmareClass {
    hp: number;
    allItems: number[];
    rollNonUniqueLoot(percentage: number, isMvp: boolean, isPhosani: boolean): [number, number];
    kill(options: Readonly<NightmareOptions>): LootBank;
}
declare const Nightmare: NightmareClass;
export default Nightmare;
//# sourceMappingURL=Nightmare.d.ts.map