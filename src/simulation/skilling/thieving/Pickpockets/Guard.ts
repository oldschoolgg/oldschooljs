import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const Guard = new LootTable().add('Coins', 30);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Guard',
	table: Guard
});
