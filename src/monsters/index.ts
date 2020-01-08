import DagannothPrime from './DagannothPrime';
import DagannothRex from './DagannothRex';
import DagannothSupreme from './DagannothSupreme';
import Cerberus from './Cerberus';
import LuckyImplingTable from './LuckyImp';
import GiantMole from './GiantMole';
import Zulrah from './Zulrah';
import Barrows from './Barrows';

export default {
	DagannothPrime,
	DagannothRex,
	DagannothSupreme,
	Cerberus,
	LuckyImp: LuckyImplingTable,
	GiantMole,
	Zulrah,
	Barrows
};

console.log(Barrows.kill(1000));
