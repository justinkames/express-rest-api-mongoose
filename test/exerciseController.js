'use strict';

import sinon from 'sinon';
import chai from 'chai';

import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

chai.should();

import ExerciseService from '../services/exercise-service';
import Exercise from '../models/exercise';
import {ExerciseController} from '../routes/exercise-controller';

describe('ExerciseController', () => {

	mockgoose(mongoose);
	mongoose.connect('mongodb://localhost/test');

	let exercise = new Exercise();
	let exerciseController = new ExerciseController();

	exercise.title= 'Bench press';
	exercise.description=  'This is a bench press';

	let req = {
		body : {
			title: exercise.title,
			description: exercise.description
		}
	};

	let res = {};

	beforeEach(done => {
		done();
	});

	afterEach(done => {
		done();
	});

	it('create exercise should save the exercise with the passed variables', done => {
		let res = exerciseController.create(req, res);
	});

});
