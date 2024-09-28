"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
class Wiki {
    URL = "https://oldschool.runescape.wiki/api.php";
    searchOptions = {
        "-incategory": ["Slang_dictionary", "Disambiguation"].join("|"),
    };
    commonPageAPIOptions = {
        action: "query",
        format: "json",
        prop: ["extracts", "pageimages", "info", "categories"].join("|"),
        formatversion: "2",
        piprop: "original",
        inprop: "url",
        exsentences: "5",
        exintro: "1",
        explaintext: "1",
        cllimit: "max",
    };
    async fetchPage(pageID) {
        const results = await this.fetchAPI({
            iwurl: "1",
            pageids: pageID,
        });
        if (!results || !results.query)
            return undefined;
        return this.parseRawPage(results.query.pages[0]);
    }
    async random(amount = 20) {
        const results = await this.fetchAPI({
            generator: "random",
            grnnamespace: "0",
            grnlimit: amount,
        });
        if (!results || !results.query)
            return [];
        return results.query.pages.map((r) => this.parseRawPage(r));
    }
    async search(query) {
        const parsedSearchOptions = Object.keys(this.searchOptions)
            .map((prop) => `${prop}:${this.searchOptions[prop]}`)
            .join(" ");
        const results = await this.fetchAPI({
            iwurl: "1",
            generator: "search",
            gsrlimit: "20",
            gsrsearch: `${query} ${parsedSearchOptions}`,
        });
        if (!results || !results.query || !results.query.pages)
            return [];
        return results.query.pages.sort((a, b) => a.index - b.index).map((r) => this.parseRawPage(r));
    }
    parseRawPage(rawPage) {
        return {
            title: rawPage.title,
            extract: rawPage.extract,
            image: rawPage.original?.source,
            url: rawPage.fullurl,
            lastRevisionID: rawPage.lastrevid,
            pageID: rawPage.pageid,
            categories: rawPage.categories,
        };
    }
    fetchAPI(query) {
        const apiURL = new URL(this.URL);
        apiURL.search = new URLSearchParams({ ...this.commonPageAPIOptions, ...query }).toString();
        return (0, node_fetch_1.default)(apiURL.toString()).then((res) => res.json());
    }
}
exports.default = new Wiki();
