import Collection from '../../structures/Collection';
import Monster from '../../structures/Monster';
import { allBosses } from './bosses';
import { CreatureCreation } from './CreatureCreation';
import { allLowMonsters } from './low';
import { specialBosses } from './special';
import { allSuperiorMonsters } from './superiorMonsters';

const monstersObject = {
	...allBosses,
	...allLowMonsters,
	...specialBosses,
	...allSuperiorMonsters,
	...CreatureCreation
};

const allMonsters: [number, Monster][] = Object.values(monstersObject).map((monster: Monster) => [monster.id, monster]);

class MonstersCollection extends Collection<number, Monster> {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(entries: [number, Monster][]) {
		super(entries);
	}
}

const Monsters = Object.assign(new MonstersCollection(allMonsters), monstersObject);

export default Monsters;
