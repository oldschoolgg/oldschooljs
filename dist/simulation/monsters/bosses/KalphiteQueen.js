"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../subtables/RareDropTable"));
const KqConsumablesTable = new LootTable_1.default()
    .add("Monkfish", 3, 1)
    .add("Shark", 2, 1)
    .add("Dark crab", 2, 1)
    .add("Saradomin brew(4)", 1, 1)
    .add("Prayer potion(4)", 2, 1)
    .add("Super restore(4)", 1, 1)
    .add("Super combat potion(2)", 1, 1)
    .add("Ranging potion(3)", 1, 1)
    .add("Superantipoison(2)", 1, 1);
const KalphiteQueenTable = new LootTable_1.default({ limit: 256 })
    .every(KqConsumablesTable)
    .add("Battlestaff", 10, 10)
    .add("Rune chainbody", 1, 9)
    .add("Red d'hide body", 1, 8)
    .add("Rune knife(p++)", 25, 8)
    .add("Lava battlestaff", 1, 4)
    .add("Dragon chainbody", 1, 2)
    .add("Dragon 2h sword", 1, 1)
    .add("Death rune", 150, 12)
    .add("Blood rune", 100, 12)
    .add("Mithril arrow", 500, 10)
    .add("Rune arrow", 250, 6)
    .add("Grimy toadflax", 25, 4)
    .add("Grimy ranarr weed", 25, 4)
    .add("Grimy snapdragon", 25, 4)
    .add("Grimy torstol", 25, 4)
    .add("Torstol seed", 2, 8)
    .add("Watermelon seed", 25, 6)
    .add("Papaya tree seed", 2, 6)
    .add("Palm tree seed", 2, 6)
    .add("Magic seed", 2, 6)
    .add("Runite bar", 3, 10)
    .add("Bucket of sand", 100, 8)
    .add("Gold ore", 250, 8)
    .add("Magic logs", 60, 8)
    .add("Uncut emerald", 25, 6)
    .add("Uncut ruby", 25, 6)
    .add("Uncut diamond", 25, 6)
    .add("Wine of zamorak", 60, 20)
    .add("Potato cactus", 100, 16)
    .add("Coins", [15_000, 20_000], 10)
    .add("Grapes", 100, 10)
    .add("Weapon poison(++)", 5, 10)
    .add("Cactus spine", 10, 6)
    .add(RareDropTable_1.default, 1, 2)
    .tertiary(20, "Ensouled kalphite head")
    .tertiary(100, "Clue scroll (elite)")
    .tertiary(128, "Kq head")
    .tertiary(400, "Dragon pickaxe")
    .tertiary(2000, "Jar of sand")
    .tertiary(3000, "Kalphite princess");
exports.default = new SimpleMonster_1.default({
    id: 963,
    name: "Kalphite Queen",
    table: KalphiteQueenTable,
    aliases: ["kalphite queen", "kq"],
});
