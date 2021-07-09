import { CLUES, mappedBossNames, MINIGAMES, SKILLS } from '../constants';
import { DateYearMonth, ItemBank, LootBank } from '../meta/types';
import Player from '../structures/Player';

export function resolvePlayerFromHiscores(csvData: string): Player {
	const data: string[][] = csvData
		.trim()
		.split('\n')
		.map((str): string[] => str.split(','));

	const resolvedPlayer: any = {
		skills: {},
		minigames: {},
		clues: {},
		bossRecords: {}
	};

	let accumulativeIndex = 0;

	for (let i = 0; i < SKILLS.length; i++) {
		resolvedPlayer.skills[SKILLS[i]] = {
			rank: Number(data[i][0]),
			level: Number(data[i][1]),
			xp: Number(data[i][2])
		};
	}

	accumulativeIndex += SKILLS.length + 1;

	for (let i = 0; i < 2; i++) {
		resolvedPlayer.minigames[MINIGAMES[i]] = {
			rank: Number(data[i + accumulativeIndex][0]),
			score: Number(data[i + accumulativeIndex][1])
		};
	}

	accumulativeIndex += 2;

	for (let i = 0; i < CLUES.length; i++) {
		resolvedPlayer.clues[CLUES[i]] = {
			rank: Number(data[i + accumulativeIndex][0]),
			score: Number(data[i + accumulativeIndex][1])
		};
	}

	accumulativeIndex += CLUES.length;

	for (let i = 0; i < 2; i++) {
		resolvedPlayer.minigames[MINIGAMES[i + 2]] = {
			rank: Number(data[i + accumulativeIndex][0]),
			score: Number(data[i + accumulativeIndex][1])
		};
	}

	accumulativeIndex += 2;

	for (let i = 0; i < mappedBossNames.length; i++) {
		if (!data[i + accumulativeIndex]) continue;

		resolvedPlayer.bossRecords[mappedBossNames[i][0]] = {
			rank: Number(data[i + accumulativeIndex][0]),
			score: Number(data[i + accumulativeIndex][1])
		};
	}

	return resolvedPlayer;
}

/**
 * Determines whether a string is a valid RuneScape username.
 * @param username The username to check.
 */
export function isValidUsername(username: string): boolean {
	return !!username.match('^[A-Za-z0-9]{1}[A-Za-z0-9 -_\u00A0]{0,11}$');
}

/**
 * Removes all whitespace, and uppercases it. Used for comparisons.
 * @param str The string to clean.
 */
export function cleanString(str: string): string {
	return str.replace(/\s/g, '').toUpperCase();
}

/**
 * Returns the current month and year.
 */
export function getDate(): DateYearMonth {
	const currentTime = new Date();
	return {
		month: currentTime.getMonth() + 1,
		year: currentTime.getFullYear()
	};
}

export function convertLVLtoXP(lvl: number): number {
	let points = 0;

	for (let i = 1; i < lvl; i++) {
		points += Math.floor(i + 300 * Math.pow(2, i / 7));
	}

	return Math.floor(points / 4);
}

export function convertXPtoLVL(xp: number, cap = 99): number {
	let points = 0;

	for (let lvl = 1; lvl <= cap; lvl++) {
		points += Math.floor(lvl + 300 * Math.pow(2, lvl / 7));

		if (Math.floor(points / 4) >= xp + 1) {
			return lvl;
		}
	}

	return cap;
}

function round(number: number): string {
	return (Math.round(number * 100) / 100).toString();
}

export function toKMB(number: number): string {
	if (number > 999999999 || number < -999999999) {
		return round(number / 1000000000) + 'b';
	} else if (number > 999999 || number < -999999) {
		return round(number / 1000000) + 'm';
	} else if (number > 999 || number < -999) {
		return round(number / 1000) + 'k';
	} else {
		return round(number);
	}
}

export function fromKMB(number: string): number {
	number = number.toLowerCase().replace(/,/g, '');
	const [numberBefore, numberAfter] = number.split(/[.kmb]/g);

	let newNum = numberBefore;
	if (number.includes('b')) {
		newNum += numberAfter + '0'.repeat(9).slice(numberAfter.length);
	} else if (number.includes('m')) {
		newNum += numberAfter + '0'.repeat(6).slice(numberAfter.length);
	} else if (number.includes('k')) {
		newNum += numberAfter + '0'.repeat(3).slice(numberAfter.length);
	}

	return parseInt(newNum);
}

export function getBrimKeyChanceFromCBLevel(combatLevel: number): number {
	// https://twitter.com/JagexKieren/status/1083781544135847936
	if (combatLevel < 100) {
		return Math.round(0.2 * (combatLevel - 100) ** 2 + 100);
	} else {
		return Math.max(Math.round((-1 / 5) * combatLevel + 120), 50);
	}
}

export function addArrayOfNumbers(arr: number[]): number {
	return arr.reduce((a, b) => a + b, 0);
}

export function JSONClone<O>(object: O): O {
	return JSON.parse(JSON.stringify(object));
}

export function convertLootBanksToItemBanks(lootResult: LootBank): Record<string, ItemBank> {
	const result: { [key: string]: ItemBank } = {};
	for (const [id, loot] of Object.entries(lootResult)) {
		result[id] = loot.values();
	}

	return result;
}

export function getAncientShardChanceFromHP(hitpoints: number): number {
	return Math.round((500 - hitpoints) / 1.5);
}
export function getTotemChanceFromHP(hitpoints: number): number {
	return 500 - hitpoints;
}
