import {Router} from 'express';
import ExerciseService from '../services/exercise-service';
import Exercise from '../models/exercise';

let router = Router();
let exerciseService = new ExerciseService();

export default class ExerciseController {

	// curl -D GET http://localhost:8080/exercises
	list(req,res) {
		exerciseService.findAll((err, exercises) => {
			if(err) {
				return res.json({error: 'Could not retrieve exercises' });
			} else {
				return res.json({exercises: exercises});
			}
		});
	}

	// curl -H "Content-Type: application/json" -X POST -d '{"title":"Bench press", "description":"Great chest exercise.", "videoUrl" : "https://www.youtube.com/watch?v=rT7DgCr-3pg"}' localhost:8080/exercises
	create(req, res) {
		let exercise = new Exercise();
		exercise.title = req.body.title;
		exercise.description = req.body.description;
		exercise.videoUrl = req.body.description;
		exerciseService.save(exercise, (err, result) => {
			if(err) {
				return res.status(400).json({error: 'Could not save exercise.'});
			} else {
				return res.json({message: 'Succesfully created exercise'});
			}
		});
	}
}
