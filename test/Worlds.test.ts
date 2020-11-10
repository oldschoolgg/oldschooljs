import { Worlds } from '../dist';

describe('Worlds', () => {
	beforeAll(async () => {
		await Worlds.fetch();
	});

	test('Generic Worlds', () => {
		expect.assertions(2);

		// New worlds are sometimes added, so just check it has atleast the amount of normal worlds.
		expect(Worlds.size >= 180).toBeTruthy();

		// There should be more than 14 Australian Worlds.
		const australianWorlds = Worlds.filter((world) => world.location === 'Australia');
		expect(australianWorlds.size > 14).toBeTruthy();
	});

	jest.setTimeout(60000);
	test('Single world should be correct', () => {
		expect.assertions(3);

		const WorldOne = Worlds.get(301);
		if (!WorldOne) return fail('World One not found.');

		expect(WorldOne.number).toEqual(301);
		expect(WorldOne.location).toEqual('United States');
		expect(WorldOne.activity).toEqual('Trade - Free');
	});

	test('Getting worlds in different formats', () => {
		expect.assertions(2);

		expect(Worlds.get(301)).toEqual(Worlds.get(1));
		expect(Worlds.get(230)).toEqual(Worlds.get(530));
	});
});
