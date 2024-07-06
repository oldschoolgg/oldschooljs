import { promises as fs } from "node:fs";
import * as path from "node:path";

async function walk(dir: string, fileList: string[] = []): Promise<string[]> {
	const files = await fs.readdir(dir);
	for (const file of files) {
		const stat = await fs.stat(path.join(dir, file));
		if (stat.isDirectory()) fileList = await walk(path.join(dir, file), fileList);
		else fileList.push(path.join(dir, file));
	}
	return fileList;
}

export default async function minifyDist(): Promise<void> {
	const arrayOfPaths = await walk("./dist");
	for (const path of arrayOfPaths) {
		if (path.endsWith(".json")) {
			const jsonString = await fs.readFile(path).then((file): string => file.toString());
			const minifiedJson = JSON.stringify(JSON.parse(jsonString));
			await fs.writeFile(path, minifiedJson);
		}
	}
}
