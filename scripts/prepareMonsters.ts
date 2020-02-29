import fetch from 'node-fetch';
import { writeFileSync } from 'fs';
import { Monsters } from '../dist';
import Monster from '../dist/structures/Monster';

const monsterMap: { [key: string]: Monster } = {};

async function prepareMonsters(): Promise<void> {
	const allMonsters: { [key: string]: any } = await fetch(
		`https://raw.githubusercontent.com/osrsbox/osrsbox-db/master/docs/monsters-complete.json`
	).then((res): Promise<any> => res.json());

	const monIDs = new Set(Monsters.map(mon => mon.id));

	for (const mon of Object.values(allMonsters).filter(mon => monIDs.has(mon.id))) {
		delete mon.drops;
		monsterMap[mon.id] = mon;
	}

	writeFileSync('./src/data/monsters_data.json', JSON.stringify(monsterMap, null, 4));
	console.log(
		'Prepared Monsters. Check any new monsters quickly to see that the data looks okay.'
	);
}

prepareMonsters();
