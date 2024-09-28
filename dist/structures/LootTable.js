"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceNumByPercent = reduceNumByPercent;
exports.randInt = randInt;
exports.randFloat = randFloat;
exports.roll = roll;
exports.isArrayOfItemTuples = isArrayOfItemTuples;
const itemID_1 = __importDefault(require("../util/itemID"));
const Bank_1 = __importDefault(require("./Bank"));
const Items_1 = __importDefault(require("./Items"));
function reduceNumByPercent(value, percent) {
    if (percent <= 0)
        return value;
    return value - value * (percent / 100);
}
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}
function roll(upperLimit) {
    return randInt(1, upperLimit) === 1;
}
function isArrayOfItemTuples(x) {
    return Array.isArray(x[0]);
}
class LootTable {
    length;
    table;
    totalWeight;
    limit;
    oneInItems;
    tertiaryItems;
    everyItems;
    allItems;
    constructor(lootTableOptions = {}) {
        this.table = [];
        this.oneInItems = [];
        this.tertiaryItems = [];
        this.everyItems = [];
        this.length = 0;
        this.totalWeight = 0;
        this.limit = lootTableOptions.limit;
        this.allItems = [];
    }
    clone() {
        const newTable = new LootTable();
        newTable.table = [...this.table];
        newTable.oneInItems = [...this.oneInItems];
        newTable.tertiaryItems = [...this.tertiaryItems];
        newTable.everyItems = [...this.everyItems];
        newTable.length = this.length;
        newTable.totalWeight = this.totalWeight;
        newTable.limit = this.limit;
        newTable.allItems = [...this.allItems];
        return newTable;
    }
    resolveName(name) {
        return (0, itemID_1.default)(name);
    }
    addToAllItems(items) {
        if (Array.isArray(items)) {
            for (const item of items) {
                this.addToAllItems(item);
            }
            return;
        }
        if (items instanceof LootTable) {
            this.allItems = Array.from(new Set(this.allItems.concat(Array.isArray(items) ? items : items.allItems)));
            return;
        }
        if (typeof items === "number") {
            if (this.allItems.includes(items))
                return;
            this.allItems.push(items);
        }
        else {
            this.addToAllItems(items.item);
        }
    }
    oneIn(chance, item, quantity = 1, options) {
        const resolved = typeof item === "string" ? this.resolveName(item) : item;
        this.oneInItems.push({
            item: resolved,
            chance,
            quantity,
            options,
        });
        this.addToAllItems(resolved);
        return this;
    }
    tertiary(chance, item, quantity = 1, options) {
        const resolved = typeof item === "string" ? this.resolveName(item) : item;
        this.tertiaryItems.push({
            item: resolved,
            chance,
            quantity,
            options,
        });
        this.addToAllItems(resolved);
        return this;
    }
    every(item, quantity = 1, options) {
        const resolved = typeof item === "string" ? this.resolveName(item) : item;
        this.everyItems.push({
            item: resolved,
            quantity,
            options,
        });
        this.addToAllItems(resolved);
        return this;
    }
    add(item, quantity = 1, weight = 1, options) {
        if (this.limit && weight + this.totalWeight > this.limit) {
            throw new Error("Loot table total weight exceeds limit");
        }
        if (typeof item === "string") {
            return this.add(this.resolveName(item), quantity, weight, options);
        }
        this.length += 1;
        this.totalWeight += weight;
        this.addToAllItems(item);
        this.table.push({
            item,
            weight,
            quantity,
            options,
        });
        return this;
    }
    roll(quantity = 1, options = {}) {
        const loot = options.targetBank ?? new Bank_1.default();
        const effectiveTertiaryItems = options.tertiaryItemPercentageChanges
            ? this.tertiaryItems.map(i => {
                if (typeof i.item !== "number")
                    return i;
                if (i.options?.freeze === true)
                    return i;
                const change = options.tertiaryItemPercentageChanges?.get(Items_1.default.get(i.item).name);
                if (!change)
                    return i;
                return {
                    ...i,
                    chance: Math.ceil(reduceNumByPercent(i.chance, change)),
                };
            })
            : this.tertiaryItems;
        outerLoop: for (let i = 0; i < quantity; i++) {
            for (const item of this.everyItems) {
                this.addResultToLoot(item, loot);
            }
            for (const { chance, item, quantity, options } of effectiveTertiaryItems) {
                if (roll(chance)) {
                    this.addResultToLoot({ item, quantity, options }, loot);
                }
            }
            for (const { chance, item, quantity, options } of this.oneInItems) {
                if (roll(chance)) {
                    this.addResultToLoot({ item, quantity, options }, loot);
                    continue outerLoop;
                }
            }
            const randomWeight = randFloat(0, this.limit || this.totalWeight);
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
            const chosenItem = this.table[result];
            if (chosenItem) {
                this.addResultToLoot(chosenItem, loot);
            }
        }
        if (options.targetBank)
            return null;
        return loot;
    }
    addResultToLoot(result, loot) {
        if (!result)
            return;
        const { item, quantity, options } = result;
        if (typeof item === "number") {
            loot.add(item, this.determineQuantity(quantity));
            return;
        }
        if (item instanceof LootTable) {
            const qty = this.determineQuantity(quantity);
            if (options?.multiply)
                loot.add(item.roll(1).multiply(qty));
            else
                item.roll(qty, { targetBank: loot });
            return;
        }
    }
    determineQuantity(quantity) {
        if (Array.isArray(quantity)) {
            return randInt(quantity[0], quantity[1]);
        }
        return quantity;
    }
}
exports.default = LootTable;
