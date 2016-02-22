import {Router} from 'express';
import ExerciseController from './exercise-controller';
let router = Router();
let exerciseController = new ExerciseController();

export default db => {
	// init database connection
	db();
	// register exercise routes
	router.get('/api/exercises', exerciseController.list);
	router.post('/api/exercises', exerciseController.create);
	// register api routes
	router.use('/api', (req, res) => {
		return res.json({msg: 'test'});
	});
	return router;
}
