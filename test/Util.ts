import test from 'tape';

import { Util } from '../dist';

test('toKMB checks', async t => {
	t.plan(10);

	t.equal(Util.toKMB(5), '5');

	t.equal(Util.toKMB(1000), '1k');
	t.equal(Util.toKMB(1500), '1.5k');

	t.equal(Util.toKMB(1000000), '1m');
	t.equal(Util.toKMB(1500000), '1.5m');
	t.equal(Util.toKMB(15000000), '15m');
	t.equal(Util.toKMB(150000000), '150m');

	t.equal(Util.toKMB(1000000000), '1b');
	t.equal(Util.toKMB(1200000000), '1.2b');
	t.equal(Util.toKMB(50000000000), '50b');
});

test('negative toKMB checks', async t => {
	t.plan(10);

	t.equal(Util.toKMB(-5), '-5');

	t.equal(Util.toKMB(-1000), '-1k');
	t.equal(Util.toKMB(-1500), '-1.5k');

	t.equal(Util.toKMB(-1000000), '-1m');
	t.equal(Util.toKMB(-1500000), '-1.5m');
	t.equal(Util.toKMB(-15000000), '-15m');
	t.equal(Util.toKMB(-150000000), '-150m');

	t.equal(Util.toKMB(-1000000000), '-1b');
	t.equal(Util.toKMB(-1200000000), '-1.2b');
	t.equal(Util.toKMB(-50000000000), '-50b');
});

test('KMB checks', async t => {
	t.plan(10);

	t.equal(Util.fromKMB('5'), 5);

	t.equal(Util.fromKMB('1k'), 1000);
	t.equal(Util.fromKMB('1.5k'), 1500);

	t.equal(Util.fromKMB('1m'), 1000000);
	t.equal(Util.fromKMB('1.5m'), 1500000);
	t.equal(Util.fromKMB('15m'), 15000000);
	t.equal(Util.fromKMB('150m'), 150000000);

	t.equal(Util.fromKMB('1b'), 1000000000);
	t.equal(Util.fromKMB('1.2b'), 1200000000);
	t.equal(Util.fromKMB('50b'), 50000000000);
});

test('Brimestone chance calc', async t => {
	t.plan(6);

	t.equal(Util.getBrimKeyChanceFromCBLevel(725), 50);
	t.equal(Util.getBrimKeyChanceFromCBLevel(321), 56);
	t.equal(Util.getBrimKeyChanceFromCBLevel(303), 59);
	t.equal(Util.getBrimKeyChanceFromCBLevel(123), 95);
	t.equal(Util.getBrimKeyChanceFromCBLevel(28), 1137);
	t.equal(Util.getBrimKeyChanceFromCBLevel(2), 2021);
});
