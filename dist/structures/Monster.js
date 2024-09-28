"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const monsters_data_json_1 = __importDefault(require("../data/monsters_data.json"));
const monsterData = monsters_data_json_1.default;
class Monster {
    id;
    name;
    aliases;
    data;
    allItems;
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.aliases = options.aliases ?? [];
        this.data = monsterData[this.id];
        this.allItems = options.allItems ?? [];
        const pluralName = `${this.name.toLowerCase()}s`;
        if (!this.aliases.includes(pluralName)) {
            this.aliases.push(pluralName);
        }
    }
}
exports.default = Monster;
