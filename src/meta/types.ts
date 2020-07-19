import LootTable from '../structures/LootTable';
import { MonsterSlayerMaster } from './monsterData';

export interface SimpleLootItem {
	id: string;
	dropRate: number;
}

export interface MonsterOptions {
	id: number;
	name: string;
	combatLevel?: number;
	hitpoints?: number;
	aliases?: string[];
}

export type AccountType =
	| 'normal'
	| 'ironman'
	| 'ultimate'
	| 'hardcore'
	| 'deadman'
	| 'seasonal'
	| undefined;

export interface Player {
	bossRecords: BossRecords;
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

export interface BossRecords {
	abyssalSire: MinigameScore;
	alchemicalHydra: MinigameScore;
	barrowsChests: MinigameScore;
	bryophyta: MinigameScore;
	callisto: MinigameScore;
	cerberus: MinigameScore;
	chambersofXeric: MinigameScore;
	chambersofXericChallengeMode: MinigameScore;
	chaosElemental: MinigameScore;
	chaosFanatic: MinigameScore;
	commanderZilyana: MinigameScore;
	corporealBeast: MinigameScore;
	crazyArchaeologist: MinigameScore;
	dagannothPrime: MinigameScore;
	dagannothRex: MinigameScore;
	dagannothSupreme: MinigameScore;
	derangedArchaeologist: MinigameScore;
	generalGraardor: MinigameScore;
	giantMole: MinigameScore;
	grotesqueGuardians: MinigameScore;
	hespori: MinigameScore;
	kalphiteQueen: MinigameScore;
	kingBlackDragon: MinigameScore;
	kraken: MinigameScore;
	kreeArra: MinigameScore;
	krilTsutsaroth: MinigameScore;
	mimic: MinigameScore;
	sarachnis: MinigameScore;
	scorpia: MinigameScore;
	skotizo: MinigameScore;
	theGauntlet: MinigameScore;
	theCorruptedGauntlet: MinigameScore;
	theatreofBlood: MinigameScore;
	thermonuclearSmokeDevil: MinigameScore;
	tzKalZuk: MinigameScore;
	tzTokJad: MinigameScore;
	venenatis: MinigameScore;
	vetion: MinigameScore;
	vorkath: MinigameScore;
	wintertodt: MinigameScore;
	zalcano: MinigameScore;
	zulrah: MinigameScore;
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

export interface ItemRequirements {
	attack: number;
	defence: number;
	strength: number;
	hitpoints: number;
	ranged: number;
	prayer: number;
	magic: number;
	cooking: number;
	woodcutting: number;
	fletching: number;
	fishing: number;
	firemaking: number;
	crafting: number;
	smithing: number;
	mining: number;
	herblore: number;
	agility: number;
	thieving: number;
	slayer: number;
	farming: number;
	runecrafting: number;
	hunter: number;
	construction: number;
	combat: number;
}

/**
 * The equipment bonuses of equipable armour/weapons.
 */
export interface ItemEquipment {
	attack_stab: number;
	attack_slash: number;
	attack_crush: number;
	attack_magic: number;
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
	slot: EquipmentSlot;
	requirements: ItemRequirements | null;
}

export enum EquipmentSlot {
	TwoHanded = '2h',
	Ammo = 'ammo',
	Body = 'body',
	Cape = 'cape',
	Feet = 'feet',
	Hands = 'hands',
	Head = 'head',
	Legs = 'legs',
	Neck = 'neck',
	Ring = 'ring',
	Shield = 'shield',
	Weapon = 'weapon'
}

/**
 * The information about weapon properties.
 */

export interface ItemWeaponStance {
	combat_style: string;
	attack_type: string;
	attack_style: string;
	experience: string;
	boosts: string;
}

export interface ItemWeapon {
	attack_speed: number;
	weapon_type: string;
	stances: ItemWeaponStance[];
}

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
	 * If the item has incomplete wiki data.
	 */
	incomplete: boolean;
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
	 * If the item is stacked, indicated by the stack count.
	 */
	stacked: number | null;
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
	equipment: ItemEquipment | null;
	weapon: ItemWeapon | null;
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

export interface Poll {
	title: string;
	description: string;
	datePosted: number;
	totalVotes: number;
	year: number;
	questions: PollQuestion[];
	url: string;
}

export interface PollQuestion {
	question: string;
	results: PollResult[];
}

export interface PollResult {
	voteOption: string;
	percentOfTotal: number;
	voteCount: number;
}

export interface ItemBank {
	[key: number]: number;
}

export interface StringKeyedBank {
	[key: string]: number;
}

export interface SimpleTableItem<T> {
	item: T;
	weight: number;
}

export interface ReturnedLootItem {
	item: number;
	quantity: number;
}

export interface LootTableItem {
	item: number | LootTable | LootTableItem[];
	weight?: number;
	quantity: number | number[];
}

export interface OneInItems extends LootTableItem {
	chance: number;
}

export type TupleLootItem = [number, number];

export interface MonsterKillOptions {
	/**
	 * This is *true* if the monster is being killed inside the catacombs.
	 */
	inCatacombs?: boolean;
	/**
	 * This is *true* if the monster is being killed inside the wilderness.
	 */
	inWilderness?: boolean;
	/**
	 * This is *true* if the monster being killed is on-task.
	 */
	onSlayerTask?: boolean;
	/**
	 * This is the assigner of this task, if on a task.
	 */
	slayerMaster?: MonsterSlayerMaster;
	/**
	 * Needed for Hespori
	 */
	farmingLevel?: number;
}

export interface OpenableOptions {
	id: number;
	name: string;
	aliases: string[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface OpenableOpenOptions {}

export interface LootTableOptions {
	limit?: number;
}
