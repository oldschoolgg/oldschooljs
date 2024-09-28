"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterMimicTable = exports.EliteMimicTable = exports.Mimic3rdAgeTable = void 0;
const Bank_1 = __importDefault(require("../../structures/Bank"));
const Clue_1 = __importDefault(require("../../structures/Clue"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
exports.Mimic3rdAgeTable = new LootTable_1.default()
    .add("3rd age range coif")
    .add("3rd age range top")
    .add("3rd age range legs")
    .add("3rd age vambraces")
    .add("3rd age robe top")
    .add("3rd age robe")
    .add("3rd age mage hat")
    .add("3rd age amulet")
    .add("3rd age platelegs")
    .add("3rd age platebody")
    .add("3rd age full helmet")
    .add("3rd age plateskirt")
    .add("3rd age kiteshield")
    .add("3rd age longsword")
    .add("3rd age cloak")
    .add("3rd age wand")
    .add("3rd age bow")
    .add("3rd age druidic staff")
    .add("3rd age druidic cloak")
    .add("3rd age druidic robe top")
    .add("3rd age druidic robe bottoms")
    .add("3rd age pickaxe")
    .add("3rd age axe");
exports.EliteMimicTable = new LootTable_1.default()
    .every("Mahogany plank")
    .oneIn(44, "Ring of 3rd age")
    .oneIn(250, exports.Mimic3rdAgeTable)
    .add("Death rune", 480)
    .add("Death rune", 600)
    .add("Blood rune", 400)
    .add("Blood rune", 500)
    .add("Grimy ranarr weed", 25, 2)
    .add("Raw manta ray", 15, 2)
    .add("Wine of zamorak", 25, 2);
exports.MasterMimicTable = new LootTable_1.default()
    .every("Mahogany plank")
    .oneIn(40, "Ring of 3rd age")
    .oneIn(228, exports.Mimic3rdAgeTable)
    .add("Death rune", 480)
    .add("Death rune", 600)
    .add("Blood rune", 400)
    .add("Blood rune", 500)
    .add("Grimy ranarr weed", 25, 2)
    .add("Raw manta ray", 15, 2)
    .add("Wine of zamorak", 25, 2);
class MimicCasket extends Clue_1.default {
    open(tier = "master", quantity = 1) {
        const loot = new Bank_1.default();
        for (let i = 0; i < quantity; i++) {
            loot.add(tier.toLowerCase() === "elite" ? exports.EliteMimicTable.roll() : exports.MasterMimicTable.roll());
        }
        return loot;
    }
}
exports.default = new MimicCasket({ table: exports.MasterMimicTable });
