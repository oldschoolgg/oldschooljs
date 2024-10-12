import { appendFile, writeFile } from "node:fs/promises";

import { Clues } from "../src";
import { bankToString } from "./scriptUtil";

const SAMPLES = 100_000_000;

async function main() {
	await writeFile("./snapshots/clues.snapshot.tsv", "");
	const allClues = Object.entries(Clues);
	for (const [name, table] of allClues) {
		await appendFile(
			"./snapshots/clues.snapshot.tsv",
			`${name}
${bankToString(SAMPLES, table.roll(SAMPLES, {}))}`,
		);
	}
}

main();
