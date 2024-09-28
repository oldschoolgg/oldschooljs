"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwakenedVardorvis = void 0;
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const Vardorvis_1 = require("./Vardorvis");
class AwakenedVardorvisSingleton extends Monster_1.default {
    kill(quantity = 1, options = {}) {
        return Vardorvis_1.Vardorvis.kill(quantity, { ...options, isAwakened: true });
    }
}
exports.AwakenedVardorvis = new AwakenedVardorvisSingleton({
    id: 12_224,
    name: "Vardorvis (Awakened)",
    aliases: ["vardorvis (awakened)"],
});
