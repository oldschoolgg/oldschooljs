import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const CaveGoblin = new LootTable()
	// Dorgeshuun cuisine
	.add('Bat shish', 1, 1 / 20)
	.add("Coated frogs' legs", 1, 1 / 20)
	.add('Fingers', 1, 1 / 20)
	.add('Frogburger', 1, 1 / 20)
	.add('Frogspawn gumbo', 1, 1 / 20)
	.add('Green gloop soup', 1, 1 / 20)
	// Other
	.add('Coins', [10, 50], 1 / 2.857)
	.add('Bullseye lantern', 1, 1 / 20)
	.add('Cave goblin wire', 1, 1 / 20)
	.add('Iron ore', [1, 4], 1 / 20)
	.add('Oil lantern', 1, 1 / 20)
	.add('Swamp tar', 1, 1 / 20)
	.add('Tinderbox', 1, 1 / 20)
	.add('Unlit torch', 1, 1 / 20);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Cave Goblin',
	aliases: ['goblin'],
	table: CaveGoblin
});
