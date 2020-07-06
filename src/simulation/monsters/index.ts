import GeneralGraardor from './gwd/GeneralGraardor';
import CommanderZilyana from './gwd/CommanderZilyana';
import Kreearra from './gwd/Kreearra';
import KrilTsutsaroth from './gwd/KrilTsutsaroth';
import Collection from '../../structures/Collection';
import Monster from '../../structures/Monster';

import BossMonsters from './bosses';
import SpecialMonsters from './special';
import LowMonsters from './low';
import WildyMonsters from './wildy';

const monstersObject = {
	...BossMonsters,
	GeneralGraardor,
	CommanderZilyana,
	Kreearra,
	KrilTsutsaroth,
	...LowMonsters,
	...SpecialMonsters,
	...WildyMonsters
};

const allMonsters: [number, Monster][] = Object.values(monstersObject).map(monster => [
	monster.id,
	monster
]);

class MonstersCollection extends Collection<number, Monster> {
	constructor(entries: [number, Monster][]) {
		super(entries);
	}
}

const Monsters = Object.assign(new MonstersCollection(allMonsters), monstersObject);
export default Monsters;
