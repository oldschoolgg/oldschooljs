"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = itemID;
const Items_1 = __importDefault(require("../structures/Items"));
function itemID(name) {
    const item = Items_1.default.get(name);
    if (!item) {
        throw new Error(`ERROR: ${JSON.stringify(name)} doesnt exist.`);
    }
    return item.id;
}
