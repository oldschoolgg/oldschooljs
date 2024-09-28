"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection extends Map {
    _array;
    _keyArray;
    static default = Collection;
    constructor(entries) {
        super(entries);
        Object.defineProperty(this, "_array", { value: null, writable: true, configurable: true });
        Object.defineProperty(this, "_keyArray", {
            value: null,
            writable: true,
            configurable: true,
        });
    }
    set(key, value) {
        this._array = null;
        this._keyArray = null;
        return super.set(key, value);
    }
    delete(key) {
        this._array = null;
        this._keyArray = null;
        return super.delete(key);
    }
    array() {
        if (!this._array || this._array.length !== this.size)
            this._array = [...this.values()];
        return this._array;
    }
    keyArray() {
        if (!this._keyArray || this._keyArray.length !== this.size)
            this._keyArray = [...this.keys()];
        return this._keyArray;
    }
    first(amount) {
        if (typeof amount === "undefined")
            return this.values().next().value;
        if (amount < 0)
            return this.last(amount * -1);
        amount = Math.min(this.size, amount);
        const iter = this.values();
        return Array.from({ length: amount }, () => iter.next().value);
    }
    firstKey(amount) {
        if (typeof amount === "undefined")
            return this.keys().next().value;
        if (amount < 0)
            return this.lastKey(amount * -1);
        amount = Math.min(this.size, amount);
        const iter = this.keys();
        return Array.from({ length: amount }, () => iter.next().value);
    }
    last(amount) {
        const arr = this.array();
        if (typeof amount === "undefined")
            return arr[arr.length - 1];
        if (amount < 0)
            return this.first(amount * -1);
        if (!amount)
            return [];
        return arr.slice(-amount);
    }
    lastKey(amount) {
        const arr = this.keyArray();
        if (typeof amount === "undefined")
            return arr[arr.length - 1];
        if (amount < 0)
            return this.firstKey(amount * -1);
        if (!amount)
            return [];
        return arr.slice(-amount);
    }
    random(amount) {
        let arr = this.array();
        if (typeof amount === "undefined")
            return arr[Math.floor(Math.random() * arr.length)];
        if (arr.length === 0 || !amount)
            return [];
        arr = arr.slice();
        return Array.from({ length: amount }, () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    randomKey(amount) {
        let arr = this.keyArray();
        if (typeof amount === "undefined")
            return arr[Math.floor(Math.random() * arr.length)];
        if (arr.length === 0 || !amount)
            return [];
        const rand = Array.from({ length: amount });
        arr = arr.slice();
        for (let i = 0; i < amount; i++)
            rand[i] = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
        return rand;
    }
    find(fn) {
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return val;
        }
        return undefined;
    }
    findKey(fn, thisArg) {
        if (typeof thisArg !== "undefined")
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return key;
        }
        return undefined;
    }
    sweep(fn) {
        const previousSize = this.size;
        for (const [key, val] of this) {
            if (fn(val, key, this))
                this.delete(key);
        }
        return previousSize - this.size;
    }
    filter(fn) {
        const results = new this.constructor[Symbol.species]();
        for (const [key, val] of this) {
            if (fn(val, key, this))
                results.set(key, val);
        }
        return results;
    }
    map(fn) {
        const iter = this.entries();
        return Array.from({ length: this.size }, () => {
            const [key, value] = iter.next().value;
            return fn(value, key, this);
        });
    }
    mapValues(fn) {
        const coll = new this.constructor[Symbol.species]();
        for (const [key, val] of this)
            coll.set(key, fn(val, key, this));
        return coll;
    }
    some(fn) {
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return true;
        }
        return false;
    }
    every(fn) {
        for (const [key, val] of this) {
            if (!fn(val, key, this))
                return false;
        }
        return true;
    }
    reduce(fn, initialValue) {
        let accumulator;
        if (typeof initialValue !== "undefined") {
            accumulator = initialValue;
            for (const [key, val] of this)
                accumulator = fn(accumulator, val, key, this);
            return accumulator;
        }
        let first = true;
        for (const [key, val] of this) {
            if (first) {
                accumulator = val;
                first = false;
                continue;
            }
            accumulator = fn(accumulator, val, key, this);
        }
        if (first) {
            throw new TypeError("Reduce of empty collection with no initial value");
        }
        return accumulator;
    }
    each(fn, thisArg) {
        this.forEach(fn, thisArg);
        return this;
    }
    tap(fn) {
        fn(this);
        return this;
    }
    clone() {
        return new this.constructor[Symbol.species](this);
    }
    concat(...collections) {
        const newColl = this.clone();
        for (const coll of collections) {
            for (const [key, val] of coll)
                newColl.set(key, val);
        }
        return newColl;
    }
    equals(collection) {
        if (!collection)
            return false;
        if (this === collection)
            return true;
        if (this.size !== collection.size)
            return false;
        for (const [key, value] of this) {
            if (!collection.has(key) || value !== collection.get(key)) {
                return false;
            }
        }
        return true;
    }
    sort(compareFunction = (x, y) => Number(x > y) || Number(x === y) - 1) {
        const entries = [...this.entries()];
        entries.sort((a, b) => compareFunction(a[1], b[1], a[0], b[0]));
        this.clear();
        for (const [k, v] of entries) {
            this.set(k, v);
        }
        return this;
    }
}
exports.default = Collection;
