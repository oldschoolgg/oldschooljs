import { Util } from '../dist';

describe('Utils', () => {
	test('toKMB checks', async () => {
		expect.assertions(1);

		expect(Util.toKMB(5)).toEqual('5');
	});
});
