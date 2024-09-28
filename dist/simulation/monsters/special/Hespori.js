"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hespori = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const HesporiTable = new LootTable_1.default()
    .add("Attas seed", [1, 2], 1)
    .add("Iasor seed", [1, 2], 1)
    .add("Kronos seed", [1, 2], 1);
const MainTable = new LootTable_1.default()
    .every(HesporiTable)
    .oneIn(35, "Bottomless compost bucket")
    .add("Watermelon seed", [10, 20], 2)
    .add("Snape grass seed", [6, 16], 2)
    .add("White lily seed", [8, 18], 5)
    .add("Limpwurt seed", [6, 14], 2)
    .add("Wildblood seed", [10, 20], 2)
    .add("Whiteberry seed", [10, 16], 2)
    .add("Poison ivy seed", [8, 16], 2)
    .add("Irit seed", [2, 8], 3)
    .add("Avantoe seed", [2, 5], 3)
    .add("Kwuarm seed", [2, 5], 3)
    .add("Toadflax seed", [2, 5], 3)
    .add("Cadantine seed", [2, 5], 3)
    .add("Lantadyme seed", [2, 5], 3)
    .add("Dwarf weed seed", [2, 5], 3)
    .add("Ranarr seed", [1, 2], 2)
    .add("Snapdragon seed", 1, 2)
    .add("Torstol seed", 1, 2)
    .add("Maple seed", [2, 4], 4)
    .add("Willow seed", [2, 5], 3)
    .add("Yew seed", 1, 2)
    .add("Magic seed", 1, 1)
    .add("Pineapple seed", [3, 6], 3)
    .add("Papaya tree seed", [1, 3], 3)
    .add("Palm tree seed", [1, 3], 3)
    .add("Dragonfruit tree seed", 1, 2)
    .add("Teak seed", [2, 5], 4)
    .add("Mahogany seed", [1, 3], 3)
    .add("Cactus seed", [4, 14], 2)
    .add("Potato cactus seed", [4, 14], 2)
    .add("Celastrus seed", 1, 2)
    .add("Spirit seed", 1, 1)
    .add("Redwood tree seed", 1, 1);
class Hespori extends Monster_1.default {
    kill(quantity = 1, options = { farmingLevel: 99 }) {
        const loot = new Bank_1.default();
        const farmingLvl = options.farmingLevel ?? 99;
        for (let i = 0; i < quantity; i++) {
            loot.add(MainTable.roll());
            if ((0, e_1.roll)(7000 - farmingLvl * 25))
                loot.add("Tangleroot");
        }
        return loot;
    }
}
exports.Hespori = Hespori;
exports.default = new Hespori({ id: 8583, name: "Hespori", aliases: ["hespori"] });
