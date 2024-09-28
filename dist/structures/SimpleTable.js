"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const e_1 = require("e");
class SimpleTable {
    length;
    table;
    totalWeight;
    constructor() {
        this.table = [];
        this.length = 0;
        this.totalWeight = 0;
    }
    add(item, weight = 1) {
        this.length += 1;
        this.totalWeight += weight;
        this.table.push({
            item,
            weight,
        });
        return this;
    }
    delete(item) {
        const tableItem = this.table.find(_tableItem => _tableItem.item === item);
        if (!tableItem) {
            throw `${item} doesn't exist in this SimpleTable.`;
        }
        this.length -= 1;
        this.totalWeight -= tableItem.weight;
        this.table = this.table.filter(_item => _item !== tableItem);
        return this;
    }
    roll() {
        const randomWeight = (0, e_1.randInt)(1, this.totalWeight);
        let result = -1;
        let weight = 0;
        for (let i = 0; i < this.table.length; i++) {
            const item = this.table[i];
            weight += item.weight;
            if (randomWeight <= weight) {
                result = i;
                break;
            }
        }
        return this.table[result].item;
    }
}
exports.default = SimpleTable;
