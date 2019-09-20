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
	clues: CluesScore;
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
	bountyHunter: MinigameScore;
	bountyHunterRogue: MinigameScore;
	LMS: MinigameScore;
}

export interface CluesScore {
	all: MinigameScore;
	beginner: MinigameScore;
	easy: MinigameScore;
	medium: MinigameScore;
	hard: MinigameScore;
	elite: MinigameScore;
	master: MinigameScore;
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
/**
 * The equipment bonuses of equipable armour/weapons.
 */
export type ItemEquipment = {
	[k: string]: any;
} | null;
/**
 * The information about weapon properties.
 */
export type ItemWeapon = {
	[k: string]: any;
} | null;

/**
 * A representation of an Old School RuneScape (OSRS) item.
 */
export interface Item {
	/**
	 * Unique OSRS item ID number.
	 */
	id: number;
	/**
	 * Name of the item.
	 */
	name: string;
	/**
	 * If the item is a members-only.
	 */
	members: boolean;
	/**
	 * If the item is tradeable (between players and on the GE).
	 */
	tradeable: boolean;
	/**
	 * If the item is tradeable (only on GE).
	 */
	tradeable_on_ge: boolean;
	/**
	 * If the item is stackable (in inventory).
	 */
	stackable: boolean;
	/**
	 * If the item is noted.
	 */
	noted: boolean;
	/**
	 * If the item is noteable.
	 */
	noteable: boolean;
	/**
	 * The linked ID of the actual item (if noted/placeholder).
	 */
	linked_id_item: number | null;
	/**
	 * The linked ID of an item in noted form.
	 */
	linked_id_noted: number | null;
	/**
	 * The linked ID of an item in placeholder form.
	 */
	linked_id_placeholder: number | null;
	/**
	 * If the item is a placeholder.
	 */
	placeholder: boolean;
	/**
	 * If the item is equipable (based on right-click menu entry).
	 */
	equipable: boolean;
	/**
	 * If the item is equipable by a player and is equipable in-game.
	 */
	equipable_by_player: boolean;
	/**
	 * The store price of an item.
	 */
	cost: number;
	/**
	 * The low alchemy value of the item (cost * 0.4).
	 */
	lowalch: number;
	/**
	 * The high alchemy value of the item (cost * 0.6).
	 */
	highalch: number;
	/**
	 * The weight (in kilograms) of the item.
	 */
	weight: number | null;
	/**
	 * The GE buy limit of the item.
	 */
	buy_limit: number | null;
	/**
	 * If the item is associated with a quest.
	 */
	quest_item: boolean;
	/**
	 * Date the item was released (in ISO8601 format).
	 */
	release_date: string | null;
	/**
	 * If the item is a duplicate.
	 */
	duplicate?: boolean;
	/**
	 * The examine text for the item.
	 */
	examine: string | null;
	/**
	 * The OSRS Wiki name for the item.
	 */
	wiki_name: string | null;
	/**
	 * The OSRS Wiki URL (possibly including anchor link).
	 */
	wiki_url: string | null;
	equipment: ItemEquipment;
	weapon?: ItemWeapon;
	[k: string]: any;
}

export interface PartialItem {
	/**
	 * Unique OSRS item ID number.
	 */
	id: number;
	/**
	 * Name of the item.
	 */
	name: string;
}

export interface NewsItem {
	title: string;
	link: string;
	image?: string;
	category: string;
	month: number;
	year: number;
	day: number;
	date: number;
}

export interface PageContent {
	content: string;
	description: string;
}

export interface DateYearMonth {
	year: number;
	month: number;
}

export interface WikiPage {
	image?: string;
	lastRevisionID: number;
	url: string;
	pageID: number;
	title: string;
	extract?: string;
	categories: {
		title: string;
		ns: number;
	}[];
}

export type WorldLocation = 'Australia' | 'United Kingdom' | 'Germany' | 'United States';

export interface World {
	number: number;
	players: number;
	location: WorldLocation;
	members: boolean;
	activity: string;
}
