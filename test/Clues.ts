import { Clues } from '../dist';
import {
	StandardTable as BeginnerStandard,
	RareTable as BeginnerRare,
	UniqueTable as BeginnerUnique,
	SuccessfulUniqueTable as BeginnerSuccessfulUnique
} from '../dist/structures/Clues/Beginner';

import * as test from 'tape';

test('Beginner Clues', t => {
	t.plan(8);
	const beginnerCasketOpened = Clues.Beginner.openCasket();

	t.equal(BeginnerStandard.length, 41);
	t.equal(BeginnerStandard.totalWeight, 41);
	t.equal(BeginnerStandard.limit, undefined);

	t.equal(BeginnerRare.length, 18);

	t.equal(BeginnerUnique.length, 2);

	t.equal(BeginnerSuccessfulUnique.length, 15);

	t.notOk(
		beginnerCasketOpened.length > 3,
		"Asserted beginner casket doesn't have more than 3 items"
	);
	t.notOk(
		beginnerCasketOpened.length < 1,
		"Asserted beginner casket doesn't have less than 1 items"
	);
});

test('Easy Clues', t => {
	t.plan(2);
	const easyCasketOpened = Clues.Easy.openCasket();

	t.notOk(easyCasketOpened.length > 4, "Asserted easy casket doesn't have more than 4 items");
	t.notOk(easyCasketOpened.length < 2, "Asserted easy casket doesn't have less than 2 items");
});

test('Medium Clues', t => {
	t.plan(2);
	const mediumCasketOpened = Clues.Medium.openCasket();

	t.notOk(mediumCasketOpened.length > 5, "Asserted medium casket doesn't have more than 5 items");
	t.notOk(mediumCasketOpened.length < 3, "Asserted medium casket doesn't have less than 3 items");
});

test('Hard Clues', t => {
	t.plan(2);
	const hardCasketOpened = Clues.Hard.openCasket();

	t.notOk(hardCasketOpened.length > 8, "Asserted hard casket doesn't have more than 8 items");
	t.notOk(hardCasketOpened.length < 4, "Asserted hard casket doesn't have less than 4 items");
});

test('Elite Clues', t => {
	t.plan(2);
	const eliteCasketOpened = Clues.Elite.openCasket();

	t.notOk(eliteCasketOpened.length > 6, "Asserted elite casket doesn't have more than 6 items");
	t.notOk(eliteCasketOpened.length < 4, "Asserted elite casket doesn't have less than 4 items");
});

test('Master Clues', t => {
	t.plan(2);
	const masterCasketOpened = Clues.Master.openCasket();

	t.notOk(masterCasketOpened.length > 7, "Asserted master casket doesn't have more than 7 items");
	t.notOk(masterCasketOpened.length < 5, "Asserted master casket doesn't have less than 5 items");
});
