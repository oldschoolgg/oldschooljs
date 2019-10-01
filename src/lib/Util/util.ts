import { JSDOM, DOMWindow } from 'jsdom';
import fetch from 'node-fetch';

import { SKILLS, MINIGAMES, CLUES } from './constants';
import { Player } from '../..';
import { DateYearMonth } from '../../meta/types';

/**
 * Rolls a 1 in X chance, returning a boolean on successfull rolls.
 * @param upperLimit The upper limit of the roll.
 */
export function roll(upperLimit: number): boolean {
	return Math.floor(Math.random() * upperLimit + 1) === 1;
}

export function resolvePlayerFromHiscores(csvData: string): Player {
	const data: string[][] = csvData.split('\n').map((str): string[] => str.split(','));
	const resolvedPlayer: any = {
		skills: {},
		minigames: {},
		clues: {}
	};
	for (let i = 0; i < SKILLS.length; i++) {
		resolvedPlayer.skills[SKILLS[i]] = {
			rank: Number(data[i][0]),
			level: Number(data[i][1]),
			xp: Number(data[i][2])
		};
	}
	for (let i = 0; i < MINIGAMES.length; i++) {
		resolvedPlayer.minigames[MINIGAMES[i]] = {
			rank: Number(data[i + SKILLS.length][0]),
			score: Number(data[i + SKILLS.length][1])
		};
	}
	for (let i = 0; i < CLUES.length; i++) {
		resolvedPlayer.clues[CLUES[i]] = {
			rank: Number(data[i + SKILLS.length + MINIGAMES.length][0]),
			score: Number(data[i + SKILLS.length + MINIGAMES.length][1])
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
 * Removes all whitespace and punctuation from a string, and uppercases it. Used for comparisons.
 * @param str The string to clean.
 */
export function cleanString(str: string): string {
	return str.replace(/\W/g, '').toUpperCase();
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

/**
 * Gets a DOM for a page.
 * @param link The page to fetch a DOM for.
 */
export async function getDom(link: string): Promise<DOMWindow> {
	const html: string = await fetch(link).then((res): Promise<string> => res.text());
	return new JSDOM(html).window;
}
