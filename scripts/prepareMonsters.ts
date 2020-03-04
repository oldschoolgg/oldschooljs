/* eslint-disable @typescript-eslint/camelcase */
import fetch from 'node-fetch';
import { writeFileSync } from 'fs';
import { Monsters } from '../dist';
import {
	MonsterData,
	MonsterAttackType,
	MonsterAttribute,
	MonsterSlayerMaster
} from '../dist/meta/monsterData';

const monsterMap: { [key: string]: MonsterData } = {};

export default interface RawMonsterData {
	id: number;
	name: string;
	incomplete: boolean;
	members: boolean;
	release_date: string | null;
	combat_level: number;
	size: number;
	hitpoints: number;
	max_hit: number;
	attack_type: MonsterAttackType[];
	attack_speed: number | null;
	aggressive: boolean;
	poisonous: boolean;
	immune_poison: boolean;
	immune_venom: boolean;
	attributes: MonsterAttribute[] | null;
	category: string[];
	slayer_monster: boolean;
	slayer_level: number;
	slayer_xp: number;
	slayer_masters: MonsterSlayerMaster[];
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

async function prepareMonsters(): Promise<void> {
	const allMonsters: { [key: string]: RawMonsterData } = await fetch(
		`https://raw.githubusercontent.com/osrsbox/osrsbox-db/master/docs/monsters-complete.json`
	).then((res): Promise<any> => res.json());

	const monIDs = new Set(Monsters.map(mon => mon.id));

	for (const mon of Object.values(allMonsters).filter(mon => monIDs.has(mon.id))) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
		// @ts-ignore
		delete mon.drops;

		if (mon.attributes === null) mon.attributes = [];
		if (mon.slayer_level === null) mon.slayer_level = 0;
		if (mon.slayer_xp === null) mon.slayer_xp = 0;

		const newMonster: MonsterData = {
			members: mon.members,
			releaseDate: mon.release_date,
			combatLevel: mon.combat_level,
			hitpoints: mon.hitpoints,
			maxHit: mon.max_hit,
			attackType: mon.attack_type,
			attackSpeed: mon.attack_speed,
			aggressive: mon.aggressive,
			poisonous: mon.poisonous,
			immuneToPoison: mon.immune_poison,
			immuneToVenom: mon.immune_venom,
			attributes: mon.attributes ?? [],
			category: mon.category,
			examineText: mon.examine,
			wikiName: mon.wiki_name,
			wikiURL: mon.wiki_url,

			attackLevel: mon.attack_level,
			strengthLevel: mon.strength_level,
			defenceLevel: mon.defence_level,
			magicLevel: mon.magic_level,
			rangedLevel: mon.ranged_level,

			attackStab: mon.attack_stab,
			attackSlash: mon.attack_slash,
			attackCrush: mon.attack_crush,
			attackMagic: mon.attack_magic,
			attackRanged: mon.attack_ranged,
			defenceStab: mon.defence_stab,
			defenceSlash: mon.defence_slash,
			defenceCrush: mon.defence_crush,
			defenceMagic: mon.defence_magic,
			defenceRanged: mon.defence_ranged,
			attackAccuracy: mon.attack_accuracy,
			meleeStrength: mon.melee_strength,
			rangedStrength: mon.ranged_strength,
			magicDamage: mon.magic_damage,

			isSlayerMonster: mon.slayer_monster,
			slayerLevelRequired: mon.slayer_level ?? 0,
			slayerXP: mon.slayer_xp ?? 0,
			assignableSlayerMasters: mon.slayer_masters ?? []
		};

		monsterMap[mon.id] = newMonster;
	}

	writeFileSync('./src/data/monsters_data.json', JSON.stringify(monsterMap, null, 4));
	console.log(
		'Prepared Monsters. Check any new monsters quickly to see that the data looks okay.'
	);
}

prepareMonsters();
