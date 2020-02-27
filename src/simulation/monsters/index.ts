import DagannothPrime from './bosses/DagannothPrime';
import DagannothRex from './bosses/DagannothRex';
import DagannothSupreme from './bosses/DagannothSupreme';
import Cerberus from './slayer/Cerberus';
import GiantMole from './bosses/GiantMole';
import Goblin from './low/Goblin';
import Guard from './low/Guard';
import Vorkath from './bosses/Vorkath';
import Zulrah from './bosses/Zulrah';
import Barrows from './Barrows';
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
import Collection from '../../structures/Collection';
import Monster from '../../structures/Monster';
import CorporealBeast from './bosses/CorporealBeast';
import KalphiteQueen from './bosses/KalphiteQueen';

const monstersObject = {
	DagannothPrime,
	DagannothRex,
	DagannothSupreme,
	Cerberus,
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
	KalphiteQueen
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
