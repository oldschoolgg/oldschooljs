"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clue {
    table;
    allItems;
    constructor(options) {
        this.table = options.table;
        this.allItems = options.table.allItems;
    }
}
exports.default = Clue;
