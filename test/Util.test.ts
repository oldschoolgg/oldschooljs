import { Util } from '../dist';

describe('Utils', () => {
	test('toKMB checks', async () => {
		expect.assertions(10);

		expect(Util.toKMB(5)).toBe('5');

		expect(Util.toKMB(1000)).toBe('1k');
		expect(Util.toKMB(1500)).toBe('1.5k');

		expect(Util.toKMB(1000000)).toBe('1m');
		expect(Util.toKMB(1500000)).toBe('1.5m');
		expect(Util.toKMB(15000000)).toBe('15m');
		expect(Util.toKMB(150000000)).toBe('150m');

		expect(Util.toKMB(1000000000)).toBe('1b');
		expect(Util.toKMB(1200000000)).toBe('1.2b');
		expect(Util.toKMB(50000000000)).toBe('50b');
	});

	test('negative toKMB checks', async () => {
		expect.assertions(10);

		expect(Util.toKMB(-5)).toBe('-5');

		expect(Util.toKMB(-1000)).toBe('-1k');
		expect(Util.toKMB(-1500)).toBe('-1.5k');

		expect(Util.toKMB(-1000000)).toBe('-1m');
		expect(Util.toKMB(-1500000)).toBe('-1.5m');
		expect(Util.toKMB(-15000000)).toBe('-15m');
		expect(Util.toKMB(-150000000)).toBe('-150m');

		expect(Util.toKMB(-1000000000)).toBe('-1b');
		expect(Util.toKMB(-1200000000)).toBe('-1.2b');
		expect(Util.toKMB(-50000000000)).toBe('-50b');
	});

	test('KMB checks', async () => {
		expect.assertions(10);

		expect(Util.fromKMB('5')).toBe(5);

		expect(Util.fromKMB('1k')).toBe(1000);
		expect(Util.fromKMB('1.5k')).toBe(1500);

		expect(Util.fromKMB('1m')).toBe(1000000);
		expect(Util.fromKMB('1.5m')).toBe(1500000);
		expect(Util.fromKMB('15m')).toBe(15000000);
		expect(Util.fromKMB('150m')).toBe(150000000);

		expect(Util.fromKMB('1b')).toBe(1000000000);
		expect(Util.fromKMB('1.2b')).toBe(1200000000);
		expect(Util.fromKMB('50b')).toBe(50000000000);
	});

	test('Brimestone chance calc', async () => {
		expect.assertions(6);

		expect(Util.getBrimKeyChanceFromCBLevel(725)).toBe(50);
		expect(Util.getBrimKeyChanceFromCBLevel(321)).toBe(56);
		expect(Util.getBrimKeyChanceFromCBLevel(303)).toBe(59);
		expect(Util.getBrimKeyChanceFromCBLevel(123)).toBe(95);
		expect(Util.getBrimKeyChanceFromCBLevel(28)).toBe(1137);
		expect(Util.getBrimKeyChanceFromCBLevel(2)).toBe(2021);
	});
});
