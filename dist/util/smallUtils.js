"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKMB = toKMB;
exports.fromKMB = fromKMB;
const e_1 = require("e");
function toKMB(number) {
    if (number > 999_999_999 || number < -999_999_999) {
        return `${(0, e_1.round)(number / 1_000_000_000)}b`;
    }
    else if (number > 999_999 || number < -999_999) {
        return `${(0, e_1.round)(number / 1_000_000)}m`;
    }
    else if (number > 999 || number < -999) {
        return `${(0, e_1.round)(number / 1000)}k`;
    }
    return (0, e_1.round)(number).toString();
}
function fromKMB(number) {
    number = number.toLowerCase().replace(/,/g, "");
    const [numberBefore, numberAfter] = number.split(/[.kmb]/g);
    let newNum = numberBefore;
    if (number.includes("b")) {
        newNum += numberAfter + "0".repeat(9).slice(numberAfter.length);
    }
    else if (number.includes("m")) {
        newNum += numberAfter + "0".repeat(6).slice(numberAfter.length);
    }
    else if (number.includes("k")) {
        newNum += numberAfter + "0".repeat(3).slice(numberAfter.length);
    }
    return Number.parseInt(newNum);
}
