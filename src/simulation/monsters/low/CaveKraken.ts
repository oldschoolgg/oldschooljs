import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import HerbDropTable from '../../subtables/HerbDropTable';
import CommonSeedDropTable from '../../subtables/CommonSeedDropTable';
import { GemTable } from '../../subtables/RareDropTable';

const CaveKrakenTable = new LootTable(128)

	/* Weapons and armour 36/128 */
	.addItem('Staff of water', 1, 8)
	.addItem('Rune med helm', 1, 8)
	.addItem('Adamant spear', 1, 4)
	.addItem('Rune warhammer', 1, 4)
	.addItem('Battlestaff', 1, 4)
	.addItem('Water battlestaff', 1, 4)
	.addItem('Mystic water staff', 1, 4)
	.oneIn(200, 'Uncharged trident')

	/* Runes and ammunition 44/128 */
	.addItem('Steam rune', 7, 8)
	.add(
		new LootTable()
			.add('Water rune', 75)
			.add('Water rune', 30)
			.add('Water rune', 15),
		1,
		8
	)
	.add(new LootTable().add('Fire rune', 50).add('Fire rune', 30), 1, 8)
	.addItem('Death rune', [30, 150], 8)
	.add(new LootTable().add('Chaos rune', 50).add('Chaos rune', 30), 1, 8)
	.add(new LootTable().add('Blood rune', 15).add('Blood rune', 5), 1, 4)

	/* Herbs */
	.add(HerbDropTable, 1, 12)

	/* Seeds */
	.add(CommonSeedDropTable, 1, 6)

	/* Other 28/128 */
	.addItem('Old boot', 1, 6)
	.add(new LootTable().add('Swamp tar', 60).add('Swamp tar', 30), 1, 5)
	.addItem('Seaweed', 30, 5)
	.addItem('Coins', [122, 19770], 2)
	.addItem('Bucket', 1, 1)
	.addItem('Raw lobster', 3, 1)
	.addItem('Water orb', 2, 1)
	.addItem('Oyster', 1, 1)
	.addItem('Swordfish', 2, 1)
	.add(new LootTable().add('Shark', 5).add('Shark', 1), 1, 1)
	.addItem('Antidote++(4)', 1, 1)
	.addItem('Vial of water', 50, 1)
	.addItem('Rusty sword', 1, 1)
	.addItem('Water talisman', 1, 1)
	.oneIn(1200, 'Kraken tentacle')

	/* Rdt */
	.add(GemTable, 1, 2)

	/* Tertiary */
	.tertiary(100, 'Clue scroll (hard)')
	.tertiary(1200, 'Clue scroll (elite)');

export default new SimpleMonster({
	id: 492,
	name: 'CaveKraken',
	table: CaveKrakenTable,
	aliases: ['cave kraken', 'cave k']
});
