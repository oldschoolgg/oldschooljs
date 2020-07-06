import { MonsterKillOptions, ItemBank } from '../../../meta/types';
import Loot from '../../../structures/Loot';
import { roll } from '../../../util/util';
import Monster from '../../../structures/Monster';

export class TzKalZukClass extends Monster {
	public kill(quantity = 1, options: MonsterKillOptions = {}): ItemBank {
		const loot = new Loot();

		for (let i = 0; i < quantity; i++) {
			loot.add('Tokkul', 16_440);
			loot.add('Inferno cape');
			if (roll(options.onSlayerTask ? 75 : 100)) {
				loot.add('Jal-nib-rek');
			}
		}

		return loot.values();
	}
}

const TzKalZuk = new TzKalZukClass({
	id: 7706,
	name: 'TzKal-Zuk',
	aliases: ['tzkal-zuk', 'zuk', 'tzkal zuk', 'inferno']
});

export default TzKalZuk;
