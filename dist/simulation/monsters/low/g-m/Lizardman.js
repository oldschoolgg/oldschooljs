"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const CommonSeedDropTable_1 = __importDefault(require("../../../subtables/CommonSeedDropTable"));
const LizardmanTable = new LootTable_1.default({ limit: 78 })
    .every("Bones")
    .add(CommonSeedDropTable_1.default, 1, 15)
    .add("Lizardman fang", 1, 14)
    .add("Xerician fabric", 1, 8)
    .oneIn(125, "Xeric's talisman(inert)");
exports.default = new SimpleMonster_1.default({
    id: 6914,
    name: "Lizardman",
    table: LizardmanTable,
    aliases: ["lizardman"],
});
