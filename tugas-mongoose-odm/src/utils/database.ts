import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "cluster-wpu-course",
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error; // Pastikan error di-throw agar bisa di-catch di tempat lain
  }
};

export default connect;
