import type { MINIGAMES, hiscoreURLs, mappedBossNames } from "../constants";
import type Bank from "../structures/Bank";
import type LootTable from "../structures/LootTable";
import type { LootTableRollOptions } from "../structures/LootTable";
import type SimpleMonster from "../structures/SimpleMonster";
import type { MonsterSlayerMaster } from "./monsterData";
type ChestSize = "big" | "small";
type SeedTier = "1" | "2" | "3" | "4" | "5";
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
    allItems?: number[];
}
export interface Player {
    bossRecords: BossRecords;
    username: string;
    type: keyof typeof hiscoreURLs;
    skills: SkillsScore;
    minigames: MinigamesScore;
    clues: CluesScore;
    leaguePoints?: {
        rank: number;
        points: number;
    };
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
    runecraft: SkillScore;
    hunter: SkillScore;
    construction: SkillScore;
}
export type BossRecords = Record<(typeof mappedBossNames)[number]["0"], MinigameScore>;
export type MinigamesScore = Record<(typeof MINIGAMES)[number], MinigameScore>;
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
    runecraft: number;
    hunter: number;
    construction: number;
    combat: number;
}
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
    requirements: Partial<ItemRequirements> | null;
}
export declare enum EquipmentSlot {
    TwoHanded = "2h",
    Ammo = "ammo",
    Body = "body",
    Cape = "cape",
    Feet = "feet",
    Hands = "hands",
    Head = "head",
    Legs = "legs",
    Neck = "neck",
    Ring = "ring",
    Shield = "shield",
    Weapon = "weapon"
}
export interface ItemWeaponStance {
    combat_style: string;
    attack_type: string | null;
    attack_style: string | null;
    experience: string;
    boosts: string | null;
}
export interface ItemWeapon {
    attack_speed: number;
    weapon_type: string;
    stances: ItemWeaponStance[];
}
export interface Item {
    id: number;
    name: string;
    incomplete?: boolean;
    members?: boolean;
    tradeable?: boolean;
    tradeable_on_ge?: boolean;
    stackable?: boolean;
    noteable?: boolean;
    equipable?: true;
    equipable_by_player?: true;
    equipable_weapon?: true;
    cost: number;
    lowalch?: number;
    highalch?: number;
    weight?: number;
    buy_limit?: number;
    release_date?: string;
    examine?: string;
    wiki_name?: string;
    wiki_url?: string;
    equipment?: ItemEquipment;
    weapon?: ItemWeapon;
    price: number;
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
export interface IntKeyBank {
    [key: number]: number;
}
export interface ItemBank {
    [key: string]: number;
}
export interface LootBank {
    [key: string]: Bank;
}
export interface SimpleTableItem<T> {
    item: T;
    weight: number;
}
export interface BankItem {
    id: number;
    qty: number;
}
export type TupleLootItem = [number, number];
export interface MonsterKillOptions {
    inCatacombs?: boolean;
    inWilderness?: boolean;
    onSlayerTask?: boolean;
    slayerMaster?: MonsterSlayerMaster;
    hasSuperiors?: SimpleMonster;
    farmingLevel?: number;
    isAwakened?: boolean;
    lootTableOptions?: LootTableRollOptions;
}
export interface OpenableOptions {
    id: number;
    name: string;
    aliases: string[];
    allItems?: number[];
}
export interface OpenableOpenOptions {
    fishLvl?: number;
    seedTier?: SeedTier;
    chestSize?: ChestSize;
}
export interface ClueOptions {
    table: LootTable;
}
export type CustomKillLogic = (options: MonsterKillOptions, currentLoot: Bank) => void;
export {};
//# sourceMappingURL=types.d.ts.map