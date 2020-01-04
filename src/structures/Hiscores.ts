import fetch from 'node-fetch';

import OSError from './OldSchoolJSError';
import { ACCOUNT_TYPES, hiscoreURLs, Errors } from '../constants';
import { isValidUsername, resolvePlayerFromHiscores, convertXPtoLVL } from '../util';
import Player from './Player';
import { AccountType, SkillsScore } from '../meta/types';

export interface GetOptions {
	type?: AccountType;
	virtualLevels?: boolean;
}

const defaultGetOptions = {
	type: 'normal',
	virtualLevels: false
};

class Hiscores {
	public async fetch(
		username: string,
		options: GetOptions = { type: 'normal', virtualLevels: false }
	): Promise<Player> {
		const mergedOptions = { ...defaultGetOptions, ...options };
		if (!isValidUsername(username)) throw new OSError(Errors.INVALID_USERNAME);
		if (!ACCOUNT_TYPES.includes(mergedOptions.type)) {
			throw new OSError(Errors.INVALID_ACCOUNT_TYPE);
		}

		const data: Player = await fetch(hiscoreURLs[mergedOptions.type] + username)
			.then(
				(res): Promise<string> => {
					if (res.status === 404) throw new OSError(Errors.ACCOUNT_NOT_FOUND);
					if (!res.ok) throw new OSError(Errors.FAILED_REQUEST);
					return res.text();
				}
			)
			.then(resolvePlayerFromHiscores)
			.catch((err): never => {
				throw err;
			});

		if (mergedOptions.virtualLevels) {
			let overall = 0;
			for (const skill in data.skills) {
				if (skill === 'overall') continue;
				const lvl = convertXPtoLVL(data.skills[skill as keyof SkillsScore].xp, 126);
				overall += lvl;
				data.skills[skill as keyof SkillsScore].level = lvl;
			}
			data.skills.overall.level = overall;
		}

		return new Player({
			username,
			type: options.type,
			skills: data.skills,
			minigames: data.minigames,
			clues: data.clues,
			bossRecords: data.bossRecords
		});
	}
}

export default new Hiscores();
