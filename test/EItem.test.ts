import { expect, test } from "vitest";

import { EItem } from "../src/EItem.js";

test("EItem", async () => {
	expect(EItem.TWISTED_BOW).toEqual(20997);
	expect(EItem.COAL).toEqual(453);
});
