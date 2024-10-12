import { readFileSync, writeFileSync } from "node:fs";
import { omitBy } from "remeda";
import wtf from "wtf_wikipedia";
import { Monsters } from "../src";

// const constructBody = (pages: string[]): string => {
// 	const encodedPages = pages.map(page => encodeURIComponent(page)).join("\n");
// 	const formData = new URLSearchParams({
// 		title: "Special:Export",
// 		catname: "",
// 		pages: encodedPages,
// 		curonly: "1",
// 		wpDownload: "1",
// 	});
// 	return formData.toString();
// };
// const fetchWikiExport = async (pages: string[]) => {
// 	const url = "https://oldschool.runescape.wiki/w/Special:Export";
// 	const body = constructBody(pages);
// 	const options = {
// 		headers: {
// 			"content-type": "application/x-www-form-urlencoded",
// 			accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
// 			"user-agent": "discord:magnaboy",
// 		},
// 		body,
// 		method: "POST",
// 	};
// 	const xml = await fetch(url, options).then(response => response.text());
// 	const doc = wtf(xml);
// 	const json = doc.json();
// 	return { json, doc };
// };
const transformData = (data: any): any => {
	let {
		id,
		members,
		combat,
		hitpoints,
		"attack style": attackStyle,
		"attack speed": attackSpeed,
		aggressive,
		poisonous,
		immunepoison,
		immunevenom,
		cat,
		examine,
		smwname,
		name,
		slaylvl,
		slayxp,
		assignedby,
		att,
		str,
		def,
		mage,
		range,
		amagic,
		arange,
		dstab,
		dslash,
		dcrush,
		dmagic,
		drange,
		attributes,
	} = data;
	attributes ??= [];
	if (!Array.isArray(attributes)) {
		attributes = [attributes];
	}
	return {
		members: members?.toLowerCase() === "yes",
		combatLevel: combat,
		hitpoints,
		attackType: attackStyle?.toLowerCase().split(", "),
		attackSpeed,
		aggressive: aggressive?.toLowerCase() === "yes",
		poisonous: poisonous?.toLowerCase().includes("yes"),
		immuneToPoison: immunepoison?.toLowerCase() === "yes",
		immuneToVenom: immunevenom?.toLowerCase() === "yes",
		attributes: attributes ?? [],
		category: cat?.toLowerCase().split(", "),
		examineText: examine,
		wikiName: name,
		wikiURL: `https://oldschool.runescape.wiki/w/${name}`,
		attackLevel: att,
		strengthLevel: str,
		defenceLevel: def,
		magicLevel: mage,
		rangedLevel: range,
		attackStab: 0,
		attackSlash: 0,
		attackCrush: 0,
		attackMagic: amagic,
		attackRanged: arange,
		defenceStab: dstab,
		defenceSlash: Number(dslash),
		defenceCrush: Number(dcrush),
		defenceMagic: Number(dmagic),
		defenceRanged: Number(drange),
		attackAccuracy: 0,
		meleeStrength: 0,
		rangedStrength: 0,
		magicDamage: 0,
		isSlayerMonster: !!slaylvl,
		slayerLevelRequired: slaylvl,
		slayerXP: slayxp,
		assignableSlayerMasters: assignedby?.split(",").map(master => master.trim().toLowerCase()),
	};
};

async function main() {
	// const { json, doc }: any = await fetchWikiExport([Monsters.map(m => [m.data?.wikiName, m.name])].flat(222));
	const json = wtf(readFileSync("wiki.xml", "utf-8")).json();
	const sections = json.sections
		.map(s => s.infoboxes)
		.flat(100)
		.filter(s => s && Boolean(s.name) && Boolean(s.examine) && Boolean(s.hitpoints))
		.map(s =>
			omitBy(s, (value, key) =>
				["version", "image", "release", "examine", "update"].some(str => key.startsWith(str)),
			),
		);
	for (let i = 0; i < sections.length; i++) {
		const section = sections[i];
		const allIDs: any[] = [];
		for (const [key, val] of Object.entries(section) as any[]) {
			if (key.startsWith("id") && key.length !== 2) {
				allIDs.push(val.text);
				continue;
			}
			section[key] = val.number ?? val.text ?? val;
		}
		section.allIDs = allIDs
			.map(idOrIdArr => (idOrIdArr.includes(",") ? idOrIdArr.split(",") : idOrIdArr))
			.flat(100)
			.map(id => Number(id.trim()))
			.sort((a, b) => a - b);
	}

	const obj = {};
	// const obj: any = JSON.parse(readFileSync("./src/data/monsters_data.json", "utf-8"));
	for (const section of sections) {
		const existingMonster = Monsters.find(m => m.name === section.name);
		obj[existingMonster?.id ?? section.id] = transformData(section);
	}
	writeFileSync("test.json", JSON.stringify(obj, null, 4));
}

main();
