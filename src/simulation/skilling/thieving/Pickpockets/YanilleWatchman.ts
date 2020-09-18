import LootTable from '../../../../structures/LootTable';
import SimpleSkill from '../../../../structures/SimpleSkill';
import { SkillsEnum } from '../../../../constants';

const YanilleWatchman = new LootTable().add(
	[
		['Bread', 1],
		['Coins', 60]
	],
	1
);

export default new SimpleSkill({
	skill: SkillsEnum.Thieving,
	name: 'Yanille Watchman',
	table: YanilleWatchman,
	aliases: ['yanille', 'watchman']
});
