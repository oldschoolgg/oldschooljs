import { type Errors } from "../constants";
export default class OldSchoolJSError extends Error {
    code: Errors;
    description: string;
    constructor(code: Errors);
}
//# sourceMappingURL=OldSchoolJSError.d.ts.map