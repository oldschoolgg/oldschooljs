"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrimstoneChestOpenable = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const BonusOpenables_1 = require("./BonusOpenables");
const BrimstoneChestTable = new LootTable_1.default()
    .add("Uncut diamond", [25, 35], 5)
    .add("Uncut ruby", [25, 35], 5)
    .add("Coal", [300, 500], 5)
    .add("Coins", [50_000, 150_000], 5)
    .add("Gold ore", [100, 200], 4)
    .add("Dragon arrowtips", [50, 200], 4)
    .add("Iron ore", [350, 500], 3)
    .add("Rune full helm", [2, 4], 3)
    .add("Rune platebody", [1, 2], 3)
    .add("Rune platelegs", [1, 2], 3)
    .add("Runite ore", [10, 15], 2)
    .add("Steel bar", [300, 500], 2)
    .add("Magic logs", [120, 160], 2)
    .add("Dragon dart tip", [40, 160], 2)
    .add("Palm tree seed", [2, 4], 1)
    .add("Magic seed", [2, 4], 1)
    .add("Celastrus seed", [2, 4], 1)
    .add("Dragonfruit tree seed", [1, 4], 1)
    .add("Redwood tree seed", 1, 1)
    .add("Torstol seed", [3, 5], 1)
    .add("Snapdragon seed", [3, 5], 1)
    .add("Ranarr seed", [3, 5], 1)
    .add("Pure essence", [3000, 6000], 1)
    .oneIn(200, "Broken dragon hasta")
    .oneIn(1000, "Mystic hat (dusk)")
    .oneIn(1000, "Mystic robe top (dusk)")
    .oneIn(1000, "Mystic robe bottom (dusk)")
    .oneIn(1000, "Mystic gloves (dusk)")
    .oneIn(1000, "Mystic boots (dusk)");
class BrimstoneChestOpenable extends SimpleOpenable_1.default {
    open(quantity = 1, options = { fishLvl: 99 }) {
        const loot = new Bank_1.default();
        const fishLvl = options.fishLvl ?? 99;
        const lobster = BonusOpenables_1.BrimstoneChestFish.find(fish => fish.item === "Raw lobster");
        for (let i = 0; i < quantity; i++) {
            if ((0, e_1.roll)(20)) {
                let fishRolled = false;
                for (const fish of BonusOpenables_1.BrimstoneChestFish) {
                    if (fishLvl >= fish.req) {
                        if ((0, e_1.percentChance)((0, BonusOpenables_1.chanceOfFish)(fishLvl, fish.low, fish.high))) {
                            loot.add(fish.item, (0, e_1.randInt)(fish.qty[0], fish.qty[1]));
                            fishRolled = true;
                            break;
                        }
                    }
                }
                if (!fishRolled) {
                    loot.add(lobster?.item, (0, e_1.randInt)(lobster.qty[0], lobster.qty[1]));
                }
            }
            else {
                loot.add(BrimstoneChestTable.roll());
            }
        }
        return loot;
    }
}
exports.BrimstoneChestOpenable = BrimstoneChestOpenable;
exports.default = new BrimstoneChestOpenable({
    id: 23_083,
    name: "Brimstone chest",
    aliases: ["brimstone chest", "brimstone"],
    table: BrimstoneChestTable,
});
