import Collection from '../../structures/Collection';
import BrimstoneChest from './BrimstoneChest';
import Casket from './Casket';
import CrystalChest from './CrystalChest';
import ElvenCrystalChest from './ElvenCrystalChest';
import GrubbyChest from './GrubbyChest';
import { BronzeHAMChest, IronHAMChest, SilverHAMChest, SteelHAMChest } from './HAMStoreRoomChests';
import LarransChest from './LarransChest';
import LuckyImp from './LuckyImp';
import MuddyChest from './MuddyChest';
import MysteryBox from './MysteryBox';
import OgreCoffin from './OgreCoffin';
import SeedPack from './SeedPack';
import SinisterChest from './SinisterChest';

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
