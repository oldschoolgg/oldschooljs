import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const Elf = new LootTable()
	.add('Coins', [280, 350], 1 / 1.219)
	.add('Death rune', [1, 2], 1 / 16)
	.add('Jug of wine', 1, 1 / 21.33)
	.add('Nature rune', [1, 3], 1 / 25.6)
	.add('Fire orb', 1, 1 / 64)
	.add('Diamond', 1, 1 / 128)
	.add('Gold ore', 1, 1 / 128);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Elf',
	table: Elf
});
