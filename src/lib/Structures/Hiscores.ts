import fetch from 'node-fetch';

import Error from './OldSchoolJSError';
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
		if (!isValidUsername(username)) throw new Error(Errors.INVALID_USERNAME);
		if (!ACCOUNT_TYPES.includes(options.type)) throw new Error(Errors.INVALID_ACCOUNT_TYPE);

		const data: Player = await fetch(hiscoreURLs[options.type] + username)
			.then(
				(res): Promise<string> => {
					if (res.status === 404) throw new Error(Errors.ACCOUNT_NOT_FOUND);
					if (!res.ok) throw new Error(Errors.FAILED_REQUEST);
					return res.text();
				}
			)
			.then(resolvePlayerFromHiscores)
			.catch((err): never => {
				throw new Error(err);
			});

		return new Player({
			username,
			type: options.type,
			skills: data.skills,
			minigames: data.minigames
		});
	}
}

export default new Hiscores();
