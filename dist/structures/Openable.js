"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Openable {
    id;
    name;
    aliases;
    allItems;
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.aliases = options.aliases ?? [];
        this.allItems = options.allItems ?? [];
    }
}
exports.default = Openable;
