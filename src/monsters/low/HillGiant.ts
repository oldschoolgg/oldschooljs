import LootTable from '../../structures/LootTable';
import SimpleMonster from '../../structures/SimpleMonster';
import RareDropTable from '../subtables/RareDropTable';
import HerbDropTable from '../subtables/HerbDropTable';
import FixedAllotmentSeedTable from '../subtables/FixedAllotmentSeedTable';


export const HillGiantTable = new LootTable(128)
	.every('Big bones')
	.tertiary(25, 'Ensouled giant head')
    .tertiary(50, 'Clue scroll (beginner)')
    .tertiary(400, 'Long bone')
    .tertiary(5000, 'Giant champion scroll')
    .tertiary(5013, 'Curved bone')

	/* Weapons and armour */
	.addItem('Iron full helm', 1, 5)
	.addItem('Iron dagger', 1, 4)
    .addItem('Iron kiteshield', 1, 3)
    .addItem('Steel longsword', 1, 2)

    /* Runes and ammunition */
    .addItem('Iron arrow', 3, 6)
    .addItem('Fire rune', 15, 3)
    .addItem('Water rune', 7, 3)
    .addItem('Law rune', 2, 3)
    .addItem('Steel arrow', 10, 2)
    .addItem('Mind rune', 3, 2)
    .addItem('Cosmic rune', 2, 2)
    .addItem('Nature rune', 6, 2)
    .addItem('Chaos rune', 2, 1)
    .addItem('Death rune', 2, 1)

    /* Coins */
	.addItem('Coins', 38, 14)
	.addItem('Coins', 52, 10)
	.addItem('Coins', 15, 8)
	.addItem('Coins', 8, 6)
    .addItem('Coins', 88, 2)
    
    /* Other */
	.addItem('Limpwurt root', 1, 11)
	.addItem('Beer', 1, 6)
    .addItem("Body talisman", 1, 2)
    .addItem("Giant key", 1, 1)
    
    /*Special Tables */
    .add(RareDropTable, undefined, 3)
    .add(FixedAllotmentSeedTable, undefined, 18)
    .add(HerbDropTable, undefined, 7)
   


export default new SimpleMonster({
	id: 2098,
	name: 'Hill Giant',
	table: HillGiantTable,
	aliases: ['Hill']
});
