"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TzKalZuk = exports.TzKalZukClass = void 0;
const e_1 = require("e");
const Bank_1 = __importDefault(require("../../../structures/Bank"));
const Monster_1 = __importDefault(require("../../../structures/Monster"));
class TzKalZukClass extends Monster_1.default {
    kill(quantity = 1, options = {}) {
        const loot = new Bank_1.default();
        for (let i = 0; i < quantity; i++) {
            loot.add("Tokkul", 16_440);
            loot.add("Infernal cape");
            if ((0, e_1.roll)(options.onSlayerTask ? 75 : 100)) {
                loot.add("Jal-nib-rek");
            }
        }
        return loot;
    }
}
exports.TzKalZukClass = TzKalZukClass;
exports.TzKalZuk = new TzKalZukClass({
    id: 7706,
    name: "TzKal-Zuk",
    aliases: ["tzkal-zuk", "zuk", "inferno"],
});
