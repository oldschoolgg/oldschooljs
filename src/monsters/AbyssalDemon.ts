import LootTable from '../structures/LootTable';
import SimpleMonster from '../structures/SimpleMonster';
import RareDropTable from './RareDropTable';
import HerbDropTable from './HerbDropTable';

export const AbyssalDemonTable = new LootTable()
	.every('Ashes')

	/*Weapons and armour */
	.addItem('Black sword', 1, 4)
	.addItem('Steel battleaxe', 1, 3)
	.addItem('Black axe', 1, 2)
	.addItem('Mithril kiteshield', 1, 1)
	.addItem('Rune chainbody', 1, 1)
	.addItem('Rune med helm', 1, 1)
	.oneIn(512, 'Abyssal whip')
	.oneIn(32768, 'Abyssal dagger')

	/* Runes */
	.addItem('Air rune', 50, 8)
	.addItem('Chaos rune', 10, 6)
	.addItem('Blood rune', 7, 4)
	.oneIn(128, 'Law rune', 3)
	/* Seeds */
	.add(HerbDropTable, undefined, 19)

	/* Materials */
	.addItem('Pure essence', 60, 5)
	.addItem('Adamantite bar', 1, 2)

	/* Coins */
	.add('Coins', 130, 58)

	/* Other */
	.add('Lobster', 1, 2)
	.addItem('Cosmic talisman', 1, 1)
	.addItem('Chaos talisman', 1, 1)
	.addItem('Defence potion(3)', 1, 1)

	.add(RareDropTable, undefined, 2)

	/* Tertiary */
	.tertiary(25, 'Ensouled abyssal head')
	.tertiary(128, 'Clue scroll (hard)')
	.tertiary(1200, 'Clue scroll (elite)')
	.tertiary(6000, 'Abyssal head')

	/* Catacombs tertiary */
	.tertiary(233, 'Ancient shard')
	.tertiary(350, 'Dark totem base')
	.tertiary(350, 'Dark totem middle')
	.tertiary(350, 'Dark totem top');
export default new SimpleMonster({ id: 415, name: 'Abyssal Demon', table: AbyssalDemonTable });
