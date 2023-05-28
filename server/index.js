import express from "express"
import bodyParser  from "body-parser"
import dotenv from "dotenv"
import multer from "multer"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/post.js"







//MIDDLEWARES
const app=express()
app.use(express.json())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();




//ROUTES
app.use("/auth",authRoutes)
app.use("/api",postRoutes)
















const port=3500
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server Port: ${port}`));

    
  })
  .catch((error) => console.log(`${error} did not connect`));


