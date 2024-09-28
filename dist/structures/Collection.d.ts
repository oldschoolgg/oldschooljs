export default class Collection<K, V> extends Map<K, V> {
    private _array;
    private _keyArray;
    static readonly default: typeof Collection;
    constructor(entries?: readonly (readonly [K, V])[] | null);
    set(key: K, value: V): this;
    delete(key: K): boolean;
    array(): V[];
    keyArray(): K[];
    first(): V | undefined;
    first(amount: number): V[];
    firstKey(): K | undefined;
    firstKey(amount: number): K[];
    last(): V | undefined;
    last(amount: number): V[];
    lastKey(): K | undefined;
    lastKey(amount: number): K[];
    random(): V;
    random(amount: number): V[];
    randomKey(): K;
    randomKey(amount: number): K[];
    find(fn: (value: V, key: K, collection: this) => boolean): V | undefined;
    findKey(fn: (value: V, key: K, collection: this) => boolean, thisArg?: any): K | undefined;
    sweep(fn: (value: V, key: K, collection: this) => boolean): number;
    filter(fn: (value: V, key: K, collection: this) => boolean): Collection<K, V>;
    map<T>(fn: (value: V, key: K, collection: this) => T): T[];
    mapValues<T>(fn: (value: V, key: K, collection: this) => T): Collection<K, T>;
    some(fn: (value: V, key: K, collection: this) => boolean): boolean;
    every(fn: (value: V, key: K, collection: this) => boolean): boolean;
    reduce<T>(fn: (accumulator: any, value: V, key: K, collection: this) => T, initialValue?: T): T;
    each(fn: (value: V, key: K, collection: Map<K, V>) => any, thisArg?: any): this;
    tap(fn: (collection: this) => any): this;
    clone(): Collection<K, V>;
    concat(...collections: Collection<K, V>[]): Collection<K, V>;
    equals(collection: Collection<K, V>): boolean;
    sort(compareFunction?: (firstValue: V, secondValue: V, firstKey: K, secondKey: K) => number): this;
}
//# sourceMappingURL=Collection.d.ts.map