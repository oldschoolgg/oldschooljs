import DagannothPrime from './bosses/DagannothPrime';
import DagannothRex from './bosses/DagannothRex';
import DagannothSupreme from './bosses/DagannothSupreme';
import Cerberus from './slayer/Cerberus';
import LuckyImp from './special/LuckyImp';
import GiantMole from './bosses/GiantMole';
import Goblin from './low/Goblin';
import Guard from './low/Guard';
import Vorkath from './bosses/Vorkath';
import Zulrah from './bosses/Zulrah';
import Barrows from './special/Barrows';
import GeneralGraardor from './gwd/GeneralGraardor';
import CommanderZilyana from './gwd/CommanderZilyana';
import Kreearra from './gwd/Kreearra';
import KrilTsutsaroth from './gwd/KrilTsutsaroth';
import Man from './low/Man';
import Woman from './low/Woman';
import Callisto from './wildy/Callisto';
import ChaosElemental from './wildy/ChaosElemental';
import ChaosFanatic from './wildy/ChaosFanatic';
import KingBlackDragon from './wildy/KingBlackDragon';
import Scorpia from './wildy/Scorpia';
import Venenatis from './wildy/Venenatis';
import Vetion from './wildy/Vetion';
import CrazyArchaeologist from './wildy/CrazyArchaeologist';
import Collection from '../structures/Collection';
import Monster from '../structures/Monster';
import KalphiteWorker from './nieve/KalphiteWorker';
import KalphiteQueen from './bosses/KalphiteQueen';
import Kurask from './nieve/Kurask';
import Lizardman from './nieve/Lizardman';
import LizardmanShaman from './nieve/LizardmanShaman';
import LocustRider from './nieve/LocustRider';
import ScarabMage from './nieve/ScarabMage';
import MithrilDragon from './nieve/MithrilDragon';
import MutatedZygomite from './nieve/MutatedZygomite';
import Nechryael from './nieve/Nechryael';
import RedDragon from './nieve/RedDragon';
import RuneDragon from './nieve/RuneDragon';
import SkeletalWyvern from './nieve/SkeletalWyvern';
import SmokeDevil from './nieve/SmokeDevil';
import ThermonuclearSmokeDevil from './nieve/ThermonuclearSmokeDevil';
import SpiritualMage from './nieve/SpiritualMage';
import SpiritualRanger from './nieve/SpiritualRanger';
import SpiritualWarrior from './nieve/SpiritualWarrior';
import SteelDragon from './nieve/SteelDragon';
import Suqah from './nieve/Suqah';
import MountainTroll from './nieve/MountainTroll';
import Turoth from './nieve/Turoth';
import Wyrm from './nieve/Wyrm';
import BasiliskKnight from './nieve/BasiliskKnight';
import AbyssalSire from './bosses/AbyssalSire';
import DemonicGorilla from './nieve/DemonicGorilla';
import GrotesqueGuardians from './bosses/GrotesqueGuardians';
import TzTokJad from './special/TzTokJad';
import TzKalZuk from './special/TzKalZuk';
import CorporealBeast from './bosses/CorporealBeast';

const monstersObject = {
	DagannothPrime,
	DagannothRex,
	DagannothSupreme,
	Cerberus,
	LuckyImp,
	GiantMole,
	Goblin,
	Guard,
	Vorkath,
	Zulrah,
	Barrows,
	GeneralGraardor,
	CommanderZilyana,
	Kreearra,
	KrilTsutsaroth,
	Man,
	Woman,
	Callisto,
	ChaosElemental,
	ChaosFanatic,
	KingBlackDragon,
	Scorpia,
	Venenatis,
	Vetion,
	CrazyArchaeologist,
	KalphiteWorker,
	KalphiteQueen,
	Kurask,
	Lizardman,
	LizardmanShaman,
	LocustRider,
	ScarabMage,
	MithrilDragon,
	MutatedZygomite,
	Nechryael,
	RedDragon,
	RuneDragon,
	SkeletalWyvern,
	SmokeDevil,
	ThermonuclearSmokeDevil,
	SpiritualMage,
	SpiritualRanger,
	SpiritualWarrior,
	SteelDragon,
	Suqah,
	MountainTroll,
	Turoth,
	Wyrm,
	BasiliskKnight,
	AbyssalSire,
	DemonicGorilla,
	GrotesqueGuardians,
	TzTokJad,
	TzKalZuk,
	CorporealBeast
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
