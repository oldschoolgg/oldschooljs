import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const DesertBandit = new LootTable()
	.add('Coins', 30, 70)
	.add('Antipoison(1)', 1, 15)
	.add('Lockpick', 1, 15);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Desert Bandit',
	table: DesertBandit
});
