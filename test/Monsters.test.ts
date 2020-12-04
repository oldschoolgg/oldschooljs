import { Monsters } from '../dist';
import { ItemBank } from '../dist/meta/types';
import Bank from '../dist/structures/Bank';
import LootTable from '../dist/structures/LootTable';
import Monster from '../dist/structures/Monster';
import { checkThreshold } from './testUtil';

describe('Monsters', () => {
	const currentMonIDs = new Set();
	const currentAliases = new Set();

	const subSubTable = new LootTable().add('Coal');
	const quantityTable = new LootTable().add('Dragon claws');
	const emptyTable = new LootTable({ limit: 100 }).add('Rune crossbow');

	const subTable = new LootTable()
		.add('Needle')
		.add('Amethyst')
		.add('Knife')
		.add([['Iron bar'], ['Steel bar']])
		.add(subSubTable);

	beforeAll(async () => {
		for (const monster of Monsters.values()) {
			if (!monster.aliases.some((alias) => alias === monster.name.toLowerCase())) {
				throw `${monster.name} should have its name as an alias.`;
			}
			// Make sure all aliases are lowercase
			for (const alias of monster.aliases) {
				if (alias.toLowerCase() !== alias) {
					throw `Aliases for ${monster.name} should be lowercased.`;
				}
				if (currentAliases.has(alias)) throw `Alias of '${alias}' is duplicated.`;
				currentAliases.add(alias);
			}

			if (currentMonIDs.has(monster.id))
				throw `${monster.name} has the same ID as another monster.`;
			currentMonIDs.add(monster.id);
		}
	});

	class TestMonsterClass extends Monster {
		table = new LootTable()
			.every('Dragon bones')
			.every('Bones')
			.tertiary(100, 'Ranger boots')
			.tertiary(10, 'Twisted bow')
			.add('Bandos page 1')
			.add('Bandos page 2')
			.add('Bandos page 3')
			.add('Bandos page 4')
			.add(subTable)
			.add(quantityTable, 100)
			.add(emptyTable);

		public kill(quantity = 1): ItemBank {
			const loot = new Bank();

			for (let i = 0; i < quantity; i++) {
				const roll = this.table.roll();
				const barDrop = roll.find((item) => item.item === 2353);
				const otherBarDrop = roll.find((item) => item.item === 2351);

				const dragonClaws = roll.find((item) => item.item === 13652);

				if (otherBarDrop && otherBarDrop.quantity !== barDrop?.quantity) {
					throw new Error('Should drop array items at once');
				}

				if (
					dragonClaws &&
					roll
						.filter((i) => i.item === 13652)
						.map((item) => item.quantity)
						.reduce((a, b) => a + b, 0) !== 100
				) {
					throw new Error('should always drop 100 at a time');
				}

				loot.add(roll);
			}

			return loot.values();
		}
	}

	test('Test Monster', (done) => {
		const TesterMonster = new TestMonsterClass({ id: 1, name: 'Test' });

		const number = 500_000;

		const expectedRates = {
			'Dragon bones': 1,
			Bones: 1,
			'Ranger boots': 100,
			'Twisted bow': 10,
			'Bandos page 1': TesterMonster.table.length,
			'Bandos page 2': TesterMonster.table.length,
			'Bandos page 3': TesterMonster.table.length,
			'Bandos page 4': TesterMonster.table.length,
			Knife: TesterMonster.table.length * subTable.length,
			Amethyst: TesterMonster.table.length * subTable.length,
			Needle: TesterMonster.table.length * subTable.length,
			Coal: (TesterMonster.table.length * subTable.length) / subSubTable.length,
			'Iron bar': TesterMonster.table.length * subTable.length,
			'Steel bar': TesterMonster.table.length * subTable.length,
			'Dragon claws': TesterMonster.table.length / 100,
			'Rune crossbow': TesterMonster.table.length * 100
		};
		const loot = TesterMonster.kill(number);
		return checkThreshold(done, expectedRates, loot, number);
	});
});
