import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

/* Gem loots */
// TODO: check back for wiki drop table update from another one in the repo
const GemTable = new LootTable()
	.add('Sapphire necklace', 1, 4)
	.add('Sapphire amulet', 1, 4)
	.add('Sapphire ring', 1, 4)
	.add('Emerald necklace', 1, 3)
	.add('Emerald amulet', 1, 3)
	.add('Emerald ring', 1, 3)
	.add('Ruby necklace', 1, 2)
	.add('Ruby amulet', 1, 2)
	.add('Ruby ring', 1, 2)
	.add('Gold necklace', 1, 2)
	.add('Gold amulet', 1, 2)
	.add('Gold ring', 1, 2)
	.add('Sapphire', 1, 2)
	.add('Emerald', 1, 2)
	.add('Ruby', 1, 2)
	.add('Diamond necklace', 1, 1)
	.add('Diamond amulet', 1, 1)
	.add('Diamond ring', 1, 1)
	.add('Diamond', 1, 1);

const IronHAMChestTable = new LootTable()
	.every('Coins', [0, 99])
	.add(GemTable, 1, 1)
	.add(GemTable, 2, 1)
	.add(GemTable, 3, 1)
	.add(GemTable, 4, 1)
	.add(GemTable, 5, 1);

export default new SimpleOpenable({
	id: 8869,
	name: 'Iron HAM chest',
	aliases: ['iron', 'iron ham chest', 'iron chest'],
	table: IronHAMChestTable
});
