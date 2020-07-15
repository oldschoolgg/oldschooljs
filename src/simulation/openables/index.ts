import Openable from '../../structures/Openable';
import Collection from '../../structures/Collection';
import BronzeHAMChest from './BronzeHAMChest';
import IronHAMChest from './IronHAMChest';
import SilverHAMChest from './SilverHAMChest';
import SteelHAMChest from './SteelHAMChest';
import Casket from './Casket';
import CrystalChest from './CrystalChest';
import ElvenCrystalChest from './ElvenCrystalChest';
import GrubbyChest from './GrubbyChest';
import MuddyChest from './MuddyChest';
import OgreCoffin from './OgreCoffin';
import SinisterChest from './SinisterChest';
import BrimstoneChest from './BrimstoneChest';
import LarransChest from './LarransChest';
import SeedPack from './SeedPack';
import MysteryBox from './MysteryBox';
import LuckyImp from './LuckyImp';

const openablesObject = {
	LuckyImp,
	MysteryBox,
	BronzeHAMChest,
	IronHAMChest,
	SilverHAMChest,
	SteelHAMChest,
	Casket,
	CrystalChest,
	ElvenCrystalChest,
	GrubbyChest,
	MuddyChest,
	OgreCoffin,
	SinisterChest,
	BrimstoneChest,
	LarransChest,
	SeedPack
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
