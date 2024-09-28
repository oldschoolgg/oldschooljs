"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = __importDefault(require("./Bank"));
const Openable_1 = __importDefault(require("./Openable"));
class SimpleOpenable extends Openable_1.default {
    table;
    constructor(options) {
        super({ ...options, allItems: options.table.allItems });
        this.table = options.table;
    }
    open(quantity = 1) {
        const loot = new Bank_1.default();
        for (let i = 0; i < quantity; i++) {
            loot.add(this.table.roll());
        }
        return loot;
    }
}
exports.default = SimpleOpenable;
