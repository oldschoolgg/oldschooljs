import Bank from "../../structures/Bank";
import Clue from "../../structures/Clue";
import LootTable from "../../structures/LootTable";
export declare const MediumUnicornTable: LootTable;
export declare const MediumElegantTable: LootTable;
export declare const MediumRareTable: LootTable;
export declare const MediumSubFirelighterTable: LootTable;
export declare const MediumFirelighterTable: LootTable;
export declare const MediumAmuletTable: LootTable;
export declare const MediumBowTable: LootTable;
export declare const MediumStandardTable: LootTable;
export declare const MediumClueTable: LootTable;
export declare class MediumCasket extends Clue {
    open(quantity: number, targetBank?: undefined): Bank;
    open(quantity: number, targetBank: Bank): null;
}
declare const mediumCasket: MediumCasket;
export default mediumCasket;
//# sourceMappingURL=Medium.d.ts.map