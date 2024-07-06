import type { Item } from "../meta/types";
import { getItemOrThrow } from "../util/util";

export const allTeamCapes: Item[] = [];

for (let i = 1; i < 51; i++) {
	allTeamCapes.push(getItemOrThrow(`Team-${i} cape`));
}
