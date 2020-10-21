import { Worlds } from '../dist';

test('Setup', async () => {
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

test('Single world should be correct', (done) => {
	expect.assertions(3);

	const WorldOne = Worlds.get(301);
	if (!WorldOne) throw done.fail('World One not found.');

	expect(WorldOne.number).toBe(301);
	expect(WorldOne.location).toBe('United States');
	expect(WorldOne.activity).toBe('Trade - Free');
});

test('Getting worlds in different formats', () => {
	expect.assertions(2);

	expect(Worlds.get(301)).toBe(Worlds.get(1));
	expect(Worlds.get(230)).toBe(Worlds.get(530));
});
