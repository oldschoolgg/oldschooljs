"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpTable = void 0;
const LootTable_1 = __importDefault(require("../../../../structures/LootTable"));
const SimpleMonster_1 = __importDefault(require("../../../../structures/SimpleMonster"));
exports.ImpTable = new LootTable_1.default()
    .tertiary(5000, "Imp champion scroll")
    .tertiary(25, "Ensouled imp head")
    .every("Fiendish ashes")
    .add("Black bead", 1, 5)
    .add("Red bead", 1, 5)
    .add("White bead", 1, 5)
    .add("Yellow bead", 1, 5)
    .add("Bronze bolts", 1, 8)
    .add("Blue wizard hat", 1, 8)
    .add("Egg", 1, 5)
    .add("Raw chicken", 1, 5)
    .add("Burnt bread", 1, 4)
    .add("Burnt meat", 1, 4)
    .add("Cabbage", 1, 2)
    .add("Bread dough", 1, 2)
    .add("Bread", 1, 1)
    .add("Cooked meat", 1, 1)
    .add("Hammer", 1, 8)
    .add("Tinderbox", 1, 5)
    .add("Shears", 1, 4)
    .add("Bucket", 1, 4)
    .add("Bucket of water", 1, 2)
    .add("Jug", 1, 2)
    .add("Jug of water", 1, 2)
    .add("Pot", 1, 2)
    .add("Pot of flour", 1, 2)
    .add("Ball of wool", 1, 8)
    .add("Mind talisman", 1, 7)
    .add("Ashes", 1, 6)
    .add("Clay", 1, 4)
    .add("Cadava berries", 1, 4)
    .add("Grain", 1, 3)
    .add("Chef's hat", 1, 2)
    .add("Flyer", 1, 2)
    .add("Potion", 1, 1);
exports.default = new SimpleMonster_1.default({
    id: 5007,
    name: "Imp",
    table: exports.ImpTable,
    aliases: ["imp"],
});
