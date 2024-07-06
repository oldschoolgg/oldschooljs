import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function minifyDist() {
	for (const path of [join("dist", "data", "monsters_data.json"), join("dist", "data", "items", "item_data.json")]) {
		const jsonString = readFileSync(path).toString();
		const minifiedJson = JSON.stringify(JSON.parse(jsonString));
		writeFileSync(path, minifiedJson);
		console.log(`Minifying ${path}`);
	}
}

minifyDist();
