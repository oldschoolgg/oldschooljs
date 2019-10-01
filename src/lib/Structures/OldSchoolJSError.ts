import { Errors, ErrorDescriptions } from '../Util/constants';

export default class OldSchoolJSError extends Error {
	public code: Errors;
	public description: string;

	public constructor(code: Errors) {
		super(code);
		this.name = this.constructor.name;
		this.code = code;
		this.description = ErrorDescriptions[code];
		if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
	}
}
