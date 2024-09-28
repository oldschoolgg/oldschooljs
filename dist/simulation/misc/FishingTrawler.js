"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishingTrawler = FishingTrawler;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const itemID_1 = __importDefault(require("../../util/itemID"));
const util_1 = require("../../util/util");
const trawlerFish = [
    {
        id: (0, itemID_1.default)("Raw shrimps"),
        level: 1,
        xp: 10,
    },
    {
        id: (0, itemID_1.default)("Raw sardine"),
        level: 5,
        xp: 20,
    },
    {
        id: (0, itemID_1.default)("Raw anchovies"),
        level: 15,
        xp: 40,
    },
    {
        id: (0, itemID_1.default)("Raw tuna"),
        level: 35,
        xp: 80,
    },
    {
        id: (0, itemID_1.default)("Raw lobster"),
        level: 40,
        xp: 90,
    },
    {
        id: (0, itemID_1.default)("Raw swordfish"),
        level: 50,
        xp: 100,
    },
    {
        id: (0, itemID_1.default)("Raw shark"),
        level: 76,
        xp: 110,
    },
    {
        id: (0, itemID_1.default)("Raw sea turtle"),
        level: 79,
        xp: 38,
    },
    {
        id: (0, itemID_1.default)("Raw manta ray"),
        level: 81,
        xp: 46,
    },
];
const RawJunkTable = new LootTable_1.default()
    .add("Broken arrow")
    .add("Broken glass")
    .add("Broken staff")
    .add("Buttons")
    .add("Damaged armour")
    .add("Old boot")
    .add("Oyster")
    .add("Pot")
    .add("Rusty sword");
const JunkTable = new LootTable_1.default().add(RawJunkTable, [0, 1]).add(RawJunkTable, [0, 1]);
const anglerOutfit = ["Angler hat", "Angler top", "Angler waders", "Angler boots"].map(itemID_1.default);
function FishingTrawler(fishingLevel, hasEliteArd, bank) {
    const loot = new Bank_1.default();
    if ((0, e_1.roll)(5000)) {
        loot.add("Heron");
    }
    if ((0, e_1.roll)(8)) {
        for (const item of anglerOutfit) {
            if (!bank || !bank.has(item)) {
                loot.add(item);
                break;
            }
        }
    }
    loot.add(JunkTable.roll());
    const ableToFish = trawlerFish.filter(i => fishingLevel >= i.level);
    let possibleFish = ableToFish.slice(Math.max(ableToFish.length - 5, 0)).reverse();
    let xp = 0;
    const len = possibleFish.length;
    let multiplier = 3;
    for (let i = 0; i < len; i++) {
        const fishToGive = possibleFish[0];
        let qty = Math.floor((0, util_1.randomVariation)((ableToFish.indexOf(fishToGive) + 1) * multiplier, 50));
        if (hasEliteArd) {
            qty = Math.floor(qty * 1.5);
        }
        xp += fishToGive.xp * qty;
        multiplier /= 2;
        loot.add(fishToGive.id, qty);
        possibleFish = possibleFish.filter(i => i !== fishToGive);
        if ((0, e_1.roll)(3))
            break;
    }
    return { loot, xp };
}
