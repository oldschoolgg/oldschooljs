import Monsters from '../simulation/monsters';

export default function monsterID(name: string): number {
	const mon = Monsters.find(mon => mon.name === name);
	if (!mon) {
		throw new Error(`ERROR: Monster ${JSON.stringify(name)} doesnt exist.`);
	}
	return mon.id;
}
