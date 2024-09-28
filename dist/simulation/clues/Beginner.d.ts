import Bank from "../../structures/Bank";
import Clue from "../../structures/Clue";
import LootTable from "../../structures/LootTable";
export declare const RareTable: LootTable;
export declare const SuccessfulUniqueTable: LootTable;
export declare const UniqueTable: LootTable;
export declare const StandardTable: LootTable;
export declare const BeginnerClueTable: LootTable;
export declare class BeginnerCasket extends Clue {
    open(quantity: number, targetBank?: undefined): Bank;
    open(quantity: number, targetBank: Bank): null;
}
declare const _default: BeginnerCasket;
export default _default;
//# sourceMappingURL=Beginner.d.ts.map