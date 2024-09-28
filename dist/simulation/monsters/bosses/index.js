"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBosses = void 0;
const Araxxor_1 = require("./Araxxor");
const AwakenedDukeSucellus_1 = require("./AwakenedDukeSucellus");
const AwakenedTheLeviathan_1 = require("./AwakenedTheLeviathan");
const AwakenedTheWhisperer_1 = require("./AwakenedTheWhisperer");
const AwakenedVardorvis_1 = require("./AwakenedVardorvis");
const Bryophyta_1 = __importDefault(require("./Bryophyta"));
const CommanderZilyana_1 = __importDefault(require("./CommanderZilyana"));
const DagannothPrime_1 = __importDefault(require("./DagannothPrime"));
const DagannothRex_1 = __importDefault(require("./DagannothRex"));
const DagannothSupreme_1 = __importDefault(require("./DagannothSupreme"));
const DerangedArchaeologist_1 = __importDefault(require("./DerangedArchaeologist"));
const DukeSucellus_1 = require("./DukeSucellus");
const GeneralGraardor_1 = __importDefault(require("./GeneralGraardor"));
const GiantMole_1 = __importDefault(require("./GiantMole"));
const KalphiteQueen_1 = __importDefault(require("./KalphiteQueen"));
const Kreearra_1 = __importDefault(require("./Kreearra"));
const KrilTsutsaroth_1 = __importDefault(require("./KrilTsutsaroth"));
const Obor_1 = __importDefault(require("./Obor"));
const PhantomMuspah_1 = __importDefault(require("./PhantomMuspah"));
const Sarachnis_1 = __importDefault(require("./Sarachnis"));
const Scurrius_1 = __importDefault(require("./Scurrius"));
const Skotizo_1 = __importDefault(require("./Skotizo"));
const TheLeviathan_1 = require("./TheLeviathan");
const TheWhisperer_1 = require("./TheWhisperer");
const Vardorvis_1 = require("./Vardorvis");
const Vorkath_1 = __importDefault(require("./Vorkath"));
const Zulrah_1 = __importDefault(require("./Zulrah"));
const slayer_1 = require("./slayer");
const wildy_1 = require("./wildy");
const CorporealBeast_1 = __importDefault(require("./wildy/CorporealBeast"));
exports.allBosses = {
    Araxxor: Araxxor_1.Araxxor,
    CorporealBeast: CorporealBeast_1.default,
    DagannothPrime: DagannothPrime_1.default,
    DagannothRex: DagannothRex_1.default,
    DagannothSupreme: DagannothSupreme_1.default,
    GiantMole: GiantMole_1.default,
    KalphiteQueen: KalphiteQueen_1.default,
    Obor: Obor_1.default,
    Sarachnis: Sarachnis_1.default,
    Vorkath: Vorkath_1.default,
    Zulrah: Zulrah_1.default,
    CommanderZilyana: CommanderZilyana_1.default,
    GeneralGraardor: GeneralGraardor_1.default,
    Kreearra: Kreearra_1.default,
    KrilTsutsaroth: KrilTsutsaroth_1.default,
    Bryophyta: Bryophyta_1.default,
    Skotizo: Skotizo_1.default,
    DerangedArchaeologist: DerangedArchaeologist_1.default,
    PhantomMuspah: PhantomMuspah_1.default,
    DukeSucellus: DukeSucellus_1.DukeSucellus,
    Vardorvis: Vardorvis_1.Vardorvis,
    TheLeviathan: TheLeviathan_1.TheLeviathan,
    TheWhisperer: TheWhisperer_1.TheWhisperer,
    AwakenedDukeSucellus: AwakenedDukeSucellus_1.AwakenedDukeSucellus,
    AwakenedTheLeviathan: AwakenedTheLeviathan_1.AwakenedTheLeviathan,
    AwakenedTheWhisperer: AwakenedTheWhisperer_1.AwakenedTheWhisperer,
    AwakenedVardorvis: AwakenedVardorvis_1.AwakenedVardorvis,
    Scurrius: Scurrius_1.default,
    ...wildy_1.allWildyBosses,
    ...slayer_1.allSlayerBosses,
};
