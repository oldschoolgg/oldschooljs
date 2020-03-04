import RareDropTable from '../subtables/RareDropTable';
import LootTable from '../../structures/LootTable';
import SimpleOpenable from '../../structures/SimpleOpenable';

const ClueTable = new LootTable()
	.addItem('Clue scroll (easy)', 1, 9)
	.addItem('Clue scroll (medium)', 1, 4)
	.addItem('Clue scroll (hard)', 1, 4);

const MysteryBoxTable = new LootTable()
	.add('Old boot')
	.add('Flier')
	.add('Body rune')
	.add('Bucket')
	.add('Cabbage')
	.add('Onion')
	.add('Coins', [500, 3000])
	.add('Mithril scimitar')
	.add('Casket')
	.add('Steel platebody')
	.add('Diamond')
	.add('Nature rune', 20)
	.add(ClueTable)
	.add(RareDropTable)
	.oneIn(150, 'Rune sq shield')
	.oneIn(256, 'Stale baguette');

export default new SimpleOpenable({
	id: 6199,
	name: 'Mystery box',
	aliases: ['mystery box'],
	table: MysteryBoxTable
});
