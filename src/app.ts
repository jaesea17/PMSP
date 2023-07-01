import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from 'cors';

import userRouter from './routes/userRoutes/userRoutes';
import adminRouter from './routes/adminRoutes/admin';

// import userRouter from './routes/userRoutes';

const app = express();
app.use(cors())

import db from "./config/database.config";

db.sync({ force: false }).then(() => {
  console.log("connected successfully to database");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", userRouter);
app.use("/api/admin", adminRouter);



export default app;