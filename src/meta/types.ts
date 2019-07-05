export interface MonsterOptions {
	id: string;
	name: string;
	aliases: string[];
}

export interface SimpleLootItem {
	id: string;
	dropRate: number;
}

export type AccountType = 'normal' | 'ironman' | 'ultimate' | 'hardcore' | 'deadman' | 'seasonal';

export interface Player {
	username: string;
	type: AccountType;
	skills: SkillsScore;
	minigames: MinigamesScore;
}

export interface SkillsScore {
	overall: SkillScore;
	attack: SkillScore;
	defence: SkillScore;
	strength: SkillScore;
	hitpoints: SkillScore;
	ranged: SkillScore;
	prayer: SkillScore;
	magic: SkillScore;
	cooking: SkillScore;
	woodcutting: SkillScore;
	fletching: SkillScore;
	fishing: SkillScore;
	firemaking: SkillScore;
	crafting: SkillScore;
	smithing: SkillScore;
	mining: SkillScore;
	herblore: SkillScore;
	agility: SkillScore;
	thieving: SkillScore;
	slayer: SkillScore;
	farming: SkillScore;
	runecrafting: SkillScore;
	hunter: SkillScore;
	construction: SkillScore;
}

export interface MinigamesScore {
	Bounty_Hunter: MinigameScore;
	Bounty_Hunter_Rogues: MinigameScore;
	LMS: MinigameScore;
	Clue_Scrolls_All: MinigameScore;
	Clue_Scrolls_Beginner: MinigameScore;
	Clue_Scrolls_Easy: MinigameScore;
	Clue_Scrolls_Medium: MinigameScore;
	Clue_Scrolls_Hard: MinigameScore;
	Clue_Scrolls_Elite: MinigameScore;
	Clue_Scrolls_Master: MinigameScore;
}

export interface MinigameScore {
	rank: number;
	score: number;
}

export interface SkillScore {
	rank: number;
	level: number;
	xp: number;
}

export type ItemID = number;

export interface Item {
	id: number;
	name: string;
	members?: boolean;
	tradeable?: boolean;
	tradeable_on_ge?: boolean;
	stackable?: boolean;
	noted?: boolean;
	noteable?: boolean;
	linked_id?: number;
	placeholder?: boolean;
	equipable?: boolean;
	equipable_by_player?: boolean;
	cost?: number;
	lowalch?: number;
	highalch?: number;
	weight?: number;
	buy_limit?: number;
	quest_item?: boolean;
	release_date?: string;
	examine?: string;
	url?: string;
	equipment?: {
		attack_stab: number;
		attack_slash: number;
		attack_crush: number;
		attack_magi: number;
		attack_ranged: number;
		defence_stab: number;
		defence_slash: number;
		defence_crush: number;
		defence_magic: number;
		defence_ranged: number;
		melee_strength: number;
		ranged_strength: number;
		magic_damage: number;
		prayer: number;
		slot: string;
		requirements?: any;
	};

	weapon?: {
		attack_speed: number;
		weapon_type: string;
		stances: any[];
	};
}

export interface NewsItem {
	title: string;
	link: string;
	date: string;
	image?: string;
	category: string;
	month: number;
	year: number;
	day: number;
	timestamp: number;
}

export interface PageContent {
	content: string;
	description: string;
}

export interface DateYearMonth {
	year: number;
	month: number;
}
