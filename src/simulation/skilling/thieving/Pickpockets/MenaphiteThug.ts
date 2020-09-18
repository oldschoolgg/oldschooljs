import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const MenaphiteThug = new LootTable().add('Coins', 60);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Menaphite Thug',
	table: MenaphiteThug,
	aliases: ['menaphite', 'thug']
});
