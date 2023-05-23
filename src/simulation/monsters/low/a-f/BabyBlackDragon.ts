import LootTable from '../../../../structures/LootTable';
import SimpleMonster from '../../../../structures/SimpleMonster';

const BabyBlackDragon = new LootTable()
	.every('Babydragon bones')

	/* Tertiary */
	.tertiary(100, 'Scaly blue dragonhide');

export default new SimpleMonster({
	id: 1871,
	name: 'Baby black Dragon',
	table: BabyBlackDragon,
	aliases: ['baby black dragon', 'baby black drags']
});
