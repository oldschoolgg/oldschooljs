import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable from '../subtables/RareDropTable';
import TreeHerbSeedTable from '../subtables/TreeHerbSeedTable';
import TalismanTable from '../subtables/TalismanTable';

export const SireHerbTable = new LootTable()
	.addItem('Grimy kwuarm', 25, 10)
	.addItem('Grimy dwarf weed', 25, 9)
	.addItem('Grimy cadantine', 25, 9)
	.addItem('Grimy lantadyme', 25, 7);

export const AbyssalSireTable = new LootTable(139)
	.every('Ashes')

	/* Weapons and armor */
	.addItem('Battlestaff', 10, 6)
	.addItem('Rune full helm', 3, 4)
	.addItem('Mystic lava staff', 2, 4)
	.addItem('Rune sword', 3, 4)
	.addItem('Rune platebody', 2, 4)
	.addItem('Rune kiteshield', 2, 3)
	.addItem('Mystic air staff', 2, 2)
	.addItem('Air battlestaff', 6, 2)

	/* Runes and ammunition */
	.addItem('Blood rune', [190, 210], 5)
	.addItem('Death rune', [330, 370], 5)
	.addItem('Law rune', 250, 5)
	.addItem('Soul rune', [225, 275], 5)
	.addItem('Cosmic rune', 350, 4)
	.addItem('Cannonball', 300, 4)

	/* Herbs */
	.add(SireHerbTable, 1, 5)

	/* Seeds */
	.add(TreeHerbSeedTable, 2, 5)

	/* Materials */
	.addItem('Coal', [380, 420], 6)
	.addItem('Earth orb', [47, 53], 5)
	.addItem('Pure essence', 600, 5)
	.addItem('Magic logs', [50, 70], 5)
	.addItem('Uncut diamond', 15, 5)
	.addItem('Runite ore', 6, 4)
	.addItem('Onyx bolt tips', 10, 3)
	.addItem('Runite bar', 5, 2)

	/* Talismans */
	.add(TalismanTable, 1, 3)

	/* Other */
	.addItem('Coins', [48000, 52000])
	.addItem('Chilli potato', 10, 7)
	.addItem('Super restore(4)', 4, 5)
	.addItem('Binding necklace', 25, 4)
	.addItem('Saradomin brew(3)', 6, 2)
	.addItem('Jug of water', [250, 350], 2)
	.oneIn(100, 'Unsired')

	/* Rdt */
	.add(RareDropTable, 2, 3)

	/* Tertiary */
	.tertiary(180, 'Clue scroll (elite)');

export default new SimpleMonster({
	id: 5886,
	name: 'Abyssal Sire',
	table: AbyssalSireTable,
	aliases: ['abyssal sire', 'sire']
});
