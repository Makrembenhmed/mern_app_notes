import  Express  from "express";
import morgan from "morgan";
import dotenv from "dotenv"
import routes from "./routes/noutes.js"
import {connectDB} from "./Config/db.js"

dotenv.config({
path: "./Config/config.env",
})

const app = Express()

app.use(Express.json())

app.use(morgan("dev"))

app.use("/api/v1/notes", routes)


app.listen(8000, () => {
    try {
      connectDB();
      console.log("Server is running on port 3000");
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(`Error: ${error.message}`);
      // Exit with failure.
      process.exit(1);
    }
  });
  