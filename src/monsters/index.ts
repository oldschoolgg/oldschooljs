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
import Banshee from './turael/Banshee';
import Bat from './turael/Bat';
import CaveBug from './turael/Cavebug';
import Bear from './turael/Bear';
import CaveCrawler from './turael/CaveCrawler';
import CaveSlime from './turael/CaveSlime';
import Cow from './turael/Cow';
import CrawlingHand from './turael/CrawlingHand';
import Dog from './turael/Dog';
import Dwarf from './turael/Dwarf';
import Ghost from './turael/Ghost';
import KalphiteWorker from './turael/KalphiteWorker';
import Lizard from './turael/Lizard';
import Minotaur from './turael/Minotaur';
import Monkey from './turael/Monkey';
import Rat from './turael/Rat';
import Scorpion from './turael/Scorpion';
import Skeleton from './turael/Skeleton';
import Spider from './turael/Spider';
import Wolf from './turael/Wolf';
import Zombie from './turael/Zombie';

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
	Banshee,
	Bat,
	CaveBug,
	Bear,
	CaveCrawler,
	CaveSlime,
	Cow,
	CrawlingHand,
	Dog,
	Dwarf,
	Ghost,
	KalphiteWorker,
	Lizard,
	Minotaur,
	Monkey,
	Rat,
	Scorpion,
	Skeleton,
	Spider,
	Wolf,
	Zombie
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
