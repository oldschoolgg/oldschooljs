import { roll } from "e";
import Bank from "../../structures/Bank";
import LootTable from "../../structures/LootTable";
import SimpleOpenable, { SimpleOpenableOptions } from "../../structures/SimpleOpenable";

interface SackOpenableOptions extends SimpleOpenableOptions {
	rolls: number;
}

const SackTertiary = new LootTable()
	.add("Enhanced quetzal whistle blueprint")
	.add("Guild hunter headwear")
	.add("Guild hunter top")
	.add("Guild hunter legs")
	.add("Guild hunter boots");

const BasicSackTable = new LootTable()
	.add("Quetzal feed", 1, 5)
	.add("Coins", [750, 1_250], 5)
	.add("Hunter spear tips", [15, 30], 5)
	.add("Blessed bone shards", [100, 200], 5)
	.add("Raw kyatt", 2, 5)
	.add("Raw pyre fox", 3, 5)

	/* Logs */
	.add("Maple logs", 4, 1)
	.add("Yew logs", 4, 1)
	.add("Teak logs", 4, 1)
	.add("Mahogany logs", 4, 1)
	.add("Magic logs", 4, 1);

const AdeptSackTable = new LootTable()

const ExpertSackTable = new LootTable()

const MasterSackTable = new LootTable()


export class HunterSack extends SimpleOpenable {
	public rolls: number;

	constructor(options: SackOpenableOptions) {
		super(options);
		this.rolls = options.rolls;
	}

	public open(quantity = 1): Bank {
		const loot = new Bank();
		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = this.rolls;

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(this.table.roll());

				if(roll(50)) {
					if(this.id != 29_242) {
						SackTertiary.add("Huntsman's kit");
						loot.add(SackTertiary.roll());
					} else {
						loot.add(SackTertiary.roll());
					}
				}
			}
		}

		return loot;
	}
}

export const BasicSack = new HunterSack({
	id: 29_242,
	name: "Hunters' loot sack (basic)",
	aliases: ["basic hunter sack", "hunter's loot sack (basic)", "hunters loot sack (basic)"],
	table: BasicSackTable,
	rolls: 5
});

export const AdeptSack = new HunterSack({
	id: 29_244,
	name: "Hunters' loot sack (adept)",
	aliases: ["adept hunter sack", "hunter's loot sack (adept)", "hunters loot sack (adept)",],
	table: AdeptSackTable,
	rolls: 7
});

export const ExpertSack = new HunterSack({
	id: 29_246,
	name: "Hunters' loot sack (expert)",
	aliases: ["expert hunter sack", "hunter's loot sack (expert)", "hunters loot sack (expert)",],
	table: ExpertSackTable,
	rolls: 9
});

export const MasterSack = new HunterSack({
	id: 29_248,
	name: "Hunters' loot sack (master)",
	aliases: ["master hunter sack", "hunter's loot sack (master)", "hunters loot sack (master)",],
	table: MasterSackTable,
	rolls: 11
});