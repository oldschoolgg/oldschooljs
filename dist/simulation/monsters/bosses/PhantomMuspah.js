"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const RareDropTable_1 = __importDefault(require("../../subtables/RareDropTable"));
const TreeHerbSeedTable_1 = __importDefault(require("../../subtables/TreeHerbSeedTable"));
const UniquePhantomMuspahTable = new LootTable_1.default()
    .add("Ancient essence", [540, 599], 60)
    .add("Ancient essence", [885, 995], 23)
    .add("Ancient essence", [1970, 2060], 10)
    .add("Frozen cache", 1, 4)
    .add("Ancient icon", 1, 2)
    .add("Venator shard", 1, 1);
const FoodAndPotions = new LootTable_1.default()
    .every(new LootTable_1.default().add("Shark", [4, 6]).add("Summer pie", [4, 6]))
    .every(new LootTable_1.default().add("Ancient brew(3)", [1, 2]).add("Super restore(3)", [2, 3]))
    .every(new LootTable_1.default().add("Ranging potion(3)", [1, 2]).add("Prayer potion(3)", [2, 3]));
const MoreHerbs = new LootTable_1.default()
    .add("Grimy kwuarm", 6, 5)
    .add("Grimy cadantine", 6, 4)
    .add("Grimy dwarf weed", 6, 4)
    .add("Grimy lantadyme", 6, 3);
const NormalPhantomMuspahTable = new LootTable_1.default()
    .add("Rune kiteshield", 3, 10)
    .add("Dragon plateskirt", 1, 5)
    .add("Rune platelegs", 3, 5)
    .add("Black d'hide body", 1, 5)
    .add("Dragon platelegs", 2, 4)
    .add("Rune sword", 1, 1)
    .add("Law rune", 146, 10)
    .add("Soul rune", 466, 10)
    .add("Death rune", 428, 10)
    .add("Smoke rune", 314, 10)
    .add("Chaos rune", 480, 5)
    .add("Fire rune", 1964, 5)
    .add("Cannonball", 666, 5)
    .add("Grimy toadflax", 55, 3)
    .add(MoreHerbs, 1, 5)
    .add("Yew seed", 2, 5)
    .add("Torstol seed", 4, 5)
    .add("Palm tree seed", 2, 5)
    .add("Ranarr seed", 3, 5)
    .add("Snapdragon seed", 5, 4)
    .add("Ranarr seed", 8, 3)
    .add("Spirit seed", 1, 2)
    .add(TreeHerbSeedTable_1.default, 3, 5, { multiply: true })
    .add("Adamantite ore", 22, 10)
    .add("Gold ore", 180, 10)
    .add("Teak plank", 22, 10)
    .add("Molten glass", 89, 10)
    .add("Pure essence", 2314, 5)
    .add("Coal", 163, 5)
    .add("Runite ore", 18, 3)
    .add("Silver ore", 101, 2)
    .add("Manta ray", 28, 10)
    .add("Water orb", 21, 10)
    .add("Dragon bolts (unf)", 89, 10)
    .add("Limpwurt root", 21, 3)
    .add(RareDropTable_1.default, 1, 5);
const TotalPhantomMuspahTable = new LootTable_1.default()
    .every(UniquePhantomMuspahTable, 1)
    .every(new LootTable_1.default().add(NormalPhantomMuspahTable, 1, 7).add(FoodAndPotions, 1, 2), 1)
    .every(NormalPhantomMuspahTable)
    .tertiary(40, "Clue scroll (hard)")
    .tertiary(50, "Clue scroll (elite)")
    .tertiary(2500, "Muphin");
exports.default = new SimpleMonster_1.default({
    id: 12_077,
    name: "Phantom Muspah",
    table: TotalPhantomMuspahTable,
    aliases: ["phantom muspah", "muspah", "money slug"],
});
