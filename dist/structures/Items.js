"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.USELESS_ITEMS = exports.CLUE_SCROLL_NAMES = exports.CLUE_SCROLLS = exports.itemNameMap = void 0;
const item_data_json_1 = __importDefault(require("../data/items/item_data.json"));
const cleanString_1 = require("../util/cleanString");
const Collection_1 = __importDefault(require("./Collection"));
const items = item_data_json_1.default;
exports.itemNameMap = new Map();
exports.CLUE_SCROLLS = [
    2677, 2801, 2722, 12_073, 19_835, 23_182,
];
exports.CLUE_SCROLL_NAMES = [
    "Clue scroll (beginner)",
    "Clue scroll (easy)",
    "Clue scroll (medium)",
    "Clue scroll (hard)",
    "Clue scroll (elite)",
    "Clue scroll (master)",
];
exports.USELESS_ITEMS = [
    617, 8890, 6964, 2513, 19_492, 11_071, 11_068, 21_284, 24_735, 21_913, 4703, 4561, 2425, 4692, 3741,
    22_405,
    9045, 9046, 9047, 9048, 9049, 9050, 9051, 13_074, 13_075, 13_076, 13_077, 13_078, 16_176, 21_445, 21_446, 26_948,
    26_950, 26_945,
    10_639, 10_641, 10_644, 10_646, 10_647, 10_648, 10_649, 10_651, 10_652, 10_654, 10_657, 10_658, 10_659, 10_661,
    27_794, 27_795, 27_796, 27_797, 27_798, 27_799, 27_800, 27_801,
    3550, 3577, 2793, 12_113, 10_184, 12_027,
    23_814, 23_815, 23_816, 23_817,
];
class Items extends Collection_1.default {
    get(item) {
        const id = this.resolveID(item);
        if (typeof id === "undefined")
            return undefined;
        return super.get(id);
    }
    resolveID(input) {
        if (typeof input === "number") {
            return input;
        }
        if (typeof input === "string") {
            const cleanName = (0, cleanString_1.cleanString)(input);
            return exports.itemNameMap.get(cleanName);
        }
        return undefined;
    }
}
const itemsExport = new Items();
for (const [id, item] of Object.entries(items)) {
    const numID = Number.parseInt(id);
    if (exports.USELESS_ITEMS.includes(numID))
        continue;
    itemsExport.set(numID, item);
    const cleanName = (0, cleanString_1.cleanString)(item.name);
    if (!exports.itemNameMap.has(cleanName))
        exports.itemNameMap.set(cleanName, numID);
}
exports.default = itemsExport;
