"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialBosses = void 0;
const Barrows_1 = __importDefault(require("./Barrows"));
const Hespori_1 = __importDefault(require("./Hespori"));
const TzKalZuk_1 = require("./TzKalZuk");
const TzTokJad_1 = __importDefault(require("./TzTokJad"));
exports.specialBosses = { Barrows: Barrows_1.default, TzTokJad: TzTokJad_1.default, Hespori: Hespori_1.default, TzKalZuk: TzKalZuk_1.TzKalZuk };
