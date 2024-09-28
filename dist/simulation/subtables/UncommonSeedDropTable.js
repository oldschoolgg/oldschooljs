"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const UncommonSeedDropTable = new LootTable_1.default()
    .add("Limpwurt seed", 1, 137)
    .add("Strawberry seed", 1, 131)
    .add("Marrentill seed", 1, 125)
    .add("Jangerberry seed", 1, 92)
    .add("Tarromin seed", 1, 85)
    .add("Wildblood seed", 1, 83)
    .add("Watermelon seed", 1, 63)
    .add("Harralander seed", 1, 56)
    .add("Snape grass seed", 1, 40)
    .add("Ranarr seed", 1, 39)
    .add("Whiteberry seed", 1, 34)
    .add("Mushroom spore", 1, 29)
    .add("Toadflax seed", 1, 27)
    .add("Belladonna seed", 1, 18)
    .add("Irit seed", 1, 18)
    .add("Poison ivy seed", 1, 13)
    .add("Avantoe seed", 1, 12)
    .add("Cactus seed", 1, 12)
    .add("Kwuarm seed", 1, 9)
    .add("Potato cactus seed", 1, 8)
    .add("Snapdragon seed", 1, 5)
    .add("Cadantine seed", 1, 4)
    .add("Lantadyme seed", 1, 3)
    .add("Dwarf weed seed", 1, 2)
    .add("Torstol seed", 1, 1);
exports.default = UncommonSeedDropTable;
