"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsEnum = exports.EMPTY_BIRD_NEST_ID = exports.ErrorDescriptions = exports.Errors = exports.ACCOUNT_TYPES = exports.hiscoreURLs = exports.bossNameMap = exports.mappedBossNames = exports.CLUES = exports.MINIGAMES = exports.SKILLS = exports.BASE_API_URL = void 0;
exports.BASE_API_URL = "https://services.runescape.com";
exports.SKILLS = [
    "overall",
    "attack",
    "defence",
    "strength",
    "hitpoints",
    "ranged",
    "prayer",
    "magic",
    "cooking",
    "woodcutting",
    "fletching",
    "fishing",
    "firemaking",
    "crafting",
    "smithing",
    "mining",
    "herblore",
    "agility",
    "thieving",
    "slayer",
    "farming",
    "runecraft",
    "hunter",
    "construction",
];
exports.MINIGAMES = [
    "bountyHunter",
    "bountyHunterRogue",
    "bountyHunterLegacy",
    "bountyHunterLegacyRogue",
    "LMS",
    "pvpArena",
    "soulWars",
    "riftsClosed",
    "colosseumGlory",
];
exports.CLUES = ["all", "beginner", "easy", "medium", "hard", "elite", "master"];
exports.mappedBossNames = [
    ["abyssalSire", "Abyssal Sire"],
    ["alchemicalHydra", "Alchemical Hydra"],
    ["amoxliatl", "Amoxliatl"],
    ["araxxor", "Araxxor"],
    ["artio", "Artio"],
    ["barrowsChests", "Barrows Chests"],
    ["bryophyta", "Bryophyta"],
    ["callisto", "Callisto"],
    ["calvarion", "Calvar'ion"],
    ["cerberus", "Cerberus"],
    ["chambersofXeric", "Chambers of Xeric"],
    ["chambersofXericChallengeMode", "Chambers of Xeric: Challenge Mode"],
    ["chaosElemental", "Chaos Elemental"],
    ["chaosFanatic", "Chaos Fanatic"],
    ["commanderZilyana", "Commander Zilyana"],
    ["corporealBeast", "Corporeal Beast"],
    ["crazyArchaeologist", "Crazy Archaeologist"],
    ["dagannothPrime", "Dagannoth Prime"],
    ["dagannothRex", "Dagannoth Rex"],
    ["dagannothSupreme", "Dagannoth Supreme"],
    ["derangedArchaeologist", "Deranged Archaeologist"],
    ["dukeSucellus", "Duke Sucellus"],
    ["generalGraardor", "General Graardor"],
    ["giantMole", "Giant Mole"],
    ["grotesqueGuardians", "Grotesque Guardians"],
    ["hespori", "Hespori"],
    ["kalphiteQueen", "Kalphite Queen"],
    ["kingBlackDragon", "King Black Dragon"],
    ["kraken", "Kraken"],
    ["kreeArra", "Kree'Arra"],
    ["krilTsutsaroth", "K'ril Tsutsaroth"],
    ["lunarChests", "Lunar Chests"],
    ["mimic", "Mimic"],
    ["nex", "Nex"],
    ["nightmare", "The Nightmare"],
    ["phosanisNightmare", "Phosani's Nightmare"],
    ["obor", "Obor"],
    ["phantomMuspah", "Phantom Muspah"],
    ["sarachnis", "Sarachnis"],
    ["scorpia", "Scorpia"],
    ["scurrius", "Scurrius"],
    ["skotizo", "Skotizo"],
    ["solHeredit", "Sol Heredit"],
    ["spindel", "Spindel"],
    ["tempoross", "Tempoross"],
    ["theGauntlet", "The Gauntlet"],
    ["theCorruptedGauntlet", "The Corrupted Gauntlet"],
    ["theHueycoatl", "The Hueycoatl"],
    ["theLeviathan", "The Leviathan"],
    ["theWhisperer", "The Whisperer"],
    ["theatreofBlood", "Theatre of Blood"],
    ["theatreofBloodHard", "Theatre of Blood: Hard Mode"],
    ["thermonuclearSmokeDevil", "Thermonuclear Smoke Devil"],
    ["tombsofAmascut", "Tombs of Amascut"],
    ["tombsofAmascutExpert", "Tombs of Amascut: Expert Mode"],
    ["tzKalZuk", "TzKal-Zuk"],
    ["tzTokJad", "TzTok-Jad"],
    ["vardorvis", "Vardorvis"],
    ["venenatis", "Venenatis"],
    ["vetion", "Vet'ion"],
    ["vorkath", "Vorkath"],
    ["wintertodt", "Wintertodt"],
    ["zalcano", "Zalcano"],
    ["zulrah", "Zulrah"],
];
exports.bossNameMap = new Map(exports.mappedBossNames);
function hiscoreURL(type) {
    return `${exports.BASE_API_URL}/m=${type}/index_lite.ws?player=`;
}
exports.hiscoreURLs = {
    normal: hiscoreURL("hiscore_oldschool"),
    ironman: hiscoreURL("hiscore_oldschool_ironman"),
    ultimate: hiscoreURL("hiscore_oldschool_ultimate"),
    hardcore: hiscoreURL("hiscore_oldschool_hardcore_ironman"),
    deadman: hiscoreURL("hiscore_oldschool_deadman"),
    seasonal: hiscoreURL("hiscore_oldschool_seasonal"),
    tournament: hiscoreURL("hiscore_oldschool_tournament"),
    skiller: hiscoreURL("hiscore_oldschool_skiller"),
    skiller_defence: hiscoreURL("hiscore_oldschool_skiller_defence"),
};
exports.ACCOUNT_TYPES = [
    "normal",
    "ironman",
    "ultimate",
    "hardcore",
    "deadman",
    "seasonal",
    "tournament",
    "skiller",
    "skiller_defence",
];
var Errors;
(function (Errors) {
    Errors["INVALID_USERNAME"] = "INVALID_USERNAME";
    Errors["INVALID_ACCOUNT_TYPE"] = "INVALID_ACCOUNT_TYPE";
    Errors["ACCOUNT_NOT_FOUND"] = "ACCOUNT_NOT_FOUND";
    Errors["FAILED_REQUEST"] = "FAILED_REQUEST";
})(Errors || (exports.Errors = Errors = {}));
exports.ErrorDescriptions = {
    INVALID_USERNAME: "A malformed, invalid or incorrect username was passed and rejected.",
    INVALID_ACCOUNT_TYPE: "A invalid account type (normal, ironman, etc) was passed.",
    ACCOUNT_NOT_FOUND: "Could not find a RuneScape account with the provided username.",
    FAILED_REQUEST: "A request to an API/External resource failed unexpectedly.",
    ITEM_NOT_FOUND: "No item with the provided ID/Name could be found.",
};
exports.EMPTY_BIRD_NEST_ID = 5075;
var SkillsEnum;
(function (SkillsEnum) {
    SkillsEnum["Agility"] = "agility";
    SkillsEnum["Cooking"] = "cooking";
    SkillsEnum["Fishing"] = "fishing";
    SkillsEnum["Mining"] = "mining";
    SkillsEnum["Smithing"] = "smithing";
    SkillsEnum["Woodcutting"] = "woodcutting";
    SkillsEnum["Firemaking"] = "firemaking";
    SkillsEnum["Runecraft"] = "runecraft";
    SkillsEnum["Crafting"] = "crafting";
    SkillsEnum["Prayer"] = "prayer";
    SkillsEnum["Fletching"] = "fletching";
    SkillsEnum["Farming"] = "farming";
    SkillsEnum["Herblore"] = "herblore";
    SkillsEnum["Thieving"] = "thieving";
    SkillsEnum["Hunter"] = "hunter";
    SkillsEnum["Construction"] = "construction";
    SkillsEnum["Attack"] = "attack";
    SkillsEnum["Defence"] = "defence";
    SkillsEnum["Strength"] = "strength";
    SkillsEnum["Ranged"] = "ranged";
    SkillsEnum["Magic"] = "magic";
    SkillsEnum["Hitpoints"] = "hitpoints";
    SkillsEnum["Slayer"] = "slayer";
})(SkillsEnum || (exports.SkillsEnum = SkillsEnum = {}));
