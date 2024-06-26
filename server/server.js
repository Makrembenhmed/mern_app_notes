import  Express  from "express";
import morgan from "morgan";
import dotenv from "dotenv"
import routes from "./routes/noutes.js"
import route from "./routes/users.js";
import routep from "./routes/produits.js"
import {connectDB} from "./Config/db.js"
import cors from 'cors'

dotenv.config({
path: "./Config/config.env",
})

const app = Express()

app.use(Express.json())

app.use(morgan("dev"))
app.use(cors())   

app.use("/api/v1/notes", routes)
app.use("/api/v1/users", route)
app.use("/api/v1/produitS", routep)


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
  