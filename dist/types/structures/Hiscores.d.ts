import { hiscoreURLs } from "../constants";
import Player from "./Player";
export interface GetOptions {
    type?: keyof typeof hiscoreURLs;
    virtualLevels?: boolean;
}
declare class Hiscores {
    fetch(username: string, options?: GetOptions): Promise<Player>;
}
declare const _default: Hiscores;
export default _default;
//# sourceMappingURL=Hiscores.d.ts.map