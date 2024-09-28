import Bank from "../../structures/Bank";
import Clue from "../../structures/Clue";
import LootTable from "../../structures/LootTable";
export declare const EasyChefTable: LootTable;
export declare const EasySubMonkTable: LootTable;
export declare const EasyMonkTable: LootTable;
export declare const EasyCapeTable: LootTable;
export declare const EasyElegantTable: LootTable;
export declare const EasyRareTable: LootTable;
export declare const EasyAmuletTable: LootTable;
export declare const EasyBlessingsTable: LootTable;
export declare const EasyBowTable: LootTable;
export declare const EasyStandardTable: LootTable;
export declare const EasyClueTable: LootTable;
export declare class EasyCasket extends Clue {
    open(quantity: number, targetBank?: undefined): Bank;
    open(quantity: number, targetBank: Bank): null;
}
declare const easyCasket: EasyCasket;
export default easyCasket;
//# sourceMappingURL=Easy.d.ts.map