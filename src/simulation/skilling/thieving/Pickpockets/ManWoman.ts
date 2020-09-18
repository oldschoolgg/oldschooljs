import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const Man = new LootTable().add('Coins', 3);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Man',
	table: Man,
	aliases: ['man', 'woman']
});
