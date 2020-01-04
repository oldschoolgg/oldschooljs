import { Worlds } from '../dist';

import test from 'tape';

test('Setup', async t => {
	await Worlds.fetch();
	t.end();
});

test('Generic Worlds', t => {
	t.plan(2);

	// New worlds are sometimes added, so just check it has atleast the amount of normal worlds.
	t.ok(Worlds.size >= 187, 'Expected >= 187 Worlds');

	// There should be more than 14 Australian Worlds.
	const australianWorlds = Worlds.filter(world => world.location === 'Australia');
	t.ok(australianWorlds.size > 14, 'Expected more than 14 Australian Worlds');
});

test('Single world should be correct', t => {
	t.plan(3);

	const WorldOne = Worlds.get(301);
	if (!WorldOne) throw t.fail('World One not found.');

	t.equal(WorldOne.number, 301, 'Expected World 1 number to equal 301');
	t.equal(WorldOne.location, 'United States', 'Expected World 1 country to equal United States');
	t.equal(
		WorldOne.activity,
		'Trade - Free',
		'Expected World 1 description to equal Trade - Free'
	);
});

test('Getting worlds in different formats', t => {
	t.plan(2);

	t.equal(Worlds.get(301), Worlds.get(1), 'Expected w301 to equal w1');
	t.equal(Worlds.get(230), Worlds.get(530), 'Expected w230 to equal w530');
});
