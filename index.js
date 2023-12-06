// imports section
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import * as indexRouter from "./src/module/index.router.js";
import { apiError, gelableError } from "./src/middleware/errorHandle.js";
import { conationDB } from "./DB/conation.js";

// dot end is the gelable for all application keys
dotenv.config({ path: "./config/.env" });

// get port from dot env and it's not exist change to 4000  is default
const port = process.env.portNumber || 4000;
// get pse Url from dot env
const pseUrl = process.env.pathUrl;
// create app instance of express
const app = express();
// using express json to confirm puffer to data
app.use(express.json());
// using morgan in development mode to log url details
app.use(morgan("dev"));
// call index all router
app.use(`${pseUrl}/user`, indexRouter.userRouter);
app.use(`${pseUrl}/setting`, indexRouter.settingRouter);
app.use(`${pseUrl}/customer`, indexRouter.customerRouter);
app.use(`${pseUrl}/role`, indexRouter.roleRouter);

// handle not found routing
app.use("*", (req, res, next) => {
  next(new apiError("in-valid router", 404));
});
// handle all Error
app.use(gelableError);
// conation DB function
conationDB();
// start server
const sever = app.listen(port, () => {
  console.log(`sever run on port ${port}`);
});

// handle all errors out off express
process.on("unhandledRejection", (err) => {
  // log error
  console.log(`unhandledRejection: ${err.name}| ${err.message}`);
  // close all requests
  sever.close(() => {
    // log down
    console.log("server is shutting down");
    // down sever
    process.exit(1);
  });
});
