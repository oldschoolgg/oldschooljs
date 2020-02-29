export type MonsterAttribute =
	| 'demon'
	| 'dragon'
	| 'fiery'
	| 'kalphite'
	| 'leafy'
	| 'penance'
	| 'shade'
	| 'undead'
	| 'vampyre'
	| 'xerician';

export type MonsterSlayerMaster =
	| 'turael'
	| 'krystilia'
	| 'mazchna'
	| 'vannaka'
	| 'chaeldar'
	| 'konar'
	| 'nieve'
	| 'duradel';

export type MonsterAttackType = 'melee' | 'magic' | 'range';

export default interface MonsterData {
	id: number;
	name: string;
	incomplete: boolean;
	members: boolean;
	release_date: string;
	combat_level: number;
	size: number;
	hitpoints: number;
	max_hit: number;
	attack_type: MonsterAttackType[];
	attack_speed: number;
	aggressive: boolean;
	poisonous: boolean;
	immune_poison: boolean;
	immune_venom: boolean;
	attributes: MonsterAttribute[] | null;
	category: string[];
	slayer_monster: boolean;
	slayer_level: number | null;
	slayer_xp: number | null;
	slayer_masters: MonsterSlayerMaster[] | null;
	duplicate: boolean;
	examine: string;
	icon: any;
	wiki_name: string;
	wiki_url: string;
	attack_level: number;
	strength_level: number;
	defence_level: number;
	magic_level: number;
	ranged_level: number;
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
	attack_accuracy: number;
	melee_strength: number;
	ranged_strength: number;
	magic_damage: number;
}
