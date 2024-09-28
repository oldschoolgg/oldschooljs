"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwakenedTheLeviathan = void 0;
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const TheLeviathan_1 = require("./TheLeviathan");
class AwakenedTheLeviathanSingleton extends Monster_1.default {
    kill(quantity = 1, options = {}) {
        return TheLeviathan_1.TheLeviathan.kill(quantity, { ...options, isAwakened: true });
    }
}
exports.AwakenedTheLeviathan = new AwakenedTheLeviathanSingleton({
    id: 12_215,
    name: "The Leviathan (Awakened)",
    aliases: ["the leviathan (awakened)"],
});
