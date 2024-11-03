import { writeFileSync } from "node:fs";
import fetch from "node-fetch";

import { Monsters } from "../src";
import type { MonsterAttackType, MonsterAttribute, MonsterData, MonsterSlayerMaster } from "../src/meta/monsterData";

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

export async function prepareMonsters(): Promise<void> {
	const allMonsters: { [key: string]: RawMonsterData } = await fetch(
		"https://raw.githubusercontent.com/0xNeffarion/osrsreboxed-db/master/docs/monsters-complete.json",
	).then((res): Promise<any> => res.json());

	const monIDs = new Set(Monsters.map(mon => mon.id));

	for (const mon of Object.values(allMonsters).filter(mon => monIDs.has(mon.id))) {
		// @ts-ignore ignore
		delete mon.drops;

		const newMonster: MonsterData = {
			members: mon.members,
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

			attackStab: mon.attack_stab ?? 0,
			attackSlash: mon.attack_slash ?? 0,
			attackCrush: mon.attack_crush ?? 0,
			attackMagic: mon.attack_magic ?? 0,
			attackRanged: mon.attack_ranged ?? 0,
			defenceStab: mon.defence_stab ?? 0,
			defenceSlash: mon.defence_slash ?? 0,
			defenceCrush: mon.defence_crush ?? 0,
			defenceMagic: mon.defence_magic ?? 0,
			defenceRanged: mon.defence_ranged ?? 0,
			attackAccuracy: mon.attack_accuracy ?? 0,
			meleeStrength: mon.melee_strength ?? 0,
			rangedStrength: mon.ranged_strength ?? 0,
			magicDamage: mon.magic_damage ?? 0,

			isSlayerMonster: mon.slayer_monster,
			slayerLevelRequired: mon.slayer_level ?? 0,
			slayerXP: mon.slayer_xp ?? 0,
			assignableSlayerMasters: mon.slayer_masters ?? [],
		};

		monsterMap[mon.id] = newMonster;

		if (mon.name.toLowerCase() !== Monsters.get(mon.id)?.name.toLowerCase()) {
			console.warn(`Warning: Name of ${mon.name} does not match ${Monsters.get(mon.id)?.name}`);
		}
	}

	monsterMap[12_192] = { ...monsterMap[12_191] };
	monsterMap[12_215] = { ...monsterMap[12_214] };
	monsterMap[12_205] = { ...monsterMap[12_204] };
	monsterMap[12_224] = { ...monsterMap[12_223] };

	writeFileSync("./src/data/monsters_data.json", JSON.stringify(monsterMap, null, 4));
	console.log("Prepared Monsters. Check any new monsters quickly to see that the data looks okay.");
}
