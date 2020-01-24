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
import Dagannoth from './nieve/Dagannoth';
import DarkBeast from './nieve/DarkBeast';
import Drake from './nieve/Drake';
import DustDevil from './nieve/DustDevil';
import ElfWarrior from './nieve/ElfWarrior';
import FireGiant from './nieve/FireGiant';
import FossilIslandWyvernAncient from './nieve/FossiIslandWyvernAncient';
import FossilIslandWyvernLongTailed from './nieve/FossiIslandWyvernLongTailed';
import FossilIslandWyvernSpitting from './nieve/FossiIslandWyvernSpitting';
import FossilIslandWyvernTaloned from './nieve/FossiIslandWyvernTaloned';

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
	Dagannoth,
	DarkBeast,
	Drake,
	DustDevil,
	ElfWarrior,
	FireGiant,
	FossilIslandWyvernAncient,
	FossilIslandWyvernLongTailed,
	FossilIslandWyvernSpitting,
	FossilIslandWyvernTaloned
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
