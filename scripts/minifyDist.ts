import { promises as fs } from 'fs';
import * as path from 'path';
import { minify } from 'terser';

async function walk(dir: string, fileList: string[] = []) {
	const files = await fs.readdir(dir);
	for (const file of files) {
		const stat = await fs.stat(path.join(dir, file));
		if (stat.isDirectory()) fileList = await walk(path.join(dir, file), fileList);
		else fileList.push(path.join(dir, file));
	}
	return fileList;
}

export default async function minifyDist() {
	const arrayOfPaths = await walk('./dist');
	for (const path of arrayOfPaths) {
		if (path.endsWith('.js')) {
			const codeAsString = await fs.readFile(path).then(file => file.toString());
			const { code, error } = minify(codeAsString);
			if (error || !code) {
				console.error(error);
				process.exit();
			}
			await fs.writeFile(path, code);
		}

		if (path.endsWith('.json')) {
			const jsonString = await fs.readFile(path).then(file => file.toString());
			const minifiedJson = JSON.stringify(JSON.parse(jsonString));
			await fs.writeFile(path, minifiedJson);
		}
	}
}
