import fetch from 'node-fetch';

import OSError from './OldSchoolJSError';
import { ACCOUNT_TYPES, hiscoreURLs, Errors } from '../Util/constants';
import { isValidUsername, resolvePlayerFromHiscores } from '../Util/util';
import Player from './Player';
import { AccountType } from '../../meta/types';

interface GetOptions {
	type: AccountType;
}

class Hiscores {
	public async fetch(
		username: string,
		options: GetOptions = { type: 'normal' }
	): Promise<Player> {
		if (!isValidUsername(username)) throw new OSError(Errors.INVALID_USERNAME);
		if (!ACCOUNT_TYPES.includes(options.type)) throw new OSError(Errors.INVALID_ACCOUNT_TYPE);

		const data: Player = await fetch(hiscoreURLs[options.type] + username)
			.then(
				(res): Promise<string> => {
					if (res.status === 404) throw new OSError(Errors.ACCOUNT_NOT_FOUND);
					if (!res.ok) throw new OSError(Errors.FAILED_REQUEST);
					return res.text();
				}
			)
			.then(resolvePlayerFromHiscores)
			.catch((err): never => {
				throw new OSError(err);
			});

		return new Player({
			username,
			type: options.type,
			skills: data.skills,
			minigames: data.minigames,
			clues: data.clues
		});
	}
}

export default new Hiscores();
