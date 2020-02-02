import test from 'tape';

import { checkThreshold } from './testUtil';
import Monster from '../dist/structures/Monster';
import LootTable from '../dist/structures/LootTable';
import Loot from '../dist/structures/Loot';
import { ItemBank } from '../dist/meta/types';

const subSubTable = new LootTable().add('Coal');
const quantityTable = new LootTable().add('Dragon claws');
const emptyTable = new LootTable(100).add('Rune crossbow');

const subTable = new LootTable()
	.add('Needle')
	.add('Amethyst')
	.add('Knife')
	.addItem([['Iron bar'], ['Steel bar']])
	.add(subSubTable);

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
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			const roll = this.table.roll();
			if ((roll[2353] && !roll[2351]) || (roll[2351] && !roll[2353])) {
				throw new Error('Should drop array items at once');
			}

			if (roll[2353] !== roll[2351]) {
				throw new Error('array of items should be same amount');
			}

			loot.add(roll);
		}

		return loot.values();
	}
}

const TesterMonster = new TestMonsterClass({ id: 1, name: 'Test' });

test('Test Monster', async (test): Promise<void> => {
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
	checkThreshold(test, expectedRates, loot, number);
	test.end();
});
