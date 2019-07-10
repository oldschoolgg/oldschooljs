import fetch from 'node-fetch';
import { WikiPage } from '../../meta/types';

const WIKI_URL = 'https://oldschool.runescape.wiki/api.php';

class Wiki {
	public async random(): Promise<WikiPage[]> {
		const results = await this.fetchAPI({
			action: 'query',
			format: 'json',
			prop: ['extracts', 'pageimages', 'info'].join('|'),
			generator: 'random',
			formatversion: '2',
			exsentences: '5',
			exintro: '1',
			explaintext: '1',
			piprop: 'original',
			inprop: 'url',
			grnnamespace: '0',
			grnlimit: '10'
		});

		if (!results || !results.query) return [];
		return results.query.pages.map(this.parseRawPage);
	}

	public async search(query: string): Promise<WikiPage[]> {
		const results = await this.fetchAPI({
			action: 'query',
			format: 'json',
			prop: ['extracts', 'pageimages', 'info'].join('|'),
			iwurl: '1',
			generator: 'search',
			formatversion: '2',
			exsentences: '5',
			exintro: '1',
			explaintext: '1',
			piprop: 'original',
			inprop: 'url',
			gsrsearch: encodeURIComponent(query),
			gsrlimit: '1'
		});

		const pages: WikiPage[] = [];

		if (!results || !results.query) return pages;
		return results.query.pages.map(this.parseRawPage);
	}

	private parseRawPage(rawPage: any): WikiPage {
		return {
			title: rawPage.title,
			extract: rawPage.extract,
			image: rawPage.original && rawPage.original.source,
			url: rawPage.fullurl,
			lastRevisionID: rawPage.lastrevid,
			pageID: rawPage.pageid
		};
	}

	private fetchAPI(query: any): Promise<any> {
		const apiURL = new URL(WIKI_URL);
		apiURL.search = new URLSearchParams(query).toString();

		return fetch(apiURL.toString()).then((res): Promise<any> => res.json());
	}
}

export default new Wiki();
