import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';

const GoblinTable = new LootTable(128)
	.every('Bones')
	.tertiary(35, 'Ensouled goblin head')
	.tertiary(60, 'Clue scroll (beginner)')
	.tertiary(128, 'Clue scroll (easy)')
	.tertiary(5000, 'Goblin champion scroll')

	/* Weapons and armour */
	.addItem('Bronze spear', 1, 4)
	.addItem('Bronze sq shield', 1, 3)

	/* Runes and ammunition */
	.addItem('Water rune', 6, 6)
	.addItem('Body rune', 7, 5)
	.addItem('Earth rune', 4, 3)
	.addItem('Bronze bolts', 8, 3)

	/* Coins */
	.addItem('Coins', 5, 28)
	.addItem('Coins', 9, 3)
	.addItem('Coins', 15, 3)
	.addItem('Coins', 20, 2)
	.addItem('Coins', 1, 1)

	/* Other */
	.addItem('Hammer', 1, 15)
	.addItem('Goblin mail', 1, 5)
	.addItem("Chef's hat", 1, 3)
	.addItem('Goblin book', 1, 2)
	.addItem('Beer', 1, 2)
	.addItem('Brass necklace', 1, 1)
	.addItem('Air talisman', 1, 1);

export default new SimpleMonster({
	id: 655,
	name: 'Goblin',
	table: GoblinTable,
	aliases: ['goblin']
});
