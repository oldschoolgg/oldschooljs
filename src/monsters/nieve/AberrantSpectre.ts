import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareSeedTable from '../subtables/RareSeedTable';
import RareDropTable from '../subtables/RareDropTable';

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

const AberrantSpectreHerbTable2 = new LootTable()
	.add('Grimy guam leaf', 2, 1515)
	.add('Grimy marrentill', 2, 1136)
	.add('Grimy tarromin', 2, 854)
	.add('Grimy harralander', 2, 667)
	.add('Grimy ranarr weed', 2, 523)
	.add('Grimy irit leaf', 2, 380)
	.add('Grimy avantoe', 2, 285)
	.add('Grimy kwuarm', 2, 238)
	.add('Grimy cadantine', 2, 190)
	.add('Grimy lantadyme', 2, 143)
	.add('Grimy dwarf weed', 2, 143);
const AberrantSpectreHerbTable3 = new LootTable()
	.add('Grimy guam leaf', 3, 1515)
	.add('Grimy marrentill', 3, 1136)
	.add('Grimy tarromin', 3, 854)
	.add('Grimy harralander', 3, 667)
	.add('Grimy ranarr weed', 3, 523)
	.add('Grimy irit leaf', 3, 380)
	.add('Grimy avantoe', 3, 285)
	.add('Grimy kwuarm', 3, 238)
	.add('Grimy cadantine', 3, 190)
	.add('Grimy lantadyme', 3, 143)
	.add('Grimy dwarf weed', 3, 143);

export const AberrantSpectreTable = new LootTable()
	.oneIn(4, AberrantSpectreHerbTable1)
	.oneIn(4, AberrantSpectreHerbTable2)
	.oneIn(11, AberrantSpectreHerbTable3)

	.oneIn(7, RareSeedTable)
	.oneIn(26, RareDropTable)
	.addItem('Big Bones', 1, 64)

	.tertiary(128, 'Clue scroll (hard)')

	/*Weapons and armour */
	.addItem('Steel axe', 1, 12)
	.addItem('Mithril kiteshield', 1, 4)
	.addItem('Lava battlestaff', 1, 4)
	.addItem('Adamant platelegs', 1, 4)
	.addItem('Rune full helm', 1, 4)
	.addItem('Mystic robe bottom (dark)', 1, 4)
	.addItem('Coins', 460, 4);

/*

Runes and ammunition 

    Materials 
    .addItem(
        [
            ['Uncut ruby', 20],
            ['Uncut diamond', 10]
        ],
        1,
        28
    )
    .addItem('Mahogany logs', 400, 24)
    .addItem('Limpwurt root', 25, 20)
    .addItem('Magic logs', 100, 20)
    .addItem('Red dragonhide', 75, 12)
    .addItem('Coconut', 60, 8)
    .addItem('Uncut dragonstone', 1, 8)
    .addItem('Grimy toadflax', 100, 4)

     Seeds 
    .addItem('Ranarr seed', 5, 20)
    .addItem('Snapdragon seed', 3, 20)
    .addItem('Magic seed', 1, 4)
    .addItem('Palm tree seed', 1, 4)
    .addItem('Yew seed', 1, 4)

     Other 
    .addItem('Coins', [15000, 19999], 76)
    .addItem(
        [
            ['Dark crab', 8],
            ['Super restore(4)', 3]
        ],
        1,
        40
    )
    .addItem('Supercompost', 100, 19)
    .addItem('Dragon bones', 30, 12)
    .addItem('Dark fishing bait', 375, 4);
*/
export default new SimpleMonster({ id: 2, name: 'Aberrant Spectre', table: AberrantSpectreTable });
