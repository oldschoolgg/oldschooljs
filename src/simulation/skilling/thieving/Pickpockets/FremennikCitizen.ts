import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const FremennikCitizen = new LootTable().add('Coins', 40);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Fremennik citizen',
	table: FremennikCitizen,
	aliases: ['Fremennik']
});
