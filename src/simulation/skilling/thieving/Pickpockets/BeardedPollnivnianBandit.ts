import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const BeardedPollnivnianBandit = new LootTable().add('Coins', 40);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Bearded Pollnivnian Bandit',
	table: BeardedPollnivnianBandit,
	aliases: ['bearded bandit', 'bearded']
});
