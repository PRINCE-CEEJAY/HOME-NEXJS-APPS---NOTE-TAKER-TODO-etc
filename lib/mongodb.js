import mongoose, { mongo } from "mongoose";
export async function CONNECTDB() {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error connecting to Database", error);
  }
}
