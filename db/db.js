import mongoose from 'mongoose';
import config from 'config';

export default () => {
	mongoose.connect(config.get('mongoUrl'));
	let db = mongoose.connection;
	db.on('open', () => {
		console.log(`Succesfully connected to ${config.get('mongoUrl')}`);
	});
	db.on('error', error => {
		console.error(`${error}`);
	});
}
