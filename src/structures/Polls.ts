import _pollArchive from '../data/polls/poll_archive.json';
import { PollWithDOM } from '../meta/types';
import getDom from '../util/getDom';
import { getDate } from '../util/util';
import Collection from './Collection';

const pollArchive = _pollArchive as PollWithDOM[];

class Polls extends Collection<string, PollWithDOM> {
	public async fetchNew(): Promise<PollWithDOM[]> {
		const newPolls = [];
		const pollsOfThisYear = await this.fetchYear(2019, false);
		for (const poll of pollsOfThisYear) {
			if (this.has(poll.url)) continue;
			newPolls.push(poll);
		}
		return newPolls;
	}

	public async fetchYear(year: number = getDate().year, cache = true): Promise<PollWithDOM[]> {
		const { document } = await getDom(`http://secure.runescape.com/m=poll/oldschool/archive?year=${year}`);

		const pages = [];

		const links = (Array.from(document.querySelectorAll('.td80percent > a')) as HTMLAnchorElement[]).map(
			(link: HTMLAnchorElement): string => link.href
		);

		for (const link of links) {
			const poll = await this.fetchPageContent(`http://secure.runescape.com/m=poll/oldschool/${link}`, year);
			if (cache) this.set(poll.url, poll);
			pages.push(poll);
		}

		return pages;
	}

	public async fetchPageContent(url: string, year: number): Promise<any> {
		const { document } = await getDom(url);

		const title = document.querySelector('.widescroll-content > h2')!.textContent!.split(' (')[0];

		const description = Array.from(document.querySelector('.widescroll-content')!.childNodes)
			.slice(0, 15)
			.map((node): string => node.textContent!.trim())
			.filter((str): boolean => str.trim().length > 0)
			.slice(1, -1)
			.join(' ');

		const totalVotes = parseInt(
			(document.querySelector('.widescrollWrapper b') as HTMLElement).textContent!.split(': ')[1]
		);

		const datePosted = new Date(
			document.querySelector('.widescroll-content > h2')!.textContent!.split(' (')[1].split(')')[0]
		).getTime();

		const questions = [];

		const questionElements = Array.from(document.querySelectorAll('.question'));

		for (const questionElement of questionElements) {
			const questionText = questionElement.querySelector('b')!.textContent;
			const questionResults = [];
			const voteResultRowList = Array.from(
				questionElement.querySelectorAll('table > tbody > tr')
			) as HTMLElement[];

			for (const row of voteResultRowList) {
				try {
					let voteOption = row.querySelector('.shield')!.textContent!.toLowerCase();
					if (voteOption.includes('skip')) voteOption = 'skip';
					const result = row.querySelector('td:nth-of-type(3)')!.textContent!;
					questionResults.push({
						voteOption,
						percentOfTotal: parseFloat(result.split('%')[0]),
						voteCount: parseInt(result.split('(')[1].split(' ')[0])
					});
				} catch (err) {
					continue;
				}
			}

			questions.push({ question: questionText!, results: questionResults });
		}

		const poll: PollWithDOM = { title, description, datePosted, totalVotes, questions, year, url, dom: document };

		return poll;
	}
}

const polls = new Polls();
for (const poll of pollArchive) {
	polls.set(poll.url, poll);
}

export default polls;
