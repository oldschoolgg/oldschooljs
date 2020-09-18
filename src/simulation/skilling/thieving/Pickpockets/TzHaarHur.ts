import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const TzHaarHur = new LootTable()
	.add('Tokkul', [3, 7], 182)
	.add('Uncut sapphire', 1, 5)
	.add('Uncut emerald', 1, 4)
	.add('Uncut ruby', 1, 3)
	.add('Uncut diamond', 1, 1);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'TzHaar-Hur',
	table: TzHaarHur
});
