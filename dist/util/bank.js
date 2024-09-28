"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveNameBank = resolveNameBank;
exports.resolveBank = resolveBank;
exports.addItemToBank = addItemToBank;
exports.fasterResolveBank = fasterResolveBank;
const itemID_1 = __importDefault(require("./itemID"));
function resolveNameBank(nameBank) {
    const newBank = {};
    for (const [name, val] of Object.entries(nameBank)) {
        newBank[(0, itemID_1.default)(name)] = val;
    }
    return newBank;
}
function resolveBank(bank) {
    const newBank = {};
    for (const [nameOrID, val] of Object.entries(bank)) {
        const int = Number(nameOrID);
        const id = Number.isNaN(int) ? (0, itemID_1.default)(nameOrID) : int;
        newBank[id] = val;
    }
    return newBank;
}
function addItemToBank(bank, itemID, amountToAdd = 1) {
    const newBank = { ...bank };
    if (newBank[itemID])
        newBank[itemID] += amountToAdd;
    else
        newBank[itemID] = amountToAdd;
    return newBank;
}
function fasterResolveBank(bank) {
    const firstKey = Object.keys(bank)[0];
    if (!Number.isNaN(Number(firstKey))) {
        return bank;
    }
    return resolveBank(bank);
}
