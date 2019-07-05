import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

import Collection from './Collection';

export type WorldLocation = 'Australia' | 'United Kingdom' | 'Germany' | 'United States';

export interface World {
	number: number;
	players: number;
	location: WorldLocation;
	members: boolean;
	activity: string;
}

class Worlds extends Collection<number, World> {
	public async fetch(number?: number): Promise<World | undefined | void> {
		const html: string = await fetch('http://oldschool.runescape.com/slu?order=WMLPA').then(
			(res): Promise<string> => res.text()
		);

		const dom = new JSDOM(html.replace(/\s+/g, ' ').trim());

		const CollectionOfElements = Array.from(
			dom.window.document.getElementsByClassName('server-list__row')
		);

		for (const WorldRow of CollectionOfElements) {
			const columns = Array.from(WorldRow.children);

			// TODO
			if (
				!columns[0].textContent ||
				!columns[1].textContent ||
				!columns[2].textContent ||
				!columns[3].textContent ||
				!columns[4].textContent
			) {
				throw new Error('World element is missing text content.');
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
