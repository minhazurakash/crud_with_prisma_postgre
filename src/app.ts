import cors from "cors";
import express, { Application } from "express";
import { UserRoutes } from "./user/user.route";

// init app and use primary middleware
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoutes);

export default app;
