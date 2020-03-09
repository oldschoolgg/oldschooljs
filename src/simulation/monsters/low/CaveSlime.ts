import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import { GemTable } from '../../subtables/RareDropTable';

export const CaveSlimeTable = new LootTable()
	.every('Swamp tar', [1, 6])
	.tertiary(128, 'Clue scroll (easy)')

	.add(GemTable)

	/* Weapons and Armour */
	.add('Bronze axe', 1, 16)
	.add('Iron sword', 1, 12)
	.add('Bronze full helm', 1, 14)
	.add('Iron kiteshield', 1, 10)
	.add('Iron boots')

	/* Runes */
	.add('Water rune', 15, 20)
	.add('Earth rune', 5, 7)

	/* Other */
	.add(
		new LootTable()
			.add('Coins', 1)
			.add('Coins', 4)
			.add('Coins', 10)
			.add('Coins', 22)
			.add('Coins', 46),
		1,
		30
	)
	.add('Oil lantern frame', 1, 5)
	.add('Unlit torch', 1, 21)
	.add('Gold bar', 1, 2);

export default new SimpleMonster({
	id: 480,
	name: 'Cave Slime',
	table: CaveSlimeTable,
	aliases: ['cave slime']
});
