"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSlayerBosses = void 0;
const AbyssalSire_1 = __importDefault(require("./AbyssalSire"));
const AlchemicalHydra_1 = __importDefault(require("./AlchemicalHydra"));
const Cerberus_1 = __importDefault(require("./Cerberus"));
const GrotesqueGuardians_1 = __importDefault(require("./GrotesqueGuardians"));
const Kraken_1 = __importDefault(require("./Kraken"));
const ThermonuclearSmokeDevil_1 = __importDefault(require("./ThermonuclearSmokeDevil"));
exports.allSlayerBosses = {
    AbyssalSire: AbyssalSire_1.default,
    Cerberus: Cerberus_1.default,
    AlchemicalHydra: AlchemicalHydra_1.default,
    GrotesqueGuardians: GrotesqueGuardians_1.default,
    ThermonuclearSmokeDevil: ThermonuclearSmokeDevil_1.default,
    Kraken: Kraken_1.default,
};
