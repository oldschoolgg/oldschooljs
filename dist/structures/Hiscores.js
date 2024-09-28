"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const constants_1 = require("../constants");
const util_1 = require("../util/util");
const OldSchoolJSError_1 = __importDefault(require("./OldSchoolJSError"));
const Player_1 = __importDefault(require("./Player"));
const defaultGetOptions = {
    type: "normal",
    virtualLevels: false,
};
class Hiscores {
    async fetch(username, options = { type: "normal", virtualLevels: false }) {
        const mergedOptions = { ...defaultGetOptions, ...options };
        const accountType = mergedOptions.type ?? "normal";
        if (!(0, util_1.isValidUsername)(username))
            throw new OldSchoolJSError_1.default(constants_1.Errors.INVALID_USERNAME);
        if (!constants_1.ACCOUNT_TYPES.includes(accountType)) {
            throw new OldSchoolJSError_1.default(constants_1.Errors.INVALID_ACCOUNT_TYPE);
        }
        const data = await (0, node_fetch_1.default)(constants_1.hiscoreURLs[accountType] + username)
            .then(async (res) => {
            if (res.status === 404)
                throw new OldSchoolJSError_1.default(constants_1.Errors.ACCOUNT_NOT_FOUND);
            if (!res.ok)
                throw new OldSchoolJSError_1.default(constants_1.Errors.FAILED_REQUEST);
            const text = await res.text();
            if (text.trim().startsWith("<"))
                throw new OldSchoolJSError_1.default(constants_1.Errors.FAILED_REQUEST);
            return text;
        })
            .then(p => (0, util_1.resolvePlayerFromHiscores)(p, accountType))
            .catch((err) => {
            throw err;
        });
        if (mergedOptions.virtualLevels) {
            let overall = 0;
            for (const skill in data.skills) {
                if (skill === "overall")
                    continue;
                const lvl = (0, util_1.convertXPtoLVL)(data.skills[skill].xp, 126);
                overall += lvl;
                data.skills[skill].level = lvl;
            }
            data.skills.overall.level = overall;
        }
        return new Player_1.default({
            username,
            type: options.type ?? "normal",
            skills: data.skills,
            minigames: data.minigames,
            clues: data.clues,
            bossRecords: data.bossRecords,
            leaguePoints: data.leaguePoints,
        });
    }
}
exports.default = new Hiscores();
