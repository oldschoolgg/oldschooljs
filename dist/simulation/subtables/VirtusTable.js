"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtusTable = void 0;
const LootTable_1 = __importDefault(require("../../structures/LootTable"));
exports.VirtusTable = new LootTable_1.default().add("Virtus mask").add("Virtus robe top").add("Virtus robe bottom");
