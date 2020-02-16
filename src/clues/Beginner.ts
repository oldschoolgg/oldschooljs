import LootTable from '../structures/LootTable';
import Clue from '../structures/Clue';
import { ItemBank } from '../meta/types';
import Loot from '../structures/Loot';
import { rand } from '../util/util';

export const RareTable = new LootTable()
	.addItem('Black 2h sword')
	.addItem('Black platebody')
	.addItem('Black longsword')
	.addItem('Black full helm')
	.addItem('Black platelegs')
	.addItem('Black battleaxe')
	.addItem('Black axe')
	.addItem('Black pickaxe')
	.addItem('Black plateskirt')
	.addItem('Black kiteshield')
	.addItem('Black med helm')
	.addItem('Black dagger')
	.addItem('Black sq shield')
	.addItem('Black chain body')
	.addItem('Black sword')
	.addItem('Black mace')
	.addItem('Black warhammer')
	.addItem('Black scimitar');

export const SuccessfulUniqueTable = new LootTable()
	.addItem('Mole slippers')
	.addItem('Frog slippers')
	.addItem('Bear feet')
	.addItem('Demon feet')
	.addItem('Jester cape')
	.addItem('Shoulder parrot')
	.addItem("Monk's robe top (t)")
	.addItem("Monk's robe (t)")
	.addItem('Amulet of defence (t)')
	.addItem('Sandwich lady hat')
	.addItem('Sandwich lady top')
	.addItem('Sandwich lady bottom')
	.addItem('Rune scimitar ornament kit (guthix)')
	.addItem('Rune scimitar ornament kit (saradomin)')
	.addItem('Rune scimitar ornament kit (zamorak)');

export const UniqueTable = new LootTable().addItem('Cabbage').add(SuccessfulUniqueTable);

export const StandardTable = new LootTable()
	.addItem('Shrimps', [5, 14])
	.addItem('Herring', [5, 9])
	.addItem('Sardine', [5, 12])
	.addItem('Air rune', [15, 35])
	.addItem('Fire rune', [15, 35])
	.addItem('Water rune', [15, 35])
	.addItem('Earth rune', [15, 35])
	.addItem('Mind rune', [15, 35])
	.addItem('Body rune', [15, 35])
	.addItem('Law rune', [2, 7])
	.addItem('Chaos rune', [2, 7])
	.addItem('Nature rune', [2, 7])
	.addItem('Bronze arrow', [15, 30])
	.addItem('Iron arrow', [7, 15])
	.addItem('Staff of air')
	.addItem('Staff of water')
	.addItem('Staff of earth')
	.addItem('Staff of fire')
	.addItem('Steel platebody')
	.addItem('Steel longsword')
	.addItem('Steel full helm')
	.addItem('Steel platelegs')
	.addItem('Steel battleaxe')
	.addItem('Steel axe')
	.addItem('Iron pickaxe')
	.addItem('Steel dagger')
	.addItem('Oak shortbow')
	.addItem('Longbow')
	.addItem('Oak longbow')
	.addItem('Leather chaps')
	.addItem('Leather body')
	.addItem('Hardleather body')
	.addItem('Leather vambraces')
	.addItem('Leather cowl')
	.addItem('Blue wizard robe')
	.addItem('Blue wizard hat')
	.addItem('Black robe')
	.addItem('Wizard hat')
	.addItem('Steel plateskirt')
	.addItem('Shortbow')
	.add(RareTable);

export const BeginnerClueTable = new LootTable()
	.add(StandardTable, undefined, 11)
	.add(UniqueTable, undefined, 1);

export class BeginnerCasket extends Clue {
	public open(quantity = 1): ItemBank {
		const loot = new Loot();
		for (let i = 0; i < quantity; i++) {
			const numberOfRolls = rand(1, 3);

			for (let i = 0; i < numberOfRolls; i++) {
				loot.add(BeginnerClueTable.roll());
			}
		}
		return loot.values();
	}
}

export default new BeginnerCasket();
