import type { hiscoreURLs } from "../constants";
import type { BossRecords, CluesScore, MinigamesScore, Player as PlayerType, SkillsScore } from "../meta/types";
declare class Player {
    username: string;
    skills: SkillsScore;
    minigames: MinigamesScore;
    bossRecords: BossRecords;
    type: keyof typeof hiscoreURLs;
    clues: CluesScore;
    leaguePoints?: {
        rank: number;
        points: number;
    };
    constructor(player: PlayerType);
    get combatLevel(): number;
}
export default Player;
//# sourceMappingURL=Player.d.ts.map