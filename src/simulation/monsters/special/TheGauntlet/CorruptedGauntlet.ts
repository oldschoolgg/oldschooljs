import { roll } from 'e'

import { MonsterKillOptions } from '../../../../meta/types'
import Bank from '../../../../structures/Bank'
import Monster from '../../../../structures/Monster'

export class CorruptedGauntletClass extends Monster {
	public kill(quantity = 1, options: MonsterKillOptions = {}): Bank {
		const loot = new Bank();

	return loot;
	}
}