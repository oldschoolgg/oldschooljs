import Bank from "../../structures/Bank";
import Clue from "../../structures/Clue";
import LootTable from "../../structures/LootTable";
type MimicClueTier = "master" | "elite";
export declare const Mimic3rdAgeTable: LootTable;
export declare const EliteMimicTable: LootTable;
export declare const MasterMimicTable: LootTable;
declare class MimicCasket extends Clue {
    open(tier?: MimicClueTier, quantity?: number): Bank;
}
declare const _default: MimicCasket;
export default _default;
//# sourceMappingURL=Mimic.d.ts.map