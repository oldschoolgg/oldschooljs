import type { BossRecords } from "./meta/types";
export declare const BASE_API_URL = "https://services.runescape.com";
export declare const SKILLS: readonly ["overall", "attack", "defence", "strength", "hitpoints", "ranged", "prayer", "magic", "cooking", "woodcutting", "fletching", "fishing", "firemaking", "crafting", "smithing", "mining", "herblore", "agility", "thieving", "slayer", "farming", "runecraft", "hunter", "construction"];
export declare const MINIGAMES: readonly ["bountyHunter", "bountyHunterRogue", "bountyHunterLegacy", "bountyHunterLegacyRogue", "LMS", "pvpArena", "soulWars", "riftsClosed", "colosseumGlory"];
export declare const CLUES: readonly ["all", "beginner", "easy", "medium", "hard", "elite", "master"];
export declare const mappedBossNames: readonly [readonly ["abyssalSire", "Abyssal Sire"], readonly ["alchemicalHydra", "Alchemical Hydra"], readonly ["amoxliatl", "Amoxliatl"], readonly ["araxxor", "Araxxor"], readonly ["artio", "Artio"], readonly ["barrowsChests", "Barrows Chests"], readonly ["bryophyta", "Bryophyta"], readonly ["callisto", "Callisto"], readonly ["calvarion", "Calvar'ion"], readonly ["cerberus", "Cerberus"], readonly ["chambersofXeric", "Chambers of Xeric"], readonly ["chambersofXericChallengeMode", "Chambers of Xeric: Challenge Mode"], readonly ["chaosElemental", "Chaos Elemental"], readonly ["chaosFanatic", "Chaos Fanatic"], readonly ["commanderZilyana", "Commander Zilyana"], readonly ["corporealBeast", "Corporeal Beast"], readonly ["crazyArchaeologist", "Crazy Archaeologist"], readonly ["dagannothPrime", "Dagannoth Prime"], readonly ["dagannothRex", "Dagannoth Rex"], readonly ["dagannothSupreme", "Dagannoth Supreme"], readonly ["derangedArchaeologist", "Deranged Archaeologist"], readonly ["dukeSucellus", "Duke Sucellus"], readonly ["generalGraardor", "General Graardor"], readonly ["giantMole", "Giant Mole"], readonly ["grotesqueGuardians", "Grotesque Guardians"], readonly ["hespori", "Hespori"], readonly ["kalphiteQueen", "Kalphite Queen"], readonly ["kingBlackDragon", "King Black Dragon"], readonly ["kraken", "Kraken"], readonly ["kreeArra", "Kree'Arra"], readonly ["krilTsutsaroth", "K'ril Tsutsaroth"], readonly ["lunarChests", "Lunar Chests"], readonly ["mimic", "Mimic"], readonly ["nex", "Nex"], readonly ["nightmare", "The Nightmare"], readonly ["phosanisNightmare", "Phosani's Nightmare"], readonly ["obor", "Obor"], readonly ["phantomMuspah", "Phantom Muspah"], readonly ["sarachnis", "Sarachnis"], readonly ["scorpia", "Scorpia"], readonly ["scurrius", "Scurrius"], readonly ["skotizo", "Skotizo"], readonly ["solHeredit", "Sol Heredit"], readonly ["spindel", "Spindel"], readonly ["tempoross", "Tempoross"], readonly ["theGauntlet", "The Gauntlet"], readonly ["theCorruptedGauntlet", "The Corrupted Gauntlet"], readonly ["theHueycoatl", "The Hueycoatl"], readonly ["theLeviathan", "The Leviathan"], readonly ["theWhisperer", "The Whisperer"], readonly ["theatreofBlood", "Theatre of Blood"], readonly ["theatreofBloodHard", "Theatre of Blood: Hard Mode"], readonly ["thermonuclearSmokeDevil", "Thermonuclear Smoke Devil"], readonly ["tombsofAmascut", "Tombs of Amascut"], readonly ["tombsofAmascutExpert", "Tombs of Amascut: Expert Mode"], readonly ["tzKalZuk", "TzKal-Zuk"], readonly ["tzTokJad", "TzTok-Jad"], readonly ["vardorvis", "Vardorvis"], readonly ["venenatis", "Venenatis"], readonly ["vetion", "Vet'ion"], readonly ["vorkath", "Vorkath"], readonly ["wintertodt", "Wintertodt"], readonly ["zalcano", "Zalcano"], readonly ["zulrah", "Zulrah"]];
export declare const bossNameMap: Map<keyof BossRecords, string>;
export declare const hiscoreURLs: {
    readonly normal: string;
    readonly ironman: string;
    readonly ultimate: string;
    readonly hardcore: string;
    readonly deadman: string;
    readonly seasonal: string;
    readonly tournament: string;
    readonly skiller: string;
    readonly skiller_defence: string;
};
export declare const ACCOUNT_TYPES: (keyof typeof hiscoreURLs)[];
export declare enum Errors {
    INVALID_USERNAME = "INVALID_USERNAME",
    INVALID_ACCOUNT_TYPE = "INVALID_ACCOUNT_TYPE",
    ACCOUNT_NOT_FOUND = "ACCOUNT_NOT_FOUND",
    FAILED_REQUEST = "FAILED_REQUEST"
}
export declare const ErrorDescriptions: Record<string, string>;
export declare const EMPTY_BIRD_NEST_ID = 5075;
export declare enum SkillsEnum {
    Agility = "agility",
    Cooking = "cooking",
    Fishing = "fishing",
    Mining = "mining",
    Smithing = "smithing",
    Woodcutting = "woodcutting",
    Firemaking = "firemaking",
    Runecraft = "runecraft",
    Crafting = "crafting",
    Prayer = "prayer",
    Fletching = "fletching",
    Farming = "farming",
    Herblore = "herblore",
    Thieving = "thieving",
    Hunter = "hunter",
    Construction = "construction",
    Attack = "attack",
    Defence = "defence",
    Strength = "strength",
    Ranged = "ranged",
    Magic = "magic",
    Hitpoints = "hitpoints",
    Slayer = "slayer"
}
//# sourceMappingURL=constants.d.ts.map