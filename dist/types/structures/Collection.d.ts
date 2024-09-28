export declare class Collection<K, V> extends Map<K, V> {
    filter(predicate: (value: V, key: K, map: this) => boolean): Collection<K, V>;
    map<T>(callback: (value: V, key: K, map: this) => T): T[];
    valuesArray(): V[];
    random(): V;
}
//# sourceMappingURL=Collection.d.ts.map