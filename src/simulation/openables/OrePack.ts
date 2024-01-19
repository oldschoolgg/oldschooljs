import { randInt } from 'e';

import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

// Giant's Foundry Ore pack
const GFOrePackTable = new LootTable()
	.add('Coal', 1, 81.27)
	.add('Iron ore', 1, 10.94)
	.add('Mithril ore', 1, 6.24)
	.add('Adamantite ore', 1, 1.29)
	.add('Runite ore', 1, 0.26);

export const GiantsFoundryOrePack = new SimpleOpenable({
	id: 27_019,
	name: 'Ore pack',
	aliases: ['ore pack'],
	table: new LootTable().every(GFOrePackTable, 30)
});

// Volcanic Mine Ore pack
const VMOrePackTable = new LootTable()
	.add('Iron ore', 1, 47.46)
	.add('Coal', 1, 14.05)
	.add('Silver ore', 1, 12.7)
	.add('Gold ore', 1, 10.15)
	.add('Mithril ore', 1, 8.76)
	.add('Adamantite ore', 1, 3.65)
	.add('Runite ore', 1, 0.98);

export const VolcanicMineOrePack = new SimpleOpenable({
	id: 27_693,
	name: 'Ore pack',
	aliases: ['ore pack'],
	table: new LootTable().oneIn(100, 'Dragon pickaxe (broken)').every(VMOrePackTable, randInt(38, 43))
});

export const OrePacks = [GiantsFoundryOrePack, VolcanicMineOrePack];
