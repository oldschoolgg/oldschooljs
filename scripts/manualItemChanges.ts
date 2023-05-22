import { Item } from '../dist/meta/types';

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;

export const itemChanges: Record<number, DeepPartial<Item>> = {
	27_665: {
		equipment: {
			requirements: {
				magic: 70
			}
		}
	},
	27_690: {
		equipment: {
			requirements: {
				attack: 75
			}
		}
	},
	27_655: {
		equipment: {
			requirements: {
				ranged: 75
			}
		}
	},
	27_610: {
		equipment: {
			requirements: {
				ranged: 80
			}
		}
	},
	27_624: {
		equipment: {
			requirements: {
				magic: 70,
				strength: 60,
				attack: 50
			}
		}
	}
};
