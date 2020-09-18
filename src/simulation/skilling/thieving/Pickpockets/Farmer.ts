import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const Farmer = new LootTable().add('Coins', 9, 98).add('Potato seed', 1, 2);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Farmer',
	table: Farmer
});
