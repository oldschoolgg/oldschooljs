/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Clues } from '../dist';
import {
	StandardTable as BeginnerStandard,
	RareTable as BeginnerRare,
	UniqueTable as BeginnerUnique,
	SuccessfulUniqueTable as BeginnerSuccessfulUnique
} from '../dist/structures/Clues/Beginner';

import * as test from 'tape';

test('Beginner Clues', t => {
	t.plan(7);
	const beginnerCasketsOpened = Clues.Beginner.open(500);
	let beginnerCluesItemRangeIsInvalid = false;

	t.equal(BeginnerStandard.length, 41);
	t.equal(BeginnerStandard.totalWeight, 41);
	t.equal(BeginnerStandard.limit, undefined);

	t.equal(BeginnerRare.length, 18);

	t.equal(BeginnerUnique.length, 2);

	t.equal(BeginnerSuccessfulUnique.length, 15);

	for (let i = 0; i < beginnerCasketsOpened.length; i++) {
		if (beginnerCasketsOpened[i].length > 3 || beginnerCasketsOpened[i].length < 1) {
			beginnerCluesItemRangeIsInvalid = true;
		}
	}
	t.notOk(
		beginnerCluesItemRangeIsInvalid,
		`Asserted ${beginnerCasketsOpened.length} beginner caskets dont have below 1 or above 3 items each.`
	);
});

test('Easy Clues', t => {
	t.plan(1);
	const easyCasketsOpened = Clues.Easy.open(500);
	let easyCluesItemRangeIsInvalid = false;

	for (let i = 0; i < easyCasketsOpened.length; i++) {
		if (easyCasketsOpened[i].length > 4 || easyCasketsOpened[i].length < 2) {
			easyCluesItemRangeIsInvalid = true;
		}
	}

	t.notOk(
		easyCluesItemRangeIsInvalid,
		`Asserted ${easyCasketsOpened.length} easy caskets dont have below 2 or above 4 items each.`
	);
});

test('Medium Clues', t => {
	t.plan(1);
	const mediumCasketsOpened = Clues.Medium.open(500);
	let mediumCluesItemRangeIsInvalid = false;

	for (let i = 0; i < mediumCasketsOpened.length; i++) {
		if (mediumCasketsOpened[i].length > 5 || mediumCasketsOpened[i].length < 3) {
			mediumCluesItemRangeIsInvalid = true;
		}
	}

	t.notOk(
		mediumCluesItemRangeIsInvalid,
		`Asserted ${mediumCasketsOpened.length} medium caskets dont have below 3 or above 5 items each.`
	);
});

test('Hard Clues', t => {
	t.plan(1);
	const hardCasketsOpened = Clues.Hard.open(500);
	let hardCluesItemRangeIsInvalid = false;

	for (let i = 0; i < hardCasketsOpened.length; i++) {
		if (hardCasketsOpened[i].length > 8 || hardCasketsOpened[i].length < 4) {
			hardCluesItemRangeIsInvalid = true;
		}
	}

	t.notOk(
		hardCluesItemRangeIsInvalid,
		`Asserted ${hardCasketsOpened.length} hard caskets dont have below 4 or above 8 items each.`
	);
});

test('Elite Clues', t => {
	t.plan(1);
	const eliteCasketsOpened = Clues.Elite.open(500);
	let eliteCluesItemRangeIsInvalid = false;

	for (let i = 0; i < eliteCasketsOpened.length; i++) {
		if (eliteCasketsOpened[i].length > 6 || eliteCasketsOpened[i].length < 4) {
			eliteCluesItemRangeIsInvalid = true;
		}
	}

	t.notOk(
		eliteCluesItemRangeIsInvalid,
		`Asserted ${eliteCasketsOpened.length} elite caskets dont have below 4 or above 6 items each.`
	);
});

test('Master Clues', t => {
	t.plan(1);
	const masterCasketsOpened = Clues.Master.open(500);
	let masterCluesItemRangeIsInvalid = false;

	for (let i = 0; i < masterCasketsOpened.length; i++) {
		if (masterCasketsOpened[i].length > 7 || masterCasketsOpened[i].length < 5) {
			masterCluesItemRangeIsInvalid = true;
		}
	}

	t.notOk(
		masterCluesItemRangeIsInvalid,
		`Asserted ${masterCasketsOpened.length} master caskets dont have below 5 or above 7 items each.`
	);
});
