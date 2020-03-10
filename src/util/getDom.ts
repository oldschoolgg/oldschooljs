import { DOMWindow } from 'jsdom';
import fetch from 'node-fetch';

/**
 * Gets a DOM for a page.
 * @param link The page to fetch a DOM for.
 */
export default async function getDom(link: string): Promise<DOMWindow> {
	const html: string = await fetch(link).then((res): Promise<string> => res.text());
	return new (await import('jsdom').then(jsdom => jsdom.JSDOM))(html).window;
}
