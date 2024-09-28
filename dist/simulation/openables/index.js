"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = __importDefault(require("../../structures/Collection"));
const BrimstoneChest_1 = __importDefault(require("./BrimstoneChest"));
const Casket_1 = __importDefault(require("./Casket"));
const CrystalChest_1 = __importDefault(require("./CrystalChest"));
const ElvenCrystalChest_1 = __importDefault(require("./ElvenCrystalChest"));
const GiantEggSacFull_1 = __importDefault(require("./GiantEggSacFull"));
const GrubbyChest_1 = __importDefault(require("./GrubbyChest"));
const HAMStoreRoomChests_1 = require("./HAMStoreRoomChests");
const HuntersLootSack_1 = require("./HuntersLootSack");
const Implings_1 = require("./Implings");
const IntricatePouch_1 = __importDefault(require("./IntricatePouch"));
const LarransChest_1 = __importDefault(require("./LarransChest"));
const MuddyChest_1 = __importDefault(require("./MuddyChest"));
const MysteryBox_1 = __importDefault(require("./MysteryBox"));
const NestBoxEmpty_1 = __importDefault(require("./NestBoxEmpty"));
const NestBoxRing_1 = __importDefault(require("./NestBoxRing"));
const NestBoxSeeds_1 = __importDefault(require("./NestBoxSeeds"));
const OgreCoffin_1 = __importDefault(require("./OgreCoffin"));
const OrePack_1 = require("./OrePack");
const SeedPack_1 = __importDefault(require("./SeedPack"));
const SinisterChest_1 = __importDefault(require("./SinisterChest"));
const openablesObject = {
    MysteryBox: MysteryBox_1.default,
    NestBoxEmpty: NestBoxEmpty_1.default,
    NestBoxRing: NestBoxRing_1.default,
    NestBoxSeeds: NestBoxSeeds_1.default,
    GiantEggSacFull: GiantEggSacFull_1.default,
    BronzeHAMChest: HAMStoreRoomChests_1.BronzeHAMChest,
    IronHAMChest: HAMStoreRoomChests_1.IronHAMChest,
    SilverHAMChest: HAMStoreRoomChests_1.SilverHAMChest,
    SteelHAMChest: HAMStoreRoomChests_1.SteelHAMChest,
    Casket: Casket_1.default,
    CrystalChest: CrystalChest_1.default,
    ElvenCrystalChest: ElvenCrystalChest_1.default,
    GrubbyChest: GrubbyChest_1.default,
    MuddyChest: MuddyChest_1.default,
    OgreCoffin: OgreCoffin_1.default,
    SinisterChest: SinisterChest_1.default,
    BrimstoneChest: BrimstoneChest_1.default,
    LarransChest: LarransChest_1.default,
    SeedPack: SeedPack_1.default,
    BabyImpling: Implings_1.BabyImpling,
    YoungImpling: Implings_1.YoungImpling,
    GourmetImpling: Implings_1.GourmetImpling,
    EarthImpling: Implings_1.EarthImpling,
    EssenceImpling: Implings_1.EssenceImpling,
    EclecticImpling: Implings_1.EclecticImpling,
    NatureImpling: Implings_1.NatureImpling,
    MagpieImpling: Implings_1.MagpieImpling,
    NinjaImpling: Implings_1.NinjaImpling,
    CrystalImpling: Implings_1.CrystalImpling,
    DragonImpling: Implings_1.DragonImpling,
    LuckyImpling: Implings_1.LuckyImpling,
    VolcanicMineOrePack: OrePack_1.VolcanicMineOrePack,
    GiantsFoundryOrePack: OrePack_1.GiantsFoundryOrePack,
    IntricatePouch: IntricatePouch_1.default,
    BasicSack: HuntersLootSack_1.BasicSack,
    AdeptSack: HuntersLootSack_1.AdeptSack,
    ExpertSack: HuntersLootSack_1.ExpertSack,
    MasterSack: HuntersLootSack_1.MasterSack,
};
const allMonsters = Object.values(openablesObject).map(openable => [openable.id, openable]);
class OpenablesCollection extends Collection_1.default {
}
const Openables = Object.assign(new OpenablesCollection(allMonsters), openablesObject);
exports.default = Openables;
