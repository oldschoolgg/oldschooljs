import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const KnightOfArdougne = new LootTable().add('Coins', 50);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Knight of Ardougne',
	table: KnightOfArdougne,
	aliases: ['ardy knight', 'ardougne knight']
});
