import { MonsterKillOptions } from "../../../meta/types";
import Bank from "../../../structures/Bank";
import Monster from "../../../structures/Monster";
import { Vardorvis } from "./Vardorvis";

class AwakenedVardorvisSingleton extends Monster {
	public kill(quantity = 1, options: MonsterKillOptions = {}): Bank {
		return Vardorvis.kill(quantity, { ...options, isAwakened: true });
	}
}

export const AwakenedVardorvis = new AwakenedVardorvisSingleton({
	id: 12_224,
	name: "Vardorvis (Awakened)",
	aliases: ["vardorvis (awakened)"],
});
