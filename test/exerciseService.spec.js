'use strict';

import sinon from 'sinon';
import chai from 'chai';

import ExerciseService from '../services/exercise-service';
import Exercise from '../models/exercise';

import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

chai.should();

describe('ExerciseService', () => {

	let exerciseService;
	let exercise;

	beforeEach(done => {
		// mock all mongoose connections with in memory database
		mockgoose(mongoose);
		mongoose.connect('mongodb://localhost/test');

		exerciseService = new ExerciseService();
		exercise = new Exercise();

		exercise.title = "Bench press";
		exercise.description = "A great chest exercise";

		exerciseService.save(exercise, (err, res) => {
			done(err);
		});
	});

	afterEach(done => {
		mockgoose.reset();
		done();
	});

	it('the retrieved item should have the same properties as the saved item', done => {
		exerciseService.findAll((err, res) => {
			res[0].title.should.equal(exercise.title);
			res[0].description.should.equal(exercise.description);
			done();
		});
	});
});
