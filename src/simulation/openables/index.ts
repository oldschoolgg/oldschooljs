import Collection from '../../structures/Collection';
import Openable from '../../structures/Openable';
import LuckyImp from './LuckyImp';
import MysteryBox from './MysteryBox';

const openablesObject = {
	LuckyImp,
	MysteryBox
};

const allMonsters: [number, Openable][] = Object.values(openablesObject).map(openable => [
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
