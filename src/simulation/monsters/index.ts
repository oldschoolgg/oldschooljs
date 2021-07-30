import Collection from '../../structures/Collection';
import Monster from '../../structures/Monster';
import { allBosses } from './bosses';
import { allLowMonsters } from './low';
import { specialBosses } from './special';
import { allSuperiorMonsters } from './superiorMonsters';

const monstersObject = {
	...allBosses,
	...allLowMonsters,
	...specialBosses,
	...allSuperiorMonsters
};

const allMonsters: [number, Monster][] = Object.values(monstersObject).map((monster) => [
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
