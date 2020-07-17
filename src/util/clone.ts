/**
 * @function
 * @description Deep clone a class instance.
 * @param instance The class instance you want to clone.
 * @returns A new cloned instance.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function clone(instance: any) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
	// @ts-ignore
	return Object.assign(
		Object.create(
			// Set the prototype of the new object to the prototype of the instance.
			// Used to allow new object behave like class instance.
			Object.getPrototypeOf(instance)
		),
		// Prevent shallow copies of nested structures like arrays, etc
		JSON.parse(JSON.stringify(instance))
	);
}
