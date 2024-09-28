"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../structures/Bank"));
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
const SimpleTable_1 = __importDefault(require("../../structures/SimpleTable"));
const bank_1 = require("../../util/bank");
const data = {
    "Blood rune": [[95, 480], 1],
    "Cosmic rune": [[304, 926], 1],
    "Death rune": [[201, 830], 1],
    "Law rune": [[177, 770], 1],
    "Soul rune": [[57, 388], 1],
    "Nature rune": [[1, 842], 1],
    "Silver ore": [[102, 800], 3],
    "Gold ore": [[129, 721], 3],
    "Steel bar": [[78, 534], 3],
    "Mithril bar": [[56, 459], 3],
    "Mithril ore": [[56, 387], 2],
    "Adamantite ore": [[63, 289], 2],
    "Runite ore": [[3, 26], 2],
    "Adamantite bar": [[17, 103], 2],
    "Runite bar": [[3, 24], 2],
    "Uncut diamond": [[2, 19], 2],
    "Uncut dragonstone": [[1, 11], 2],
    "Onyx bolt tips": [[4, 38], 2],
    Coal: [[169, 815], 1],
    "Pure essence": [[784, 4422], 1],
};
const nonUniqueItemRanges = (0, bank_1.resolveNameBank)(data);
const NonUniqueTable = new SimpleTable_1.default();
for (const [id, data] of Object.entries(nonUniqueItemRanges)) {
    NonUniqueTable.add(Number.parseInt(id), data[1]);
}
const toolSeedTable = new LootTable_1.default().tertiary(40, "Uncut onyx").every("Crystal tool seed");
const tertiaryTable = new LootTable_1.default()
    .tertiary(2250, "Smolcano")
    .tertiary(200, toolSeedTable)
    .tertiary(1125, "Zalcano shard");
class ZalcanoClass {
    allItems = [...tertiaryTable.allItems, ...NonUniqueTable.table.map(i => i.item)];
    rollNonUniqueLoot(perfPercent, isMVP) {
        const item = NonUniqueTable.roll();
        const [range] = nonUniqueItemRanges[item];
        let quantity = range[0];
        quantity += (0, e_1.calcPercentOfNum)(perfPercent, range[1]) - range[0];
        if (isMVP)
            quantity *= 1.1;
        quantity = Math.floor(Math.max(quantity, range[0]));
        return [item, quantity];
    }
    kill({ team }) {
        const lootResult = {};
        for (const teamMember of team) {
            const loot = new Bank_1.default();
            loot.add(...this.rollNonUniqueLoot(teamMember.performancePercentage, teamMember.isMVP));
            if (teamMember.isMVP) {
                loot.add("Infernal ashes");
                loot.add("Crystal shard", 3);
            }
            else {
                loot.add("Crystal shard", 2);
            }
            loot.add(tertiaryTable.roll());
            lootResult[teamMember.id] = loot;
        }
        return lootResult;
    }
}
const Zalcano = new ZalcanoClass();
exports.default = Zalcano;
