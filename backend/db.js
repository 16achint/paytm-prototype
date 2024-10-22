import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/paytm`
    );
    console.log(`\n MongoDB connected : ${connectionInstance}`);
    console.log(`\n - DB HOST : ${connectionInstance.connection.host}`);
    console.log(`\n - DB NAME: ${connectionInstance.connection.name}`);
  } catch (error) {
    console.log("Database connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
