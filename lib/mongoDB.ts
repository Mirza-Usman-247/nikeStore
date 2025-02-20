import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/nikeDB"; 

export const dbconnect = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB");
      return;
    }

    await mongoose.connect(MONGO_URL);

    console.log("Successfully connected to the MongoDB server");
  } catch (error) {
    console.error("Error while connecting to the database:", error);
  }
};
