//import { Clues } from '../dist';
import {
	StandardTable as BeginnerStandard,
	RareTable as BeginnerRare,
	UniqueTable as BeginnerUnique,
	SuccessfulUniqueTable as BeginnerSuccessfulUnique
} from '../dist/structures/Clues/Beginner';

import * as test from 'tape';

test('Beginner Clues', t => {
	t.plan(6);

	t.equal(BeginnerStandard.length, 41);
	t.equal(BeginnerStandard.totalWeight, 41);
	t.equal(BeginnerStandard.limit, undefined);

	t.equal(BeginnerRare.length, 18);

	t.equal(BeginnerUnique.length, 2);

	t.equal(BeginnerSuccessfulUnique.length, 15);
});
