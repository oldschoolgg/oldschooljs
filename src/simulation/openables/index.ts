import Collection from '../../structures/Collection';
import Openable from '../../structures/Openable';
import GiantEggSacFull from './GiantEggSacFull';
import GrandHallowedCoffin from './GrandHallowedCoffin';
import LuckyImp from './LuckyImp';
import MysteryBox from './MysteryBox';
import NestBoxEmpty from './NestBoxEmpty';
import NestBoxRing from './NestBoxRing';
import NestBoxSeeds from './NestBoxSeeds';

const openablesObject = {
	LuckyImp,
	MysteryBox,
	GrandHallowedCoffin,
	NestBoxEmpty,
	NestBoxRing,
	NestBoxSeeds
};

const allMonsters: [number, Openable][] = Object.values(openablesObject).map((openable) => [
	openable.id,
	openable
]);

class OpenablesCollection extends Collection<number, Openable> {
	constructor(entries: [number, Openable][]) {
		super(entries);
	}
}

const Openables = Object.assign(new OpenablesCollection(allMonsters), openablesObject);
export default Openables;
