import { World, WorldLocation } from '../meta/types';
import getDom from '../util/getDom';
import Collection from './Collection';

class Worlds extends Collection<number, World> {
	public async fetch(number?: number): Promise<World | undefined> {
		const dom = await getDom('http://oldschool.runescape.com/slu?order=WMLPA');

		const CollectionOfElements = Array.from(dom.window.document.getElementsByClassName('server-list__row'));

		for (const WorldRow of CollectionOfElements) {
			const columns = Array.from(WorldRow.children);

			if (
				!columns[0].textContent ||
				!columns[1].textContent ||
				!columns[2].textContent ||
				!columns[3].textContent ||
				!columns[4].textContent
			) {
				continue;
				// throw new Error('World element is missing text content.');
			}

			const worldNumber = parseInt(columns[0].textContent.replace(/\D/g, '')) + 300;
			const world = {
				number: worldNumber,
				players: parseInt(columns[1].textContent.replace(/\D/g, '')),
				location: columns[2].textContent as WorldLocation,
				members: columns[3].textContent === 'Members',
				activity: columns[4].textContent
			};

			this.set(worldNumber, world);
		}

		if (number) return this.get(number);
	}

	public get(number: number): World | undefined {
		if (number < 300) {
			number += 300;
		}
		return super.get(number);
	}
}

export default new Worlds();
