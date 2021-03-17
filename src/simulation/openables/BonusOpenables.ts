import { SkillsEnum } from './../../constants';
export class BonusOpenables {
	public item: string;
	public qty: number | [number, number];
	public weight: number;
	public skill: SkillsEnum;
	public req: number | [number, number];
	public constructor() {
		this.qty = 0;
		this.weight = 1;
		this.req = 1;
	}
}

export const BrimstoneChestBonus: BonusOpenables[] = [
	{
		item: 'Raw tuna',
		qty: [100, 350],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [1, 39]
	},
	{
		item: 'Raw lobster',
		qty: [100, 350],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [40, 59]
	},
	{
		item: 'Raw swordfish',
		qty: [100, 300],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [50, 61]
	},
	{
		item: 'Raw monkfish',
		qty: [100, 300],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [62, 75]
	},
	{
		item: 'Raw shark',
		qty: [100, 250],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [76, 78]
	},
	{
		item: 'Raw sea turtle',
		qty: [80, 200],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [79, 80]
	},
	{
		item: 'Raw manta ray',
		qty: [80, 160],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [81, 99]
	}
];

export const LarransSmallChestBonus: BonusOpenables[] = [
	{
		item: 'Raw tuna',
		qty: 204,
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [1, 39]
	},
	{
		item: 'Raw lobster',
		qty: 214,
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [40, 49]
	},
	{
		item: 'Raw swordfish',
		qty: 224,
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [50, 61]
	},
	{
		item: 'Raw monkfish',
		qty: 234,
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [62, 75]
	},
	{
		item: 'Raw shark',
		qty: 126,
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [76, 78]
	},
	{
		item: 'Raw sea turtle',
		qty: 136,
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [79, 80]
	},
	{
		item: 'Raw manta ray',
		qty: 116,
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: 81
	}
];

export const LarransBigChestBonus: BonusOpenables[] = [
	{
		item: 'Raw tuna',
		qty: [150, 520],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [1, 39]
	},
	{
		item: 'Raw lobster',
		qty: [150, 525],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [40, 49]
	},
	{
		item: 'Raw swordfish',
		qty: [150, 450],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [50, 61]
	},
	{
		item: 'Raw monkfish',
		qty: [150, 450],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [62, 75]
	},
	{
		item: 'Raw shark',
		qty: [150, 375],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [76, 78]
	},
	{
		item: 'Raw sea turtle',
		qty: [120, 300],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: [79, 80]
	},
	{
		item: 'Raw manta ray',
		qty: [125, 235],
		weight: 3,
		skill: SkillsEnum.Fishing,
		req: 81
	}
];
