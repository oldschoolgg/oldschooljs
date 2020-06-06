import { MonsterKillOptions, ItemBank } from '../../../meta/types';
import Loot from '../../../structures/Loot';
import { roll } from '../../../util/util';
import Monster from '../../../structures/Monster';

export class TzTokJadClass extends Monster {
	public kill(quantity = 1, options: MonsterKillOptions = {}): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			loot.add('Tokkul', 8032);
			loot.add('Fire cape');
			if (roll(options.onSlayerTask ? 100 : 200)) {
				loot.add('Tzrek-jad');
			}
		}

		return loot.values();
	}
}

const TzTokJad = new TzTokJadClass({
	id: 3127,
	name: 'TzTok-Jad',
	aliases: ['tztok-jad', 'jad', 'tztok jad']
});

export default TzTokJad;
