import mongoose from "mongoose";
const MONGO_URL = "mongodb://localhost/users";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
};
