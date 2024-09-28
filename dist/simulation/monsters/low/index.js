"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allLowMonsters = void 0;
const DagannothPrime_1 = __importDefault(require("../bosses/DagannothPrime"));
const AberrantSpectre_1 = __importDefault(require("./a-f/AberrantSpectre"));
const AbyssalDemon_1 = __importDefault(require("./a-f/AbyssalDemon"));
const AdamantDragon_1 = __importDefault(require("./a-f/AdamantDragon"));
const AlKharidWarrior_1 = __importDefault(require("./a-f/AlKharidWarrior"));
const AncientZygomite_1 = __importDefault(require("./a-f/AncientZygomite"));
const Ankou_1 = __importDefault(require("./a-f/Ankou"));
const ArmadylianGuard_1 = __importDefault(require("./a-f/ArmadylianGuard"));
const ArmouredZombie_1 = __importDefault(require("./a-f/ArmouredZombie"));
const AsynShade_1 = __importDefault(require("./a-f/AsynShade"));
const Aviansie_1 = __importDefault(require("./a-f/Aviansie"));
const BabyBlackDragon_1 = __importDefault(require("./a-f/BabyBlackDragon"));
const BabyBlueDragon_1 = __importDefault(require("./a-f/BabyBlueDragon"));
const BabyGreenDragon_1 = __importDefault(require("./a-f/BabyGreenDragon"));
const BabyRedDragon_1 = __importDefault(require("./a-f/BabyRedDragon"));
const Bandit_1 = __importDefault(require("./a-f/Bandit"));
const Banshee_1 = __importDefault(require("./a-f/Banshee"));
const Basilisk_1 = __importDefault(require("./a-f/Basilisk"));
const BasiliskKnight_1 = __importDefault(require("./a-f/BasiliskKnight"));
const Bat_1 = __importDefault(require("./a-f/Bat"));
const BearCub_1 = __importDefault(require("./a-f/BearCub"));
const BeardedBandit_1 = __importDefault(require("./a-f/BeardedBandit"));
const BigWolf_1 = __importDefault(require("./a-f/BigWolf"));
const Bird_1 = __importDefault(require("./a-f/Bird"));
const BlackBear_1 = __importDefault(require("./a-f/BlackBear"));
const BlackDemon_1 = __importDefault(require("./a-f/BlackDemon"));
const BlackDragon_1 = __importDefault(require("./a-f/BlackDragon"));
const BlackGuard_1 = __importDefault(require("./a-f/BlackGuard"));
const BlackKnight_1 = __importDefault(require("./a-f/BlackKnight"));
const BloodReaver_1 = __importDefault(require("./a-f/BloodReaver"));
const Bloodveld_1 = __importDefault(require("./a-f/Bloodveld"));
const BlueDragon_1 = __importDefault(require("./a-f/BlueDragon"));
const BrineRat_1 = __importDefault(require("./a-f/BrineRat"));
const BronzeDragon_1 = __importDefault(require("./a-f/BronzeDragon"));
const BrutalBlackDragon_1 = __importDefault(require("./a-f/BrutalBlackDragon"));
const BrutalBlueDragon_1 = __importDefault(require("./a-f/BrutalBlueDragon"));
const BrutalGreenDragon_1 = __importDefault(require("./a-f/BrutalGreenDragon"));
const BrutalRedDragon_1 = __importDefault(require("./a-f/BrutalRedDragon"));
const Catablepon_1 = __importDefault(require("./a-f/Catablepon"));
const CaveBug_1 = __importDefault(require("./a-f/CaveBug"));
const CaveCrawler_1 = __importDefault(require("./a-f/CaveCrawler"));
const CaveGoblin_1 = __importDefault(require("./a-f/CaveGoblin"));
const CaveGoblinGuard_1 = __importDefault(require("./a-f/CaveGoblinGuard"));
const CaveHorror_1 = __importDefault(require("./a-f/CaveHorror"));
const CaveKraken_1 = __importDefault(require("./a-f/CaveKraken"));
const CaveSlime_1 = __importDefault(require("./a-f/CaveSlime"));
const ChaosDruid_1 = __importDefault(require("./a-f/ChaosDruid"));
const ChaosDwarf_1 = __importDefault(require("./a-f/ChaosDwarf"));
const Chicken_1 = __importDefault(require("./a-f/Chicken"));
const ChompyBird_1 = __importDefault(require("./a-f/ChompyBird"));
const Cockatrice_1 = __importDefault(require("./a-f/Cockatrice"));
const Cow_1 = __importDefault(require("./a-f/Cow"));
const CowCalf_1 = __importDefault(require("./a-f/CowCalf"));
const Crab_1 = __importDefault(require("./a-f/Crab"));
const CrawlingHand_1 = __importDefault(require("./a-f/CrawlingHand"));
const Crocodile_1 = __importDefault(require("./a-f/Crocodile"));
const CryptRat_1 = __importDefault(require("./a-f/CryptRat"));
const Cyclops_1 = __importDefault(require("./a-f/Cyclops"));
const Dagannoth_1 = __importDefault(require("./a-f/Dagannoth"));
const DagannothSpawn_1 = __importDefault(require("./a-f/DagannothSpawn"));
const DaganothFledgeling_1 = __importDefault(require("./a-f/DaganothFledgeling"));
const DarkBeast_1 = __importDefault(require("./a-f/DarkBeast"));
const DarkWarrior_1 = __importDefault(require("./a-f/DarkWarrior"));
const DeadlyRedSpider_1 = __importDefault(require("./a-f/DeadlyRedSpider"));
const DeathWing_1 = __importDefault(require("./a-f/DeathWing"));
const DemonicGorilla_1 = __importDefault(require("./a-f/DemonicGorilla"));
const DesertBandit_1 = __importDefault(require("./a-f/DesertBandit"));
const DesertLizard_1 = __importDefault(require("./a-f/DesertLizard"));
const DesertWolf_1 = __importDefault(require("./a-f/DesertWolf"));
const DeviantSpectre_1 = __importDefault(require("./a-f/DeviantSpectre"));
const Drake_1 = __importDefault(require("./a-f/Drake"));
const Duck_1 = __importDefault(require("./a-f/Duck"));
const Duckling_1 = __importDefault(require("./a-f/Duckling"));
const DungeonRat_1 = __importDefault(require("./a-f/DungeonRat"));
const DustDevil_1 = __importDefault(require("./a-f/DustDevil"));
const Dwarf_1 = __importDefault(require("./a-f/Dwarf"));
const DwarfGangMember_1 = __importDefault(require("./a-f/DwarfGangMember"));
const EarthWarrior_1 = __importDefault(require("./a-f/EarthWarrior"));
const ElderChaosDruid_1 = __importDefault(require("./a-f/ElderChaosDruid"));
const Elf_1 = __importDefault(require("./a-f/Elf"));
const ElfArcher_1 = __importDefault(require("./a-f/ElfArcher"));
const ElfWarrior_1 = __importDefault(require("./a-f/ElfWarrior"));
const Ent_1 = __importDefault(require("./a-f/Ent"));
const Farmer_1 = __importDefault(require("./a-f/Farmer"));
const FemaleHamMember_1 = __importDefault(require("./a-f/FemaleHamMember"));
const FeralVampyre_1 = __importDefault(require("./a-f/FeralVampyre"));
const FeverSpider_1 = __importDefault(require("./a-f/FeverSpider"));
const FireGiant_1 = __importDefault(require("./a-f/FireGiant"));
const FiyrShade_1 = __importDefault(require("./a-f/FiyrShade"));
const FleshCrawler_1 = __importDefault(require("./a-f/FleshCrawler"));
const FossilIslandWyvernAncient_1 = __importDefault(require("./a-f/FossilIslandWyvernAncient"));
const FossilIslandWyvernLongTailed_1 = __importDefault(require("./a-f/FossilIslandWyvernLongTailed"));
const FossilIslandWyvernSpitting_1 = __importDefault(require("./a-f/FossilIslandWyvernSpitting"));
const FossilIslandWyvernTaloned_1 = __importDefault(require("./a-f/FossilIslandWyvernTaloned"));
const FremennikCitizen_1 = __importDefault(require("./a-f/FremennikCitizen"));
const Gargoyle_1 = __importDefault(require("./g-m/Gargoyle"));
const Ghost_1 = __importDefault(require("./g-m/Ghost"));
const Ghoul_1 = __importDefault(require("./g-m/Ghoul"));
const GiantBat_1 = __importDefault(require("./g-m/GiantBat"));
const GiantCryptSpider_1 = __importDefault(require("./g-m/GiantCryptSpider"));
const GiantFrog_1 = __importDefault(require("./g-m/GiantFrog"));
const GiantRat_1 = __importDefault(require("./g-m/GiantRat"));
const GiantSeaSnake_1 = __importDefault(require("./g-m/GiantSeaSnake"));
const GiantSpider_1 = __importDefault(require("./g-m/GiantSpider"));
const Gnome_1 = __importDefault(require("./g-m/Gnome"));
const Goat_1 = __importDefault(require("./g-m/Goat"));
const Goblin_1 = __importDefault(require("./g-m/Goblin"));
const GreaterDemon_1 = __importDefault(require("./g-m/GreaterDemon"));
const GreaterNechryael_1 = __importDefault(require("./g-m/GreaterNechryael"));
const GreenDragon_1 = __importDefault(require("./g-m/GreenDragon"));
const GrizzlyBear_1 = __importDefault(require("./g-m/GrizzlyBear"));
const GrizzlyBearCub_1 = __importDefault(require("./g-m/GrizzlyBearCub"));
const Guard_1 = __importDefault(require("./g-m/Guard"));
const GuardBandit_1 = __importDefault(require("./g-m/GuardBandit"));
const GuardDog_1 = __importDefault(require("./g-m/GuardDog"));
const HarpieBugSwarm_1 = __importDefault(require("./g-m/HarpieBugSwarm"));
const Hellhound_1 = __importDefault(require("./g-m/Hellhound"));
const Hero_1 = __importDefault(require("./g-m/Hero"));
const HillGiant_1 = __importDefault(require("./g-m/HillGiant"));
const Hobgoblin_1 = __importDefault(require("./g-m/Hobgoblin"));
const Hydra_1 = __importDefault(require("./g-m/Hydra"));
const IceGiant_1 = __importDefault(require("./g-m/IceGiant"));
const IceTroll_1 = __importDefault(require("./g-m/IceTroll"));
const IceWarrior_1 = __importDefault(require("./g-m/IceWarrior"));
const IceWolf_1 = __importDefault(require("./g-m/IceWolf"));
const Icefiend_1 = __importDefault(require("./g-m/Icefiend"));
const Imp_1 = __importDefault(require("./g-m/Imp"));
const InfernalMage_1 = __importDefault(require("./g-m/InfernalMage"));
const IorwerthArcher_1 = __importDefault(require("./g-m/IorwerthArcher"));
const IorwerthWarrior_1 = __importDefault(require("./g-m/IorwerthWarrior"));
const IronDragon_1 = __importDefault(require("./g-m/IronDragon"));
const Jackal_1 = __importDefault(require("./g-m/Jackal"));
const Jelly_1 = __importDefault(require("./g-m/Jelly"));
const Jogre_1 = __importDefault(require("./g-m/Jogre"));
const JubblyBird_1 = __importDefault(require("./g-m/JubblyBird"));
const JungleHorror_1 = __importDefault(require("./g-m/JungleHorror"));
const JungleWolf_1 = __importDefault(require("./g-m/JungleWolf"));
const KalphiteGuardian_1 = __importDefault(require("./g-m/KalphiteGuardian"));
const KalphiteSoldier_1 = __importDefault(require("./g-m/KalphiteSoldier"));
const KalphiteWorker_1 = __importDefault(require("./g-m/KalphiteWorker"));
const Killerwatt_1 = __importDefault(require("./g-m/Killerwatt"));
const KingScorpion_1 = __importDefault(require("./g-m/KingScorpion"));
const KnightOfArdougne_1 = __importDefault(require("./g-m/KnightOfArdougne"));
const Kurask_1 = __importDefault(require("./g-m/Kurask"));
const LavaDragon_1 = __importDefault(require("./g-m/LavaDragon"));
const LesserDemon_1 = __importDefault(require("./g-m/LesserDemon"));
const Lizard_1 = __importDefault(require("./g-m/Lizard"));
const Lizardman_1 = __importDefault(require("./g-m/Lizardman"));
const LizardmanBrute_1 = __importDefault(require("./g-m/LizardmanBrute"));
const LizardmanShaman_1 = __importDefault(require("./g-m/LizardmanShaman"));
const LoarShade_1 = __importDefault(require("./g-m/LoarShade"));
const Lobstrosity_1 = __importDefault(require("./g-m/Lobstrosity"));
const LocustRider_1 = __importDefault(require("./g-m/LocustRider"));
const MagicAxe_1 = __importDefault(require("./g-m/MagicAxe"));
const MaleHamMember_1 = __importDefault(require("./g-m/MaleHamMember"));
const Mammoth_1 = __importDefault(require("./g-m/Mammoth"));
const Man_1 = __importDefault(require("./g-m/Man"));
const ManiacalMonkey_1 = __importDefault(require("./g-m/ManiacalMonkey"));
const MasterFarmer_1 = __importDefault(require("./g-m/MasterFarmer"));
const MenaphiteThug_1 = __importDefault(require("./g-m/MenaphiteThug"));
const Minotaur_1 = __importDefault(require("./g-m/Minotaur"));
const MithrilDragon_1 = __importDefault(require("./g-m/MithrilDragon"));
const Mogre_1 = __importDefault(require("./g-m/Mogre"));
const Molanisk_1 = __importDefault(require("./g-m/Molanisk"));
const Monkey_1 = __importDefault(require("./g-m/Monkey"));
const MonkeyArcher_1 = __importDefault(require("./g-m/MonkeyArcher"));
const MonkeyGuard_1 = __importDefault(require("./g-m/MonkeyGuard"));
const MonkeyZombie_1 = __importDefault(require("./g-m/MonkeyZombie"));
const MossGiant_1 = __importDefault(require("./g-m/MossGiant"));
const MountainTroll_1 = __importDefault(require("./g-m/MountainTroll"));
const MountedTerrorBirdGnome_1 = __importDefault(require("./g-m/MountedTerrorBirdGnome"));
const Mourner_1 = __importDefault(require("./g-m/Mourner"));
const MutatedBloodveld_1 = __importDefault(require("./g-m/MutatedBloodveld"));
const Nechryael_1 = __importDefault(require("./n-s/Nechryael"));
const Ogre_1 = __importDefault(require("./n-s/Ogre"));
const OgressShaman_1 = __importDefault(require("./n-s/OgressShaman"));
const OgressWarrior_1 = __importDefault(require("./n-s/OgressWarrior"));
const Otherworldlybeing_1 = __importDefault(require("./n-s/Otherworldlybeing"));
const Paladin_1 = __importDefault(require("./n-s/Paladin"));
const Penguin_1 = __importDefault(require("./n-s/Penguin"));
const PhrinShade_1 = __importDefault(require("./n-s/PhrinShade"));
const Pirate_1 = __importDefault(require("./n-s/Pirate"));
const PitScorpion_1 = __importDefault(require("./n-s/PitScorpion"));
const PoisonScorpion_1 = __importDefault(require("./n-s/PoisonScorpion"));
const PollnivnianBandit_1 = __importDefault(require("./n-s/PollnivnianBandit"));
const Porazdir_1 = __importDefault(require("./n-s/Porazdir"));
const PrifddinasElf_1 = __importDefault(require("./n-s/PrifddinasElf"));
const PriffRabbit_1 = __importDefault(require("./n-s/PriffRabbit"));
const Pyrefiend_1 = __importDefault(require("./n-s/Pyrefiend"));
const Pyrelord_1 = __importDefault(require("./n-s/Pyrelord"));
const Rat_1 = __importDefault(require("./n-s/Rat"));
const RedDragon_1 = __importDefault(require("./n-s/RedDragon"));
const RevenantCyclops_1 = __importDefault(require("./n-s/RevenantCyclops"));
const RevenantDarkBeast_1 = __importDefault(require("./n-s/RevenantDarkBeast"));
const RevenantDemon_1 = __importDefault(require("./n-s/RevenantDemon"));
const RevenantDragon_1 = __importDefault(require("./n-s/RevenantDragon"));
const RevenantGoblin_1 = __importDefault(require("./n-s/RevenantGoblin"));
const RevenantHellhound_1 = __importDefault(require("./n-s/RevenantHellhound"));
const RevenantHobgoblin_1 = __importDefault(require("./n-s/RevenantHobgoblin"));
const RevenantImp_1 = __importDefault(require("./n-s/RevenantImp"));
const RevenantKnight_1 = __importDefault(require("./n-s/RevenantKnight"));
const RevenantOrk_1 = __importDefault(require("./n-s/RevenantOrk"));
const RevenantPyrefiend_1 = __importDefault(require("./n-s/RevenantPyrefiend"));
const RiylShade_1 = __importDefault(require("./n-s/RiylShade"));
const Rockslug_1 = __importDefault(require("./n-s/Rockslug"));
const Rogue_1 = __importDefault(require("./n-s/Rogue"));
const Rooster_1 = __importDefault(require("./n-s/Rooster"));
const RuneDragon_1 = __importDefault(require("./n-s/RuneDragon"));
const ScarabMage_1 = __importDefault(require("./n-s/ScarabMage"));
const Scorpion_1 = __importDefault(require("./n-s/Scorpion"));
const SeaSnakeHatchling_1 = __importDefault(require("./n-s/SeaSnakeHatchling"));
const SeaSnakeYoung_1 = __importDefault(require("./n-s/SeaSnakeYoung"));
const Seagull_1 = __importDefault(require("./n-s/Seagull"));
const Shade_1 = __importDefault(require("./n-s/Shade"));
const ShadowSpider_1 = __importDefault(require("./n-s/ShadowSpider"));
const ShadowWarrior_1 = __importDefault(require("./n-s/ShadowWarrior"));
const SkeletalWyvern_1 = __importDefault(require("./n-s/SkeletalWyvern"));
const Skeleton_1 = __importDefault(require("./n-s/Skeleton"));
const SkeletonFremennik_1 = __importDefault(require("./n-s/SkeletonFremennik"));
const SkeletonMage_1 = __importDefault(require("./n-s/SkeletonMage"));
const Skogre_1 = __importDefault(require("./n-s/Skogre"));
const SmallLizard_1 = __importDefault(require("./n-s/SmallLizard"));
const SmokeDevil_1 = __importDefault(require("./n-s/SmokeDevil"));
const Spider_1 = __importDefault(require("./n-s/Spider"));
const SpiritualMage_1 = __importDefault(require("./n-s/SpiritualMage"));
const SpiritualRanger_1 = __importDefault(require("./n-s/SpiritualRanger"));
const SpiritualWarrior_1 = __importDefault(require("./n-s/SpiritualWarrior"));
const SteelDragon_1 = __importDefault(require("./n-s/SteelDragon"));
const SulphurLizard_1 = __importDefault(require("./n-s/SulphurLizard"));
const Suqah_1 = __importDefault(require("./n-s/Suqah"));
const TempleSpider_1 = __importDefault(require("./t-z/TempleSpider"));
const TerrorBird_1 = __importDefault(require("./t-z/TerrorBird"));
const TerrorDog_1 = __importDefault(require("./t-z/TerrorDog"));
const TormentedDemon_1 = __importDefault(require("./t-z/TormentedDemon"));
const TorturedGorilla_1 = __importDefault(require("./t-z/TorturedGorilla"));
const TorturedSoul_1 = __importDefault(require("./t-z/TorturedSoul"));
const TrollGeneral_1 = __importDefault(require("./t-z/TrollGeneral"));
const Turoth_1 = __importDefault(require("./t-z/Turoth"));
const TwistedBanshee_1 = __importDefault(require("./t-z/TwistedBanshee"));
const TzHaarHur_1 = __importDefault(require("./t-z/TzHaarHur"));
const TzHaarKet_1 = __importDefault(require("./t-z/TzHaarKet"));
const TzHaarMej_1 = require("./t-z/TzHaarMej");
const TzHaarXil_1 = require("./t-z/TzHaarXil");
const UndeadChicken_1 = __importDefault(require("./t-z/UndeadChicken"));
const UndeadCow_1 = __importDefault(require("./t-z/UndeadCow"));
const UndeadDruid_1 = __importDefault(require("./t-z/UndeadDruid"));
const UndeadOne_1 = __importDefault(require("./t-z/UndeadOne"));
const Unicorn_1 = __importDefault(require("./t-z/Unicorn"));
const UriumShade_1 = __importDefault(require("./t-z/UriumShade"));
const VampyreJuvinate_1 = __importDefault(require("./t-z/VampyreJuvinate"));
const Vyre_1 = __importDefault(require("./t-z/Vyre"));
const Vyrewatch_1 = __importDefault(require("./t-z/Vyrewatch"));
const VyrewatchSentinel_1 = __importDefault(require("./t-z/VyrewatchSentinel"));
const WallBeast_1 = __importDefault(require("./t-z/WallBeast"));
const WarpedJelly_1 = __importDefault(require("./t-z/WarpedJelly"));
const WarriorWoman_1 = __importDefault(require("./t-z/WarriorWoman"));
const Waterfiend_1 = __importDefault(require("./t-z/Waterfiend"));
const Werewolf_1 = __importDefault(require("./t-z/Werewolf"));
const WhiteWolf_1 = __importDefault(require("./t-z/WhiteWolf"));
const WildDog_1 = __importDefault(require("./t-z/WildDog"));
const Wolf_1 = __importDefault(require("./t-z/Wolf"));
const Woman_1 = __importDefault(require("./t-z/Woman"));
const Wyrm_1 = __importDefault(require("./t-z/Wyrm"));
const YanilleWatchman_1 = __importDefault(require("./t-z/YanilleWatchman"));
const Zogre_1 = __importDefault(require("./t-z/Zogre"));
const Zombie_1 = __importDefault(require("./t-z/Zombie"));
const ZombiePirate_1 = __importDefault(require("./t-z/ZombiePirate"));
const ZombieRat_1 = __importDefault(require("./t-z/ZombieRat"));
const Zygomite_1 = __importDefault(require("./t-z/Zygomite"));
exports.allLowMonsters = {
    BloodReaver: BloodReaver_1.default,
    BrutalBlackDragon: BrutalBlackDragon_1.default,
    BabyBlackDragon: BabyBlackDragon_1.default,
    Bandit: Bandit_1.default,
    ArmadylianGuard: ArmadylianGuard_1.default,
    BlackKnight: BlackKnight_1.default,
    DarkWarrior: DarkWarrior_1.default,
    DeadlyRedSpider: DeadlyRedSpider_1.default,
    ElderChaosDruid: ElderChaosDruid_1.default,
    Ent: Ent_1.default,
    RevenantCyclops: RevenantCyclops_1.default,
    RevenantPyrefiend: RevenantPyrefiend_1.default,
    RevenantOrk: RevenantOrk_1.default,
    RevenantKnight: RevenantKnight_1.default,
    RevenantImp: RevenantImp_1.default,
    RevenantHobgoblin: RevenantHobgoblin_1.default,
    RevenantHellhound: RevenantHellhound_1.default,
    RevenantGoblin: RevenantGoblin_1.default,
    RevenantDragon: RevenantDragon_1.default,
    RevenantDemon: RevenantDemon_1.default,
    RevenantDarkBeast: RevenantDarkBeast_1.default,
    Pirate: Pirate_1.default,
    Mammoth: Mammoth_1.default,
    MagicAxe: MagicAxe_1.default,
    LavaDragon: LavaDragon_1.default,
    GuardBandit: GuardBandit_1.default,
    DagannothSpawn: DagannothSpawn_1.default,
    FeralVampyre: FeralVampyre_1.default,
    FeverSpider: FeverSpider_1.default,
    GiantSeaSnake: GiantSeaSnake_1.default,
    GreaterNechryael: GreaterNechryael_1.default,
    GreenDragon: GreenDragon_1.default,
    HarpieBugSwarm: HarpieBugSwarm_1.default,
    InfernalMage: InfernalMage_1.default,
    JungleHorror: JungleHorror_1.default,
    Killerwatt: Killerwatt_1.default,
    LesserDemon: LesserDemon_1.default,
    ElfArcher: ElfArcher_1.default,
    FleshCrawler: FleshCrawler_1.default,
    FiyrShade: FiyrShade_1.default,
    DeviantSpectre: DeviantSpectre_1.default,
    DagannothPrime: DagannothPrime_1.default,
    DaganothFledgeling: DaganothFledgeling_1.default,
    Hydra: Hydra_1.default,
    IceGiant: IceGiant_1.default,
    IceTroll: IceTroll_1.default,
    IceWarrior: IceWarrior_1.default,
    PhrinShade: PhrinShade_1.default,
    Otherworldlybeing: Otherworldlybeing_1.default,
    MutatedBloodveld: MutatedBloodveld_1.default,
    Mourner: Mourner_1.default,
    MossGiant: MossGiant_1.default,
    Molanisk: Molanisk_1.default,
    Mogre: Mogre_1.default,
    LoarShade: LoarShade_1.default,
    LizardmanBrute: LizardmanBrute_1.default,
    Jelly: Jelly_1.default,
    IorwerthArcher: IorwerthArcher_1.default,
    IorwerthWarrior: IorwerthWarrior_1.default,
    Werewolf: Werewolf_1.default,
    Waterfiend: Waterfiend_1.default,
    WarpedJelly: WarpedJelly_1.default,
    WallBeast: WallBeast_1.default,
    VyrewatchSentinel: VyrewatchSentinel_1.default,
    Vyrewatch: Vyrewatch_1.default,
    VampyreJuvinate: VampyreJuvinate_1.default,
    TzHaarKet: TzHaarKet_1.default,
    TrollGeneral: TrollGeneral_1.default,
    TerrorDog: TerrorDog_1.default,
    ShadowWarrior: ShadowWarrior_1.default,
    Shade: Shade_1.default,
    SeaSnakeYoung: SeaSnakeYoung_1.default,
    SeaSnakeHatchling: SeaSnakeHatchling_1.default,
    Rockslug: Rockslug_1.default,
    RiylShade: RiylShade_1.default,
    Pyrefiend: Pyrefiend_1.default,
    Pyrelord: Pyrelord_1.default,
    Porazdir: Porazdir_1.default,
    Ogre: Ogre_1.default,
    OgressShaman: OgressShaman_1.default,
    OgressWarrior: OgressWarrior_1.default,
    AncientZygomite: AncientZygomite_1.default,
    AsynShade: AsynShade_1.default,
    BabyBlueDragon: BabyBlueDragon_1.default,
    BabyGreenDragon: BabyGreenDragon_1.default,
    BabyRedDragon: BabyRedDragon_1.default,
    BronzeDragon: BronzeDragon_1.default,
    BrutalBlueDragon: BrutalBlueDragon_1.default,
    BrutalGreenDragon: BrutalGreenDragon_1.default,
    BrutalRedDragon: BrutalRedDragon_1.default,
    Catablepon: Catablepon_1.default,
    Cockatrice: Cockatrice_1.default,
    Crocodile: Crocodile_1.default,
    Cyclops: Cyclops_1.default,
    TempleSpider: TempleSpider_1.default,
    TerrorBird: TerrorBird_1.default,
    TorturedGorilla: TorturedGorilla_1.default,
    TorturedSoul: TorturedSoul_1.default,
    TwistedBanshee: TwistedBanshee_1.default,
    UndeadChicken: UndeadChicken_1.default,
    UndeadCow: UndeadCow_1.default,
    UndeadDruid: UndeadDruid_1.default,
    UndeadOne: UndeadOne_1.default,
    UriumShade: UriumShade_1.default,
    WhiteWolf: WhiteWolf_1.default,
    WildDog: WildDog_1.default,
    Zogre: Zogre_1.default,
    ZombieRat: ZombieRat_1.default,
    Penguin: Penguin_1.default,
    PitScorpion: PitScorpion_1.default,
    PoisonScorpion: PoisonScorpion_1.default,
    Rooster: Rooster_1.default,
    Seagull: Seagull_1.default,
    ShadowSpider: ShadowSpider_1.default,
    SkeletonFremennik: SkeletonFremennik_1.default,
    SkeletonMage: SkeletonMage_1.default,
    Skogre: Skogre_1.default,
    SmallLizard: SmallLizard_1.default,
    SulphurLizard: SulphurLizard_1.default,
    GiantBat: GiantBat_1.default,
    GiantCryptSpider: GiantCryptSpider_1.default,
    GiantRat: GiantRat_1.default,
    GiantSpider: GiantSpider_1.default,
    GrizzlyBear: GrizzlyBear_1.default,
    GrizzlyBearCub: GrizzlyBearCub_1.default,
    IceWolf: IceWolf_1.default,
    Jackal: Jackal_1.default,
    JungleWolf: JungleWolf_1.default,
    KalphiteGuardian: KalphiteGuardian_1.default,
    KalphiteSoldier: KalphiteSoldier_1.default,
    KingScorpion: KingScorpion_1.default,
    Lobstrosity: Lobstrosity_1.default,
    MonkeyArcher: MonkeyArcher_1.default,
    MonkeyGuard: MonkeyGuard_1.default,
    MonkeyZombie: MonkeyZombie_1.default,
    MountedTerrorBirdGnome: MountedTerrorBirdGnome_1.default,
    BearCub: BearCub_1.default,
    BigWolf: BigWolf_1.default,
    Bird: Bird_1.default,
    BlackGuard: BlackGuard_1.default,
    CaveGoblinGuard: CaveGoblinGuard_1.default,
    ChaosDwarf: ChaosDwarf_1.default,
    Chicken: Chicken_1.default,
    ChompyBird: ChompyBird_1.default,
    CowCalf: CowCalf_1.default,
    CryptRat: CryptRat_1.default,
    DeathWing: DeathWing_1.default,
    DesertLizard: DesertLizard_1.default,
    DesertWolf: DesertWolf_1.default,
    Duck: Duck_1.default,
    Duckling: Duckling_1.default,
    DungeonRat: DungeonRat_1.default,
    DwarfGangMember: DwarfGangMember_1.default,
    AberrantSpectre: AberrantSpectre_1.default,
    Dagannoth: Dagannoth_1.default,
    Guard: Guard_1.default,
    RedDragon: RedDragon_1.default,
    AbyssalDemon: AbyssalDemon_1.default,
    DarkBeast: DarkBeast_1.default,
    Hellhound: Hellhound_1.default,
    RuneDragon: RuneDragon_1.default,
    AdamantDragon: AdamantDragon_1.default,
    DemonicGorilla: DemonicGorilla_1.default,
    ScarabMage: ScarabMage_1.default,
    Ankou: Ankou_1.default,
    Drake: Drake_1.default,
    IronDragon: IronDragon_1.default,
    SkeletalWyvern: SkeletalWyvern_1.default,
    Aviansie: Aviansie_1.default,
    DustDevil: DustDevil_1.default,
    KalphiteWorker: KalphiteWorker_1.default,
    SmokeDevil: SmokeDevil_1.default,
    BasiliskKnight: BasiliskKnight_1.default,
    ElfWarrior: ElfWarrior_1.default,
    Kurask: Kurask_1.default,
    SpiritualMage: SpiritualMage_1.default,
    Basilisk: Basilisk_1.default,
    FireGiant: FireGiant_1.default,
    LizardmanShaman: LizardmanShaman_1.default,
    SpiritualRanger: SpiritualRanger_1.default,
    BlackDemon: BlackDemon_1.default,
    FossilIslandWyvernAncient: FossilIslandWyvernAncient_1.default,
    Lizardman: Lizardman_1.default,
    SpiritualWarrior: SpiritualWarrior_1.default,
    BlackDragon: BlackDragon_1.default,
    FossilIslandWyvernLongTailed: FossilIslandWyvernLongTailed_1.default,
    LocustRider: LocustRider_1.default,
    SteelDragon: SteelDragon_1.default,
    Bloodveld: Bloodveld_1.default,
    FossilIslandWyvernSpitting: FossilIslandWyvernSpitting_1.default,
    Man: Man_1.default,
    Suqah: Suqah_1.default,
    BlueDragon: BlueDragon_1.default,
    FossilIslandWyvernTaloned: FossilIslandWyvernTaloned_1.default,
    MithrilDragon: MithrilDragon_1.default,
    Turoth: Turoth_1.default,
    BrineRat: BrineRat_1.default,
    Gargoyle: Gargoyle_1.default,
    MountainTroll: MountainTroll_1.default,
    Woman: Woman_1.default,
    CaveHorror: CaveHorror_1.default,
    Goblin: Goblin_1.default,
    Zygomite: Zygomite_1.default,
    Wyrm: Wyrm_1.default,
    CaveKraken: CaveKraken_1.default,
    GreaterDemon: GreaterDemon_1.default,
    Nechryael: Nechryael_1.default,
    Banshee: Banshee_1.default,
    CaveBug: CaveBug_1.default,
    Cow: Cow_1.default,
    Dwarf: Dwarf_1.default,
    Lizard: Lizard_1.default,
    Rat: Rat_1.default,
    Spider: Spider_1.default,
    Bat: Bat_1.default,
    CaveCrawler: CaveCrawler_1.default,
    CrawlingHand: CrawlingHand_1.default,
    Ghost: Ghost_1.default,
    Minotaur: Minotaur_1.default,
    Scorpion: Scorpion_1.default,
    Wolf: Wolf_1.default,
    BlackBear: BlackBear_1.default,
    CaveSlime: CaveSlime_1.default,
    GuardDog: GuardDog_1.default,
    Icefiend: Icefiend_1.default,
    Monkey: Monkey_1.default,
    Skeleton: Skeleton_1.default,
    Zombie: Zombie_1.default,
    HillGiant: HillGiant_1.default,
    BeardedBandit: BeardedBandit_1.default,
    CaveGoblin: CaveGoblin_1.default,
    DesertBandit: DesertBandit_1.default,
    Elf: Elf_1.default,
    Farmer: Farmer_1.default,
    FremennikCitizen: FremennikCitizen_1.default,
    Gnome: Gnome_1.default,
    Goat: Goat_1.default,
    MaleHamMember: MaleHamMember_1.default,
    FemaleHamMember: FemaleHamMember_1.default,
    Hero: Hero_1.default,
    KnightOfArdougne: KnightOfArdougne_1.default,
    MasterFarmer: MasterFarmer_1.default,
    Paladin: Paladin_1.default,
    YanilleWatchman: YanilleWatchman_1.default,
    Vyre: Vyre_1.default,
    TzHaarHur: TzHaarHur_1.default,
    Rogue: Rogue_1.default,
    PrifddinasElf: PrifddinasElf_1.default,
    PollnivnianBandit: PollnivnianBandit_1.default,
    WarriorWoman: WarriorWoman_1.default,
    AlKharidWarrior: AlKharidWarrior_1.default,
    Ghoul: Ghoul_1.default,
    EarthWarrior: EarthWarrior_1.default,
    Imp: Imp_1.default,
    Jogre: Jogre_1.default,
    Hobgoblin: Hobgoblin_1.default,
    ChaosDruid: ChaosDruid_1.default,
    Unicorn: Unicorn_1.default,
    MenaphiteThug: MenaphiteThug_1.default,
    PriffRabbit: PriffRabbit_1.default,
    TzHaarXil: TzHaarXil_1.TzHaarXil,
    TzHaarMej: TzHaarMej_1.TzHaarMej,
    GiantFrog: GiantFrog_1.default,
    JubblyBird: JubblyBird_1.default,
    ManiacalMonkey: ManiacalMonkey_1.default,
    ZombiePirate: ZombiePirate_1.default,
    TormentedDemon: TormentedDemon_1.default,
    ArmouredZombie: ArmouredZombie_1.default,
    Crab: Crab_1.default,
};
