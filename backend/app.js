import express from "express";
import cors from "cors";
const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(express.static("public"));

import userRouter from "./router/user.routes.js";

app.use("api/v1/user", userRouter);

export { app };
