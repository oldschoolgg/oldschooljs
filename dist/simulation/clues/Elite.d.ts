import Bank from "../../structures/Bank";
import Clue from "../../structures/Clue";
import LootTable from "../../structures/LootTable";
export declare const Elite3rdageTable: LootTable;
export declare const EliteMegaRareTable: LootTable;
export declare const EliteTuxedoTable: LootTable;
export declare const EliteRareTable: LootTable;
export declare const EliteSeedTable: LootTable;
export declare const EliteStandardTable: LootTable;
export declare const EliteClueTable: LootTable;
export declare class EliteCasket extends Clue {
    open(quantity: number, targetBank?: undefined): Bank;
    open(quantity: number, targetBank: Bank): null;
}
declare const eliteCasket: EliteCasket;
export default eliteCasket;
//# sourceMappingURL=Elite.d.ts.map