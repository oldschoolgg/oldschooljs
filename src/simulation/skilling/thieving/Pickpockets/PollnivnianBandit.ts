import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const PollnivnianBandit = new LootTable().add('Coins', 50);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Pollnivnian Bandit',
	table: PollnivnianBandit
});
