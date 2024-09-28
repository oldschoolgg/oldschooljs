"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterSack = exports.ExpertSack = exports.AdeptSack = exports.BasicSack = void 0;
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleOpenable_1 = __importDefault(require("../../structures/SimpleOpenable"));
const SackLogTable = new LootTable_1.default()
    .add("Maple logs", 4)
    .add("Yew logs", 4)
    .add("Teak logs", 4)
    .add("Mahogany logs", 4)
    .add("Magic logs", 4);
const SackHerbTable = new LootTable_1.default()
    .add("Grimy harralander", 4)
    .add("Grimy irit leaf", 4)
    .add("Grimy avantoe", 4)
    .add("Grimy ranarr weed", 4)
    .add("Grimy cadantine", 4)
    .add("Grimy kwuarm", 4)
    .add("Grimy lantadyme", 4);
const BasicSackTable = new LootTable_1.default()
    .add("Quetzal feed", 1)
    .add("Coins", [750, 1_250])
    .add("Hunter spear tips", [15, 30])
    .add("Blessed bone shards", [100, 200])
    .add("Raw kyatt", 2)
    .add("Raw pyre fox", 3)
    .add(SackLogTable);
const BSackTable = new LootTable_1.default().every(BasicSackTable, 5);
const AdeptSackTable = new LootTable_1.default()
    .add("Quetzal feed", 1)
    .add("Coins", [750, 1_250])
    .add("Hunter spear tips", [15, 30])
    .add("Blessed bone shards", [100, 200])
    .add("Raw kyatt", 2)
    .add("Raw pyre fox", 3)
    .add(5_075, 1)
    .add(5_075, [2, 3])
    .add("Raw sunlight antelope", 2)
    .add("Sun-kissed bones", 2)
    .add(SackLogTable)
    .add(SackHerbTable);
const ASackTable = new LootTable_1.default().every(AdeptSackTable, 7);
const ExpertSackTable = new LootTable_1.default()
    .add("Quetzal feed", 1)
    .add("Coins", [750, 1_250])
    .add("Coins", [2_500, 3_500])
    .add("Hunter spear tips", [15, 30])
    .add("Blessed bone shards", [100, 200])
    .add("Raw kyatt", 2)
    .add("Raw pyre fox", 3)
    .add(5_075, 1)
    .add(5_075, [2, 3])
    .add("Raw sunlight antelope", 2)
    .add("Raw moonlight antelope", 2)
    .add("Sun-kissed bones", 2)
    .add("Sun-kissed bones", 3)
    .add(SackLogTable)
    .add(SackHerbTable);
const ESackTable = new LootTable_1.default().every(ExpertSackTable, 9);
const MasterSackTable = new LootTable_1.default()
    .add("Quetzal feed", 1)
    .add("Coins", [750, 1_250])
    .add("Coins", [2_500, 3_500])
    .add("Hunter spear tips", [15, 30])
    .add("Blessed bone shards", [100, 200])
    .add("Raw kyatt", 2)
    .add("Raw pyre fox", 3)
    .add(5_075, 1)
    .add(5_075, [2, 3])
    .add("Raw sunlight antelope", 2)
    .add("Raw moonlight antelope", 2)
    .add("Sun-kissed bones", 2)
    .add("Sun-kissed bones", 3)
    .add(SackLogTable)
    .add(SackHerbTable);
const MSackTable = new LootTable_1.default().every(MasterSackTable, 11);
exports.BasicSack = new SimpleOpenable_1.default({
    id: 29_242,
    name: "Hunters' loot sack (basic)",
    aliases: ["basic hunter sack", "hunter's loot sack (basic)", "hunters loot sack (basic)"],
    table: BSackTable,
});
exports.AdeptSack = new SimpleOpenable_1.default({
    id: 29_244,
    name: "Hunters' loot sack (adept)",
    aliases: ["adept hunter sack", "hunter's loot sack (adept)", "hunters loot sack (adept)"],
    table: ASackTable,
});
exports.ExpertSack = new SimpleOpenable_1.default({
    id: 29_246,
    name: "Hunters' loot sack (expert)",
    aliases: ["expert hunter sack", "hunter's loot sack (expert)", "hunters loot sack (expert)"],
    table: ESackTable,
});
exports.MasterSack = new SimpleOpenable_1.default({
    id: 29_248,
    name: "Hunters' loot sack (master)",
    aliases: ["master hunter sack", "hunter's loot sack (master)", "hunters loot sack (master)"],
    table: MSackTable,
});
