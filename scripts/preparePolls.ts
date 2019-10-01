import { Polls } from '../dist';
import { writeFileSync, readFileSync } from 'fs';

const currentPolls = JSON.parse(readFileSync('./src/data/polls/poll_archive.json').toString());

export default async function preparePolls(): Promise<void> {
	const newPolls = await Polls.fetchNew();
	console.log(`Found ${newPolls.length} new polls to add.`);
	if (newPolls.length > 0) {
		writeFileSync(
			'./src/data/polls/_poll_archive.json',
			JSON.stringify(
				[...currentPolls, ...newPolls].sort((a, b) => a.datePosted - b.datePosted),
				null,
				4
			)
		);
	}
	console.log('Prepared polls.');
}
