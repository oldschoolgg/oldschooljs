"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
class OldSchoolJSError extends Error {
    code;
    description = "";
    constructor(code) {
        super(code);
        this.name = this.constructor.name;
        this.code = code;
        this.message = constants_1.ErrorDescriptions[code];
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = OldSchoolJSError;
