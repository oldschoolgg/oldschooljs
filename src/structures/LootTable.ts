import itemID from "../util/itemID";
import Bank from "./Bank";
import Items from "./Items";

export function reduceNumByPercent(value: number, percent: number): number {
	if (percent <= 0) return value;
	return value - value * (percent / 100);
}
export function randInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
export function randFloat(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}

export function roll(upperLimit: number): boolean {
	return randInt(1, upperLimit) === 1;
}

export interface LootTableOptions {
	limit?: number;
}

export interface LootTableMoreOptions {
	multiply?: boolean;
	freeze?: boolean;
}

export interface LootTableItem {
	item: number | LootTable;
	weight?: number;
	quantity: number | number[];
	options?: LootTableMoreOptions;
}

export interface OneInItems extends LootTableItem {
	chance: number;
}
export function isArrayOfItemTuples(x: readonly unknown[]): x is [string, (number | number[])?][] {
	return Array.isArray(x[0]);
}

export interface LootTableRollOptions {
	/**
	 * Map<item_id, percentage>
	 *
	 * item_id droprate will be decreased by percentage%.
	 */
	tertiaryItemPercentageChanges?: Map<string, number>;
	targetBank?: Bank;
}

export default class LootTable {
	public length: number;
	public table: LootTableItem[];
	public totalWeight: number;
	public limit?: number;
	public oneInItems: OneInItems[];
	public tertiaryItems: OneInItems[];
	public everyItems: LootTableItem[];
	public allItems: number[];

	public constructor(lootTableOptions: LootTableOptions = {}) {
		this.table = [];
		this.oneInItems = [];
		this.tertiaryItems = [];
		this.everyItems = [];
		this.length = 0;
		this.totalWeight = 0;
		this.limit = lootTableOptions.limit;
		this.allItems = [];
	}

	public clone(): LootTable {
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

	private resolveName(name: string): number {
		return itemID(name);
	}

	private addToAllItems(items: number | number[] | LootTable | LootTableItem | LootTableItem[]): void {
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
			if (this.allItems.includes(items)) return;
			this.allItems.push(items);
		} else {
			this.addToAllItems(items.item);
		}
	}

	public oneIn(
		chance: number,
		item: LootTable | number | string,
		quantity: number | number[] = 1,
		options?: LootTableMoreOptions,
	): this {
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

	public tertiary(
		chance: number,
		item: LootTable | number | string,
		quantity: number | number[] = 1,
		options?: LootTableMoreOptions,
	): this {
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

	public every(
		item: LootTable | number | string,
		quantity: number | number[] = 1,
		options?: LootTableMoreOptions,
	): this {
		const resolved = typeof item === "string" ? this.resolveName(item) : item;
		this.everyItems.push({
			item: resolved,
			quantity,
			options,
		});

		this.addToAllItems(resolved);

		return this;
	}

	public add(
		item: LootTable | number | string,
		quantity: number[] | number = 1,
		weight = 1,
		options?: LootTableMoreOptions,
	): this {
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

	roll(quantity?: number): Bank;
	roll(quantity: number, options: { targetBank?: undefined } & LootTableRollOptions): Bank;
	roll(quantity: number, options: { targetBank: Bank } & LootTableRollOptions): null;
	public roll(quantity = 1, options: LootTableRollOptions = {}): Bank | null {
		const loot = options.targetBank ?? new Bank();

		const effectiveTertiaryItems = options.tertiaryItemPercentageChanges
			? this.tertiaryItems.map(i => {
					if (typeof i.item !== "number") return i;
					if (i.options?.freeze === true) return i;
					const change = options.tertiaryItemPercentageChanges?.get(Items.get(i.item)!.name);
					if (!change) return i;
					return {
						...i,
						chance: Math.ceil(reduceNumByPercent(i.chance, change)),
					};
				})
			: this.tertiaryItems;

		outerLoop: for (let i = 0; i < quantity; i++) {
			// The items that are rolled.
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

			// Random float between 0 and the total weighting
			const randomWeight = randFloat(0, this.limit || this.totalWeight);

			// The index of the item that will be used.
			let result = -1;
			let weight = 0;

			for (let i = 0; i < this.table.length; i++) {
				const item = this.table[i]!;
				weight += item.weight!;
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

		if (options.targetBank) return null;
		return loot;
	}

	private addResultToLoot(result: LootTableItem, loot: Bank): void {
		if (!result) return;
		const { item, quantity, options } = result;

		if (typeof item === "number") {
			loot.add(item, this.determineQuantity(quantity));
			return;
		}

		if (item instanceof LootTable) {
			const qty = this.determineQuantity(quantity);
			if (options?.multiply) loot.add(item.roll(1).multiply(qty));
			else item.roll(qty, { targetBank: loot });
			return;
		}
	}

	protected determineQuantity(quantity: number | number[]): number {
		if (Array.isArray(quantity)) {
			return randInt(quantity[0], quantity[1]);
		}
		return quantity;
	}
}
