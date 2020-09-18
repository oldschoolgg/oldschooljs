import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const Warrior = new LootTable().add('Coins', 18);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Warrior',
	table: Warrior,
	aliases: ['warrior woman', 'alkharid warrior']
});
