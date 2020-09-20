import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const GnomeTable = new LootTable()
	.add('King worm', 1, 1 / 2.327)
	.add('Coins', [1, 300], 1 / 4.267)
	.add('Swamp toad', 1, 1 / 4.571)
	.add('Gold ore', 1, 1 / 16)
	.add('Earth rune', 1, 1 / 25.6)
	.add('Fire orb', 1, 1 / 64);

export default new SimpleMonster({
	id: 5969,
	name: 'Gnome',
	pickpocketTable: GnomeTable,
	aliases: ['gnome']
});
