"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mimeOutfit = exports.zombieOutfit = exports.lederhosenOutfit = exports.camoOutfit = exports.beekeeperOutfit = exports.allTeamCapes = void 0;
const util_1 = require("../util/util");
exports.allTeamCapes = [];
for (let i = 1; i < 51; i++) {
    exports.allTeamCapes.push((0, util_1.getItemOrThrow)(`Team-${i} cape`));
}
exports.beekeeperOutfit = (0, util_1.resolveItems)([
    "Beekeeper's hat",
    "Beekeeper's top",
    "Beekeeper's legs",
    "Beekeeper's gloves",
    "Beekeeper's boots",
]);
exports.camoOutfit = (0, util_1.resolveItems)(["Camo helmet", "Camo top", "Camo bottoms"]);
exports.lederhosenOutfit = (0, util_1.resolveItems)(["Lederhosen hat", "Lederhosen top", "Lederhosen shorts"]);
exports.zombieOutfit = (0, util_1.resolveItems)([
    "Zombie mask",
    "Zombie shirt",
    "Zombie trousers",
    "Zombie gloves",
    "Zombie boots",
]);
exports.mimeOutfit = (0, util_1.resolveItems)(["Mime mask", "Mime top", "Mime legs", "Mime gloves", "Mime boots"]);
