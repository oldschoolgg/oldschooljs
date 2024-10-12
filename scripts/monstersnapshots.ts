import { appendFile, writeFile } from "node:fs/promises";

import { chunk } from "e";
import { Monsters } from "../src";
import { bankToString } from "./scriptUtil";

const SAMPLES = 20_000_000;
const index = Number(process.argv.slice(2)[0]);

async function main() {
	const fileName = `./snapshots/monsters-${index}.snapshot.tsv`;
	await writeFile(fileName, "");
	const allMonsters = Array.from(Monsters.values()).sort((a, b) => a.name.localeCompare(b.name));
	const chunked = chunk(allMonsters, Math.ceil(allMonsters.length / 4))[index];
	for (let i = 0; i < chunked.length; i++) {
		try {
			const monster = chunked[i];
			console.log(`Processing monster ${monster.name}`);
			await appendFile(
				fileName,
				`${monster.name}
${bankToString(SAMPLES, monster.kill(SAMPLES, {}))}
`,
			);
			console.log(`Monsters remaining: ${chunked.length - i}`);
		} catch (err) {
			console.log(`Error on monster ${chunked[i].name}: ${err}`);
		}
	}
}

main();
