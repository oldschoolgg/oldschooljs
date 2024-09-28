"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanString = cleanString;
function cleanString(str) {
    return str.replace(/\s/g, "").toUpperCase();
}
