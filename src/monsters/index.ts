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
import AberrantSpectre from './nieve/AberrantSpectre';
import AbyssalDemon from './nieve/AbyssalDemon';
import AdamantDragon from './nieve/AdamantDragon';
import Ankou from './nieve/Ankou';
import Aviansie from './nieve/Aviansie';
import Basilisk from './nieve/Basilisk';
import BlackDemon from './nieve/BlackDemon';
import BlackDragon from './nieve/BlackDragon';
import Bloodveld from './nieve/Bloodveld';
import BlueDragon from './nieve/BlueDragon';
import BrineRat from './nieve/BrineRat';
import CaveHorror from './nieve/CaveHorror';
import CaveKraken from './nieve/CaveKraken';
import Kraken from './nieve/Kraken';
import Dagannoth from './nieve/Dagannoth';
import DarkBeast from './nieve/DarkBeast';
import Drake from './nieve/Drake';
import DustDevil from './nieve/DustDevil';
import ElfWarrior from './nieve/ElfWarrior';
import FireGiant from './nieve/FireGiant';
import FossilIslandWyvernAncient from './nieve/FossilIslandWyvernAncient';
import FossilIslandWyvernLongTailed from './nieve/FossilIslandWyvernLongTailed';
import FossilIslandWyvernSpitting from './nieve/FossilIslandWyvernSpitting';
import FossilIslandWyvernTaloned from './nieve/FossilIslandWyvernTaloned';
import Gargoyle from './nieve/Gargoyle';
import GreaterDemon from './nieve/GreaterDemon';
import Hellhound from './nieve/Hellhound';
import IronDragon from './nieve/IronDragon';
import KalphiteWorker from './nieve/KalphiteWorker';
import KalphiteQueen from './bosses/KalphiteQueen';
import Kurask from './nieve/Kurask';
import Lizardman from './nieve/Lizardman';
import LizardmanShaman from './nieve/LizardmanShaman';
import LocustRider from './nieve/LocustRider';
import MithrilDragon from './nieve/MithrilDragon';
import MutatedZygomite from './nieve/MutatedZygomite';
import Nechryael from './nieve/Nechryael';
import RedDragon from './nieve/RedDragon';
import RuneDragon from './nieve/RuneDragon';
import SkeletalWyvern from './nieve/SkeletalWyvern';
import SmokeDevil from './nieve/SmokeDevil';
import ThermonuclearSmokeDevil from './nieve/ThermonuclearSmokeDevil';
import SpiritualMage from './nieve/SpiritualMage';
import SteelDragon from './nieve/SteelDragon';
import Suqah from './nieve/Suqah';
import MountainTroll from './nieve/MountainTroll';
import Turoth from './nieve/Turoth';
import Wyrm from './nieve/Wyrm';

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
	AberrantSpectre,
	AbyssalDemon,
	AdamantDragon,
	Ankou,
	Aviansie,
	Basilisk,
	BlackDemon,
	BlackDragon,
	Bloodveld,
	BlueDragon,
	BrineRat,
	CaveHorror,
	CaveKraken,
	Kraken,
	Dagannoth,
	DarkBeast,
	Drake,
	DustDevil,
	ElfWarrior,
	FireGiant,
	FossilIslandWyvernAncient,
	FossilIslandWyvernLongTailed,
	FossilIslandWyvernSpitting,
	FossilIslandWyvernTaloned,
	Gargoyle,
	GreaterDemon,
	Hellhound,
	IronDragon,
	KalphiteWorker,
	KalphiteQueen,
	Kurask,
	Lizardman,
	LizardmanShaman,
	LocustRider,
	MithrilDragon,
	MutatedZygomite,
	Nechryael,
	RedDragon,
	RuneDragon,
	SkeletalWyvern,
	SmokeDevil,
	ThermonuclearSmokeDevil,
	SpiritualMage,
	SteelDragon,
	Suqah,
	MountainTroll,
	Turoth,
	Wyrm
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
