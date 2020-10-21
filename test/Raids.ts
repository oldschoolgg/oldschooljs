import ChambersOfXeric from '../dist/simulation/minigames/ChambersOfXeric';

test('Chambers Of Xeric', async () => {
	expect.assertions(3);

	const maxRoll = 570_000 * (1 / 8675);

	t.looseEqual(ChambersOfXeric.determineUniqueChancesFromTeamPoints(570_000), [maxRoll]);

	t.looseEqual(ChambersOfXeric.determineUniqueChancesFromTeamPoints(855_000), [
		maxRoll,
		855_000 * (1 / 8675) - maxRoll
	]);

	t.looseEqual(ChambersOfXeric.determineUniqueChancesFromTeamPoints(73_000_000), [
		maxRoll,
		maxRoll,
		maxRoll
	]);
});
