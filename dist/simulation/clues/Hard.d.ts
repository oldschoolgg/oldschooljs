import Bank from "../../structures/Bank";
import Clue from "../../structures/Clue";
import LootTable from "../../structures/LootTable";
export declare const Hard3rdageTable: LootTable;
export declare const HardMegaRareTable: LootTable;
export declare const HardBlessedShields: LootTable;
export declare const HardHeralicPlatebody: LootTable;
export declare const HardRareTable: LootTable;
export declare const HardBowTable: LootTable;
export declare const HardStandardTable: LootTable;
export declare const HardClueTable: LootTable;
export declare class HardCasket extends Clue {
    open(quantity: number, targetBank?: undefined): Bank;
    open(quantity: number, targetBank: Bank): null;
}
declare const hardCasket: HardCasket;
export default hardCasket;
//# sourceMappingURL=Hard.d.ts.map