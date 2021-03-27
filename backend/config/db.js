import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`.bgWhite.green);
	} catch (error) {
		console.log(`Error: ${error.message}`.red.underline.bold);
		process.exit();
	}
};

export default connectDB;
