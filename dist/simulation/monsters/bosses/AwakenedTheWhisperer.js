"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwakenedTheWhisperer = void 0;
const Monster_1 = __importDefault(require("../../../structures/Monster"));
const TheWhisperer_1 = require("./TheWhisperer");
class AwakenedTheWhispererSingleton extends Monster_1.default {
    kill(quantity = 1, options = {}) {
        return TheWhisperer_1.TheWhisperer.kill(quantity, { ...options, isAwakened: true });
    }
}
exports.AwakenedTheWhisperer = new AwakenedTheWhispererSingleton({
    id: 12_205,
    name: "The Whisperer (Awakened)",
    aliases: ["awakened whisperer", "the whisperer (awakened)"],
});
