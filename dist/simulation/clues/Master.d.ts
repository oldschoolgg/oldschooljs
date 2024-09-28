import Bank from "../../structures/Bank";
import Clue from "../../structures/Clue";
import LootTable from "../../structures/LootTable";
export declare const MasterGodSwordOrnTable: LootTable;
export declare const MasterSubAnkouOutfitTable: LootTable;
export declare const MasterAnkouOutfitTable: LootTable;
export declare const MasterSubMummyOutfitTable: LootTable;
export declare const MasterMummyOutfitTable: LootTable;
export declare const MasterSubDragonOrnTable: LootTable;
export declare const MasterDragonOrnTable: LootTable;
export declare const Master3rdageTable: LootTable;
export declare const MasterMegaRareTable: LootTable;
export declare const MasterRareTable: LootTable;
export declare const MasterSeedTable: LootTable;
export declare const MasterStandardTable: LootTable;
export declare const MasterClueTable: LootTable;
export declare class MasterCasket extends Clue {
    open(quantity: number, targetBank?: undefined): Bank;
    open(quantity: number, targetBank: Bank): null;
}
declare const _default: MasterCasket;
export default _default;
//# sourceMappingURL=Master.d.ts.map