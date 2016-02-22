import exercise from '../models/exercise';

export default class ExerciseService {

	constructor() {
	}

	findAll(cb) {
		exercise.find((err, exercises) => {
			cb(err, exercises);
		});
	}

	save(exercise, cb) {
		exercise.save((err, result) => {
			cb(err, result);
		})
	}

}
