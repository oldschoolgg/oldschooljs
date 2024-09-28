"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../structures/SimpleMonster"));
const Nechryael_1 = require("../low/n-s/Nechryael");
const NechryarchTable = new LootTable_1.default()
    .every("Malicious ashes")
    .every(Nechryael_1.NechryaelPreTable, 3)
    .tertiary(13, "Clue scroll (hard)")
    .tertiary(124, "Mist battlestaff")
    .tertiary(124, "Dust battlestaff")
    .tertiary(433, "Eternal gem")
    .tertiary(434, "Imbued heart");
exports.default = new SimpleMonster_1.default({
    id: 7411,
    name: "Nechryarch",
    table: NechryarchTable,
    aliases: ["nechryarch"],
});
