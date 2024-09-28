"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TzTokJadClass = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../../structures/Bank"));
const Monster_1 = __importDefault(require("../../../structures/Monster"));
class TzTokJadClass extends Monster_1.default {
    kill(quantity = 1, options = {}) {
        const loot = new Bank_1.default();
        for (let i = 0; i < quantity; i++) {
            loot.add("Tokkul", 8032);
            loot.add("Fire cape");
            if ((0, e_1.roll)(options.onSlayerTask ? 100 : 200)) {
                loot.add("Tzrek-jad");
            }
        }
        return loot;
    }
}
exports.TzTokJadClass = TzTokJadClass;
const TzTokJad = new TzTokJadClass({
    id: 3127,
    name: "TzTok-Jad",
    aliases: ["tztok-jad", "jad", "tztok jad"],
});
exports.default = TzTokJad;
