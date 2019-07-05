import { Player as PlayerType, SkillsScore, MinigamesScore, AccountType } from '../../meta/types';

class Player {
	public username: string;
	public skills: SkillsScore;
	public minigames: MinigamesScore;
	public type: AccountType;

	public constructor(player: PlayerType) {
		this.username = player.username;
		this.skills = player.skills;
		this.minigames = player.minigames;
		this.type = player.type;
	}

	public get combatLevel(): number {
		const { defence, ranged, hitpoints, magic, prayer, attack, strength } = this.skills;
		const base = 0.25 * (defence.level + hitpoints.level + Math.floor(prayer.level / 2));
		const melee = 0.325 * (attack.level + strength.level);
		const range = 0.325 * (Math.floor(ranged.level / 2) + ranged.level);
		const mage = 0.325 * (Math.floor(magic.level / 2) + magic.level);
		return Math.floor(base + Math.max(melee, range, mage));
	}
}

export default Player;
