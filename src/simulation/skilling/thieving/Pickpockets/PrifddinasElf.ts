import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';
import Elf from './Elf';

const PrifddinasElf = new LootTable()
	.add('Crystal shard', 1, 1 / 35)
	.add('Enhanced crystal teleport seed', 1, 1 / 1024)
	.add(Elf.table, 1);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Prifddinas Elf',
	table: PrifddinasElf,
	aliases: ['prif elf', 'elf prif', 'prif']
});
