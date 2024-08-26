import type { Item } from "../src/meta/types";
import type { DeepPartial } from "./scriptUtil";

export const itemChanges: Record<number, DeepPartial<Item>> = {
	27665: {
		equipment: {
			requirements: {
				magic: 70,
			},
		},
	},
	27690: {
		equipment: {
			requirements: {
				attack: 75,
			},
		},
	},
	27655: {
		equipment: {
			requirements: {
				ranged: 75,
			},
		},
	},
	27610: {
		equipment: {
			requirements: {
				ranged: 80,
			},
		},
	},
	27624: {
		equipment: {
			requirements: {
				magic: 70,
				strength: 60,
				attack: 50,
			},
		},
	},
};
