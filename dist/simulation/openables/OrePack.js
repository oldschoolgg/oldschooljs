"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolcanicMineOrePack = exports.GiantsFoundryOrePack = void 0;
const e_1 = require("e");
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const GiantsFoundryOrePackTable = new LootTable_1.default()
    .add("Coal", 1, 181)
    .add("Iron ore", 1, 25)
    .add("Mithril ore", 1, 17)
    .add("Adamantite ore", 1, 3)
    .add("Runite ore", 1, 1);
const GFOrePackTable = new LootTable_1.default().every(GiantsFoundryOrePackTable, 30);
exports.GiantsFoundryOrePack = new SimpleOpenable_1.default({
    id: 27_019,
    name: "Ore pack (Giant's Foundry)",
    aliases: ["ore pack (giant's foundry)", "giants", "foundry", "giants foundry"],
    table: GFOrePackTable,
});
const VolcanicMineMOrePackTable = new LootTable_1.default()
    .add("Iron ore", 1, 50)
    .add("Coal", 1, 15)
    .add("Silver ore", 1, 13)
    .add("Gold ore", 1, 11)
    .add("Mithril ore", 1, 9)
    .add("Adamantite ore", 1, 4)
    .add("Runite ore", 1, 1);
const VMOrePackTable = new LootTable_1.default()
    .oneIn(100, "Dragon pickaxe (broken)")
    .every(VolcanicMineMOrePackTable, (0, e_1.randInt)(38, 50));
exports.VolcanicMineOrePack = new SimpleOpenable_1.default({
    id: 27_693,
    name: "Ore pack (Volcanic Mine)",
    aliases: ["ore pack (volcanic mine)", "volcanic", "volcanic mine"],
    table: VMOrePackTable,
});
