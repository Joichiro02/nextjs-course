import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
	mongoose.set("strictQuery", true);

	if (!process.env.MONGO_DB_URI) {
		// throw new Error('MONGO_URI is not defined');
		return console.log("MONGO_URI is not defined");
	}

	if (isConnected) {
		return console.log("=> using existing database connection");
	}

	try {
		await mongoose.connect(process.env.MONGO_DB_URI, {
			dbName: process.env.MONGO_DB_NAME,
		});

		isConnected = true;

		console.log("=> using new database connection");
	} catch (error) {
		console.log("=> error while connecting to database:", error);
	}
};
