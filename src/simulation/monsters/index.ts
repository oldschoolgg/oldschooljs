import Collection from '../../structures/Collection';
import Monster from '../../structures/Monster';
import Cerberus from './bosses/Cerberus';
import CorporealBeast from './bosses/CorporealBeast';
import DagannothPrime from './bosses/DagannothPrime';
import DagannothRex from './bosses/DagannothRex';
import DagannothSupreme from './bosses/DagannothSupreme';
import GiantMole from './bosses/GiantMole';
import KalphiteQueen from './bosses/KalphiteQueen';
import Obor from './bosses/Obor';
import Vorkath from './bosses/Vorkath';
import Zulrah from './bosses/Zulrah';
import CommanderZilyana from './gwd/CommanderZilyana';
import GeneralGraardor from './gwd/GeneralGraardor';
import Kreearra from './gwd/Kreearra';
import KrilTsutsaroth from './gwd/KrilTsutsaroth';
import LowMonsters from './low';
import SpecialMonsters from './special';
import Callisto from './wildy/Callisto';
import ChaosElemental from './wildy/ChaosElemental';
import ChaosFanatic from './wildy/ChaosFanatic';
import CrazyArchaeologist from './wildy/CrazyArchaeologist';
import KingBlackDragon from './wildy/KingBlackDragon';
import Scorpia from './wildy/Scorpia';
import Venenatis from './wildy/Venenatis';
import Vetion from './wildy/Vetion';

const monstersObject = {
	DagannothPrime,
	DagannothRex,
	DagannothSupreme,
	Cerberus,
	GiantMole,
	Vorkath,
	Zulrah,
	GeneralGraardor,
	CommanderZilyana,
	Kreearra,
	KrilTsutsaroth,
	Callisto,
	ChaosElemental,
	ChaosFanatic,
	KingBlackDragon,
	Scorpia,
	Venenatis,
	Vetion,
	CrazyArchaeologist,
	CorporealBeast,
	KalphiteQueen,
	Obor,
	...LowMonsters,
	...SpecialMonsters
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
