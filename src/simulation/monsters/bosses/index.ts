import CommanderZilyana from './CommanderZilyana';
import DagannothPrime from './DagannothPrime';
import DagannothRex from './DagannothRex';
import DagannothSupreme from './DagannothSupreme';
import GeneralGraardor from './GeneralGraardor';
import GiantMole from './GiantMole';
import KalphiteQueen from './KalphiteQueen';
import Kreearra from './Kreearra';
import KrilTsutsaroth from './KrilTsutsaroth';
import Obor from './Obor';
import Sarachnis from './Sarachnis';
import { allSlayerBosses } from './slayer';
import Vorkath from './Vorkath';
import { allWildyBosses } from './wildy';
import CorporealBeast from './wildy/CorporealBeast';
import Zulrah from './Zulrah';

export const allBosses = {
	CorporealBeast,
	DagannothPrime,
	DagannothRex,
	DagannothSupreme,
	GiantMole,
	KalphiteQueen,
	Obor,
	Sarachnis,
	Vorkath,
	Zulrah,
	CommanderZilyana,
	GeneralGraardor,
	Kreearra,
	KrilTsutsaroth,
	...allWildyBosses,
	...allSlayerBosses
};
