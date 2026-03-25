import express from "express";
import router from "./routes/routes.js";
import connectDB from "./db/db.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening to the port: ${PORT}`);
});
