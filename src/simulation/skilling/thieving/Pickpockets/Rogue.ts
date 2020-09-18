import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const Rogue = new LootTable()
	// Weaponry
	.add('Iron dagger(p)', 9, 1 / 128)
	// Other
	.add('Coins', [25, 40], 1 / 1.185)
	.add('Air rune', 8, 1 / 16)
	.add('Jug of wine', 1, 1 / 21.33)
	.add('Lockpick', 1, 1 / 25.6);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Rogue',
	table: Rogue
});
