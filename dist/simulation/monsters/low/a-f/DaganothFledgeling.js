"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
const DagannothFledgeling = new LootTable_1.default().every("Bones");
exports.default = new SimpleMonster_1.default({
    id: 2264,
    name: "Dagannoth fledgeling",
    table: DagannothFledgeling,
    aliases: ["dagannoth fledgeling"],
});
