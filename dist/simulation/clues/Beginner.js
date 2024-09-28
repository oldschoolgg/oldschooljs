"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginnerCasket = exports.BeginnerClueTable = exports.StandardTable = exports.UniqueTable = exports.SuccessfulUniqueTable = exports.RareTable = void 0;
const Bank_1 = __importDefault(require("../../structures/Bank"));
const Clue_1 = __importDefault(require("../../structures/Clue"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
exports.RareTable = new LootTable_1.default()
    .add("Black 2h sword")
    .add("Black platebody")
    .add("Black longsword")
    .add("Black full helm")
    .add("Black platelegs")
    .add("Black battleaxe")
    .add("Black axe")
    .add("Black pickaxe")
    .add("Black plateskirt")
    .add("Black kiteshield")
    .add("Black med helm")
    .add("Black dagger")
    .add("Black sq shield")
    .add("Black chainbody")
    .add("Black sword")
    .add("Black mace")
    .add("Black warhammer")
    .add("Black scimitar");
exports.SuccessfulUniqueTable = new LootTable_1.default()
    .add("Mole slippers")
    .add("Frog slippers")
    .add("Bear feet")
    .add("Demon feet")
    .add("Jester cape")
    .add("Shoulder parrot")
    .add("Monk's robe top (t)")
    .add("Monk's robe (t)")
    .add("Amulet of defence (t)")
    .add("Sandwich lady hat")
    .add("Sandwich lady top")
    .add("Sandwich lady bottom")
    .add("Rune scimitar ornament kit (guthix)")
    .add("Rune scimitar ornament kit (saradomin)")
    .add("Rune scimitar ornament kit (zamorak)");
exports.UniqueTable = new LootTable_1.default().add("Cabbage").add(exports.SuccessfulUniqueTable);
exports.StandardTable = new LootTable_1.default()
    .add("Shrimps", [5, 14])
    .add("Herring", [5, 9])
    .add("Sardine", [5, 12])
    .add("Air rune", [15, 35])
    .add("Fire rune", [15, 35])
    .add("Water rune", [15, 35])
    .add("Earth rune", [15, 35])
    .add("Mind rune", [15, 35])
    .add("Body rune", [15, 35])
    .add("Law rune", [2, 7])
    .add("Chaos rune", [2, 7])
    .add("Nature rune", [2, 7])
    .add("Bronze arrow", [15, 30])
    .add("Iron arrow", [7, 15])
    .add("Staff of air")
    .add("Staff of water")
    .add("Staff of earth")
    .add("Staff of fire")
    .add("Steel platebody")
    .add("Steel longsword")
    .add("Steel full helm")
    .add("Steel platelegs")
    .add("Steel battleaxe")
    .add("Steel axe")
    .add("Iron pickaxe")
    .add("Steel dagger")
    .add("Oak shortbow")
    .add("Longbow")
    .add("Oak longbow")
    .add("Leather chaps")
    .add("Leather body")
    .add("Hardleather body")
    .add("Leather vambraces")
    .add("Leather cowl")
    .add("Blue wizard robe")
    .add("Blue wizard hat")
    .add("Black robe")
    .add("Wizard hat")
    .add("Steel plateskirt")
    .add("Shortbow")
    .add(exports.RareTable);
exports.BeginnerClueTable = new LootTable_1.default().add(exports.StandardTable, 1, 11).add(exports.UniqueTable, 1, 1);
const MainTable = new LootTable_1.default().add(exports.BeginnerClueTable, [1, 3]);
class BeginnerCasket extends Clue_1.default {
    open(quantity, targetBank) {
        const loot = targetBank ?? new Bank_1.default();
        MainTable.roll(quantity, { targetBank: loot });
        return loot;
    }
}
exports.BeginnerCasket = BeginnerCasket;
exports.default = new BeginnerCasket({ table: exports.BeginnerClueTable });
