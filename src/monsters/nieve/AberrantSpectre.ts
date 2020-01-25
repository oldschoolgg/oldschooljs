import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareSeedTable from '../subtables/RareSeedTable';
import { GemTable } from '../subtables/RareDropTable';

const AberrantSpectreHerbTable1 = new LootTable()
	.add('Grimy guam leaf', 1, 1515)
	.add('Grimy marrentill', 1, 1136)
	.add('Grimy tarromin', 1, 854)
	.add('Grimy harralander', 1, 667)
	.add('Grimy ranarr weed', 1, 523)
	.add('Grimy irit leaf', 1, 380)
	.add('Grimy avantoe', 1, 285)
	.add('Grimy kwuarm', 1, 238)
	.add('Grimy cadantine', 1, 190)
	.add('Grimy lantadyme', 1, 143)
	.add('Grimy dwarf weed', 1, 143);

const AberrantSpectreHerbTable = new LootTable()
	.add(AberrantSpectreHerbTable1, 1, 11)
	.add(AberrantSpectreHerbTable1, 2, 11)
	.add(AberrantSpectreHerbTable1, 3, 4);

export const AberrantSpectreTable = new LootTable(128)

	/*Weapons and armour */
	.addItem('Steel axe', 1, 3)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Lava battlestaff', 1, 1)
	.addItem('Adamant platelegs', 1, 1)
	.addItem('Rune full helm', 1, 1)
	.oneIn(512, 'Mystic robe bottom (dark)')

	/* Herbs */
	.add(AberrantSpectreHerbTable, undefined, 78)

	/* Seeds */
	.add(RareSeedTable, undefined, 19)

	/* Coins */
	.addItem('Coins', 460, 1)

	/* Rdt */
	.add(GemTable, undefined, 5)

	/* Tertiary */
	.tertiary(128, 'Clue scroll (hard)');

export default new SimpleMonster({
	id: 2,
	name: 'Aberrant Spectre',
	table: AberrantSpectreTable,
	aliases: ['aberrant spectre', 'spectres']
});
