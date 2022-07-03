import b from 'benny';

import { makelootTableClass } from './benchmark';
import * as constants from './constants';
import { MonsterSlayerMaster } from './meta/monsterData';
import { MonsterKillOptions } from './meta/types';
import * as Clues from './simulation/clues';
import * as Misc from './simulation/misc';
import Monsters from './simulation/monsters/index';
import Openables from './simulation/openables/index';
import Bank from './structures/Bank';
import Hiscores from './structures/Hiscores';
import Items from './structures/Items';
import LootTable from './structures/LootTable';
import NewLootTable from './structures/NewLootTable';
import News from './structures/News';
import Player from './structures/Player';
import Polls from './structures/Polls';
import Wiki from './structures/Wiki';
import Worlds from './structures/Worlds';
import * as Util from './util/';

export {
	Bank,
	Clues,
	constants,
	Hiscores,
	Items,
	LootTable,
	Misc,
	MonsterKillOptions,
	Monsters,
	MonsterSlayerMaster,
	News,
	Openables,
	Player,
	Polls,
	Util,
	Wiki,
	Worlds
};

const old = makelootTableClass(LootTable);
const newTable = makelootTableClass(NewLootTable);
const oldSmall = makelootTableClass(LootTable, true);
const newTableSmall = makelootTableClass(NewLootTable, true);

b.suite(
	'Suite one',

	b.add('Old', () => {
		old.roll();
		oldSmall.roll();
	}),

	b.add('New', () => {
		newTable.roll();
		newTableSmall.roll();
	}),
	b.cycle(),
	b.complete(),
	b.save({ file: 'reduce' })
);
