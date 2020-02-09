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
import CorporealBeast from './bosses/CorporealBeast';
import AberrantSpectre from './slayer/nieve/AberrantSpectre';
import AbyssalDemon from './slayer/nieve/AbyssalDemon';
import AdamantDragon from './slayer/nieve/AdamantDragon';
import Ankou from './slayer/nieve/Ankou';
import Aviansie from './slayer/nieve/Aviansie';
import Basilisk from './slayer/nieve/Basilisk';
import BasiliskKnight from './slayer/nieve/BasiliskKnight';
import BlackDemon from './slayer/nieve/BlackDemon';
import BlackDragon from './slayer/nieve/BlackDragon';
import Bloodveld from './slayer/nieve/Bloodveld';
import BlueDragon from './slayer/nieve/BlueDragon';
import BrineRat from './slayer/nieve/BrineRat';
import CaveHorror from './slayer/nieve/CaveHorror';
import CaveKraken from './slayer/nieve/CaveKraken';
import Dagannoth from './slayer/nieve/Dagannoth';
import DarkBeast from './slayer/nieve/DarkBeast';
import DemonicGorilla from './slayer/nieve/DemonicGorilla';
import Drake from './slayer/nieve/Drake';
import DustDevil from './slayer/nieve/DustDevil';
import ElfWarrior from './slayer/nieve/ElfWarrior';
import FireGiant from './slayer/nieve/FireGiant';
import FossilIslandWyvernAncient from './slayer/nieve/FossilIslandWyvernAncient';
import FossilIslandWyvernLongTailed from './slayer/nieve/FossilIslandWyvernLongTailed';
import FossilIslandWyvernSpitting from './slayer/nieve/FossilIslandWyvernSpitting';
import FossilIslandWyvernTaloned from './slayer/nieve/FossilIslandWyvernTaloned';
import Gargoyle from './slayer/nieve/Gargoyle';
import GreaterDemon from './slayer/nieve/GreaterDemon';
import Hellhound from './slayer/nieve/Hellhound';
import IronDragon from './slayer/nieve/IronDragon';
import KalphiteWorker from './slayer/nieve/KalphiteWorker';
import Kurask from './slayer/nieve/Kurask';

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
	CorporealBeast,
	AberrantSpectre,
	AbyssalDemon,
	AdamantDragon,
	Ankou,
	Aviansie,
	Basilisk,
	BasiliskKnight,
	BlackDemon,
	BlackDragon,
	Bloodveld,
	BlueDragon,
	BrineRat,
	CaveHorror,
	CaveKraken,
	Dagannoth,
	DarkBeast,
	DemonicGorilla,
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
	Kurask
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
