"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const e_1 = require("e");
const itemID_1 = __importDefault(require("../util/itemID"));
const smallUtils_1 = require("../util/smallUtils");
const Items_1 = __importDefault(require("./Items"));
const frozenErrorStr = "Tried to mutate a frozen Bank.";
const isValidInteger = (str) => /^-?\d+$/.test(str);
function isValidBankQuantity(qty) {
    return typeof qty === "number" && qty >= 1 && Number.isInteger(qty);
}
function sanitizeItemBank(mutSource) {
    for (const [key, qty] of Object.entries(mutSource)) {
        if (!isValidBankQuantity(qty)) {
            delete mutSource[key];
        }
        const item = Items_1.default.get(Number.parseInt(key));
        if (!item) {
            delete mutSource[key];
        }
    }
}
class Bank {
    map;
    frozen = false;
    static withSanitizedValues(source) {
        const mutSource = { ...source };
        sanitizeItemBank(mutSource);
        return new Bank(mutSource);
    }
    constructor(initialBank) {
        this.map = this.makeFromInitialBank(initialBank);
    }
    removeInvalidValues() {
        for (const [key, qty] of this.map.entries()) {
            if (!isValidBankQuantity(qty) || !Items_1.default.has(key)) {
                this.map.delete(key);
            }
        }
        return this;
    }
    resolveItemID(item) {
        if (typeof item === "number")
            return item;
        if (typeof item === "string")
            return (0, itemID_1.default)(item);
        return item.id;
    }
    clear(item) {
        if (this.frozen)
            throw new Error(frozenErrorStr);
        if (item) {
            this.set(this.resolveItemID(item), 0);
            return this;
        }
        this.map.clear();
        return this;
    }
    makeFromInitialBank(initialBank) {
        if (!initialBank)
            return new Map();
        if (initialBank instanceof Bank) {
            return new Map(initialBank.map.entries());
        }
        const entries = Object.entries(initialBank);
        if (entries.length === 0)
            return new Map();
        if (isValidInteger(entries[0][0])) {
            return new Map(entries.map(([k, v]) => [Number(k), v]));
        }
        else {
            return new Map(entries.map(([k, v]) => [Items_1.default.get(k).id, v]));
        }
    }
    toJSON() {
        return Object.fromEntries(this.map);
    }
    set(item, quantity) {
        if (this.frozen)
            throw new Error(frozenErrorStr);
        const id = this.resolveItemID(item);
        this.map.set(id, quantity);
        return this;
    }
    freeze() {
        this.frozen = true;
        Object.freeze(this.map);
        return this;
    }
    amount(item) {
        const id = this.resolveItemID(item);
        return this.map.get(id) ?? 0;
    }
    addItem(item, quantity = 1) {
        if (this.frozen)
            throw new Error(frozenErrorStr);
        if (quantity < 1)
            return this;
        const current = this.map.get(item) ?? 0;
        this.map.set(item, current + quantity);
        return this;
    }
    removeItem(item, quantity = 1) {
        if (this.frozen)
            throw new Error(frozenErrorStr);
        const id = this.resolveItemID(item);
        const currentValue = this.map.get(id);
        if (currentValue === undefined)
            return this;
        if (currentValue - quantity <= 0) {
            this.map.delete(id);
        }
        else {
            this.map.set(id, currentValue - quantity);
        }
        return this;
    }
    add(item, quantity = 1) {
        if (this.frozen)
            throw new Error(frozenErrorStr);
        if (typeof item === "number") {
            return this.addItem(item, quantity);
        }
        if (typeof item === "string") {
            return this.addItem((0, itemID_1.default)(item), quantity);
        }
        if (item instanceof Bank) {
            for (const [itemID, qty] of item.map.entries()) {
                this.addItem(itemID, qty);
            }
            return this;
        }
        if (!item) {
            return this;
        }
        if ("id" in item) {
            const _item = item;
            return this.addItem(_item.id, quantity);
        }
        for (const [itemID, qty] of Object.entries(item)) {
            let int = Number.parseInt(itemID);
            if (Number.isNaN(int)) {
                int = Items_1.default.get(itemID)?.id;
            }
            if (!int) {
                throw new Error(`${itemID} is not a valid name or id`);
            }
            this.addItem(int, qty);
        }
        return this;
    }
    remove(item, quantity = 1) {
        if (this.frozen)
            throw new Error(frozenErrorStr);
        if (typeof item === "string") {
            return this.removeItem((0, itemID_1.default)(item), quantity);
        }
        if (typeof item === "number") {
            return this.removeItem(item, quantity);
        }
        if (item instanceof Bank) {
            for (const [itemID, qty] of item.map.entries()) {
                this.removeItem(itemID, qty);
            }
            return this;
        }
        this.remove(new Bank(item));
        return this;
    }
    random() {
        const entries = Array.from(this.map.entries());
        if (entries.length === 0)
            return null;
        const randomEntry = (0, e_1.randArrItem)(entries);
        return { id: randomEntry[0], qty: randomEntry[1] };
    }
    multiply(multiplier, itemsToNotMultiply) {
        if (this.frozen)
            throw new Error(frozenErrorStr);
        for (const [itemID, quantity] of this.map.entries()) {
            if (itemsToNotMultiply?.includes(itemID))
                continue;
            this.map.set(itemID, quantity * multiplier);
        }
        return this;
    }
    has(items) {
        if (typeof items === "string" || typeof items === "number") {
            return this.amount(items) > 0;
        }
        if (Array.isArray(items)) {
            return items.every(item => this.amount(item) > 0);
        }
        if (items instanceof Bank) {
            return items.items().every(itemEntry => this.amount(itemEntry[0].id) >= itemEntry[1]);
        }
        if ("id" in items) {
            return this.has(items.id);
        }
        return this.has(new Bank(items));
    }
    items() {
        const arr = [];
        for (const [key, val] of this.map.entries()) {
            if (val < 1)
                continue;
            arr.push([Items_1.default.get(key), val]);
        }
        return arr;
    }
    forEach(fn) {
        for (const item of this.items()) {
            fn(...item);
        }
    }
    clone() {
        return new Bank(this);
    }
    fits(bank) {
        const items = bank.items();
        const divisions = items.map(([item, qty]) => Math.floor(this.amount(item.id) / qty)).sort((a, b) => a - b);
        return divisions[0] ?? 0;
    }
    filter(fn) {
        const result = new Bank();
        for (const item of this.items()) {
            if (fn(...item)) {
                result.add(item[0].id, item[1]);
            }
        }
        return result;
    }
    toString() {
        const items = this.items();
        if (items.length === 0) {
            return "No items";
        }
        return items
            .sort((a, b) => a[0].name.localeCompare(b[0].name))
            .map(([item, qty]) => `${qty < 1000 ? `${qty}x` : (0, smallUtils_1.toKMB)(qty)} ${item?.name ?? "Unknown item"}`)
            .join(", ");
    }
    get length() {
        return this.map.size;
    }
    value() {
        let value = 0;
        for (const [item, quantity] of this.items()) {
            value += item.price * quantity;
        }
        return value;
    }
    equals(otherBank) {
        if (this.length !== otherBank.length)
            return false;
        for (const [item, quantity] of this.items()) {
            if (otherBank.amount(item.id) !== quantity)
                return false;
        }
        return true;
    }
    difference(otherBank) {
        return this.clone().remove(otherBank).add(otherBank.clone().remove(this));
    }
    validate() {
        const errors = [];
        for (const [item, quantity] of this.map.entries()) {
            if (typeof quantity !== "number" || quantity < 1 || !Number.isInteger(quantity)) {
                errors.push(`Item ${item} has a quantity of ${quantity}`);
            }
            if (typeof item !== "number" || !item || !Items_1.default.get(item)?.id) {
                errors.push(`Item ${item} does not exist.`);
            }
        }
        return errors;
    }
    validateOrThrow() {
        const errors = this.validate();
        if (errors.length > 0) {
            throw new Error(`Bank validation failed: ${errors.join(", ")}`);
        }
    }
    get itemIDs() {
        return Array.from(this.map.keys());
    }
}
exports.default = Bank;
