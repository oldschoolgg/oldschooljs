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
    "Cosmic rune": [[15, 218], 4],
    "Nature rune": [[6, 165], 4],
    "Death rune": [[24, 176], 4],
    "Blood rune": [[13, 129], 4],
    "Soul rune": [[12, 126], 4],
    "Adamant arrow": [[32, 533], 3],
    "Rune arrow": [[12, 539], 3],
    Cannonball: [[72, 192], 2],
    "Yew logs": [[14, 121], 4],
    "Magic logs": [[3, 55], 4],
    "Gold ore": [[14, 174], 4],
    Coal: [[16, 253], 4],
    "Mithril ore": [[15, 168], 4],
    "Adamantite ore": [[8, 50], 4],
    "Grimy cadantine": [[1, 14], 4],
    "Grimy torstol": [[1, 16], 4],
    "Uncut emerald": [[1, 41], 3],
    "Uncut ruby": [[2, 35], 3],
    "Snapdragon seed": [[1, 6], 1],
    Shark: [[1, 15], 6],
    Bass: [[1, 18], 6],
    "Prayer potion(3)": [[1, 10], 5],
    "Saradomin brew(3)": [[1, 10], 5],
    "Zamorak brew(3)": [[1, 10], 5],
    "Sanfew serum(3)": [[1, 11], 5],
    Coins: [[2717, 43_854], 2],
};
const nonUniqueItemRanges = (0, bank_1.resolveNameBank)(data);
const NonUniqueTable = new SimpleTable_1.default();
for (const [id, data] of Object.entries(nonUniqueItemRanges)) {
    NonUniqueTable.add(Number.parseInt(id), data[1]);
}
const phosaniData = {
    "Cosmic rune": [[247, 420], 4],
    "Nature rune": [[165, 305], 4],
    "Death rune": [[165, 305], 4],
    "Blood rune": [[343, 765], 4],
    "Soul rune": [[110, 228], 4],
    Cannonball: [[137, 382], 4],
    "Rune arrow": [[412, 957], 3],
    "Mithril ore": [[165, 305], 5],
    Coal: [[220, 458], 4],
    "Gold ore": [[165, 305], 4],
    "Adamantite ore": [[40, 95], 4],
    "Magic logs": [[40, 95], 4],
    "Grimy cadantine": [[13, 26], 4],
    "Grimy torstol": [[13, 26], 4],
    "Snapdragon seed": [[5, 10], 3],
    "Uncut emerald": [[33, 75], 3],
    "Uncut ruby": [[27, 60], 3],
    "Runite ore": [[11, 26], 2],
    Bass: [[16, 29], 6],
    Shark: [[13, 26], 6],
    "Prayer potion(3)": [[8, 15], 5],
    "Sanfew serum(3)": [[6, 12], 5],
    "Saradomin brew(3)": [[8, 15], 5],
    "Zamorak brew(3)": [[8, 15], 5],
    Coins: [[41_417, 72_013], 2],
};
const phosaniNonUniqueItemRanges = (0, bank_1.resolveNameBank)(phosaniData);
const PhosaniNonUniqueTable = new SimpleTable_1.default();
for (const [id, data] of Object.entries(phosaniNonUniqueItemRanges)) {
    PhosaniNonUniqueTable.add(Number.parseInt(id), data[1]);
}
const GearTable = new SimpleTable_1.default()
    .add("Inquisitor's mace")
    .add("Inquisitor's great helm", 2)
    .add("Inquisitor's hauberk", 2)
    .add("Inquisitor's plateskirt", 2)
    .add("Nightmare staff", 3);
const OrbTable = new SimpleTable_1.default().add("Eldritch orb").add("Volatile orb").add("Harmonised orb");
const mvpTertiary = new LootTable_1.default()
    .tertiary(190, "Clue scroll (elite)")
    .tertiary(1900, "Jar of dreams")
    .tertiary(3800, "Little nightmare");
const nonMvpTertiary = new LootTable_1.default()
    .tertiary(200, "Clue scroll (elite)")
    .tertiary(4000, "Little nightmare")
    .tertiary(2000, "Jar of dreams");
const phosaniTertiary = new LootTable_1.default()
    .tertiary(35, "Clue scroll (elite)")
    .tertiary(100, "Slepey tablet")
    .tertiary(200, "Parasitic egg")
    .tertiary(1400, "Little nightmare")
    .tertiary(4000, "Jar of dreams");
class NightmareClass {
    hp = 2400;
    allItems = [
        ...NonUniqueTable.table.map(i => i.item),
        ...GearTable.table.map(i => Number(i.item)),
        ...OrbTable.table.map(i => Number(i.item)),
        ...mvpTertiary.allItems,
        ...nonMvpTertiary.allItems,
    ];
    rollNonUniqueLoot(percentage, isMvp, isPhosani) {
        const [table, ranges] = isPhosani
            ? [PhosaniNonUniqueTable, phosaniNonUniqueItemRanges]
            : [NonUniqueTable, nonUniqueItemRanges];
        const item = table.roll();
        const [range] = ranges[item];
        if (isPhosani) {
            return [item, (0, e_1.randInt)(range[0], range[1])];
        }
        let quantity = range[0];
        quantity += (0, e_1.calcPercentOfNum)(percentage, range[1]) - range[0];
        if (isMvp)
            quantity *= 1.1;
        quantity = Math.floor(Math.max(quantity, range[0]));
        return [item, quantity];
    }
    kill(options) {
        const mvp = options.team.sort((a, b) => b.damageDone - a.damageDone)[0];
        const parsedTeam = options.team.map(teamMember => ({
            ...teamMember,
            percentDamage: Math.floor((0, e_1.calcWhatPercent)(teamMember.damageDone, this.hp)),
            scaledPercentDamage: Math.floor((0, e_1.calcWhatPercent)(teamMember.damageDone, this.hp / options.team.length)),
            mvp: mvp === teamMember,
        }));
        const lootResult = {};
        for (const teamMember of parsedTeam) {
            lootResult[teamMember.id] = new Bank_1.default();
        }
        if (options.isPhosani) {
            if ((0, e_1.roll)(143)) {
                lootResult[options.team[0].id].add(GearTable.roll());
            }
            if ((0, e_1.roll)(533)) {
                lootResult[options.team[0].id].add(OrbTable.roll());
            }
        }
        else {
            const WeightedUniqueTable = new SimpleTable_1.default();
            for (const teamMember of parsedTeam) {
                WeightedUniqueTable.add(teamMember.id, teamMember.percentDamage);
            }
            function giveWeightedDrop(item) {
                const recipient = WeightedUniqueTable.roll();
                lootResult[recipient].add(item);
            }
            if ((0, e_1.roll)(84)) {
                giveWeightedDrop(GearTable.roll());
            }
            if ((0, e_1.roll)(320)) {
                giveWeightedDrop(OrbTable.roll());
            }
            const secondRollChance = Math.min(75, parsedTeam.length - 5);
            if (secondRollChance > 0 && (0, e_1.percentChance)(secondRollChance)) {
                if ((0, e_1.roll)(320)) {
                    giveWeightedDrop(OrbTable.roll());
                }
                if ((0, e_1.roll)(84)) {
                    giveWeightedDrop(GearTable.roll());
                }
            }
        }
        for (const teamMember of parsedTeam) {
            if (lootResult[teamMember.id].length === 0) {
                lootResult[teamMember.id].add(...this.rollNonUniqueLoot(teamMember.scaledPercentDamage, teamMember.mvp, options.isPhosani));
            }
            lootResult[teamMember.id].add(teamMember.mvp ? "Big bones" : "Bones");
            lootResult[teamMember.id].add(options.isPhosani
                ? phosaniTertiary.roll()
                : teamMember.mvp
                    ? mvpTertiary.roll()
                    : nonMvpTertiary.roll());
        }
        return lootResult;
    }
}
const Nightmare = new NightmareClass();
exports.default = Nightmare;
