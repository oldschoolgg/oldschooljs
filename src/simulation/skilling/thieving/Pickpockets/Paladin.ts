import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const Paladin = new LootTable().add(
	[
		['Coins', 80],
		['Chaos rune', 2]
	],
	1
);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Paladin',
	table: Paladin
});
