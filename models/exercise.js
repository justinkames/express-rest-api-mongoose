import mongoose from 'mongoose';

export default mongoose.model('exercise', mongoose.Schema({
	title: { type : String, unique : true, required : true },
	description: String,
	videoUrl: String
}));
