import type { WikiPage } from "../meta/types";
declare class Wiki {
    private URL;
    private searchOptions;
    private commonPageAPIOptions;
    fetchPage(pageID: number): Promise<WikiPage | undefined>;
    random(amount?: number): Promise<WikiPage[]>;
    search(query: string): Promise<WikiPage[]>;
    private parseRawPage;
    fetchAPI(query: any): Promise<any>;
}
declare const _default: Wiki;
export default _default;
//# sourceMappingURL=Wiki.d.ts.map