"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwakenedDukeSucellus = void 0;
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const DukeSucellus_1 = require("./DukeSucellus");
class AwakenedDukeSucellusSingleton extends Monster_1.default {
    kill(quantity = 1, options = {}) {
        return DukeSucellus_1.DukeSucellus.kill(quantity, { ...options, isAwakened: true });
    }
}
exports.AwakenedDukeSucellus = new AwakenedDukeSucellusSingleton({
    id: 12_192,
    name: "Duke Sucellus (Awakened)",
    aliases: ["duke sucellus (awakened)"],
});
