import LootTable from '../structures/LootTable';
import SimpleMonster from '../structures/SimpleMonster';
import RareSeedTable from './RareSeedTable';
import { GemTable } from './RareDropTable';

export const DagannothTable = new LootTable()
	.every('Bones')

	/*Weapons*/
	.addItem('Iron spear', 1, 6)
	.addItem('Bronze spear', 1, 5)
	.addItem('Mithril spear', 1, 1)

	/* Runes and ammunition */
	.addItem('Water rune', 15, 4)
	.addItem('Steel arrow', 15, 2)
	.addItem('Mithril javelin', 3, 1)

	/* Seeds */
	.add(RareSeedTable, undefined, 18)

	/* Fishing */
	.addItem('Lobster pot', 1, 12)
	.addItem('Raw herring', 3, 4)
	.addItem('Raw sardine', 5, 4)
	.addItem('Harpoon', 1, 3)
	.addItem('Feather', 15, 2)
	.addItem('Fishing bait', 50, 2)
	.addItem('Raw lobster', 1, 2)
	.addItem('Raw tuna', 1, 2)
	.addItem('Seaweed', 10, 2)
	.addItem('Oyster pearls', 1, 1)
	.addItem('Oyster pearls', 2, 1)

	/* Coins */
	.add('Coins', 56, 29)
	.add('Coins', 25, 9)
	.add('Coins', 44, 8)
	.add('Coins', 41, 6)

	/* Other */
	.addItem('Opal bolt tips', 12, 2)
	.addItem('Casket', 1, 1)

	/* Rdt */
	.add(GemTable, undefined, 1)

	/* Tertiary */
	.tertiary(40, 'Ensouled dagannoth head')
	.tertiary(128, 'Clue scroll (medium)')

	/* Catacombs tertiary */
	.tertiary(286, 'Ancient shard')
	.tertiary(430, 'Dark totem base')
	.tertiary(430, 'Dark totem middle')
	.tertiary(430, 'Dark totem top');

export default new SimpleMonster({ id: 140, name: 'Dagannoth', table: DagannothTable });
