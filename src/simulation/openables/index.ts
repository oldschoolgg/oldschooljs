import Openable from '../../structures/Openable';
import Collection from '../../structures/Collection';

import MysteryBox from './MysteryBox';
import LuckyImp from './LuckyImp';

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
