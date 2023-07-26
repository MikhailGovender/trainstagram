
import express from "express";
import db from "./infrastructure/models";
import { router as userRoutes } from './app/routes/user.ts';

import { ENV } from "./infra/env/index.ts";
import { connectToDatabase } from "./infrastructure/database/connectToDatabase.ts";

import postRoutes from "./interfaces/http/routes/post";

console.log(ENV.TEST_VAR);

const app = express();

process.on("uncaughtException", (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down due to uncaught exception");
    process.exit(1);
});

db.sequelize.sync({ force: true });
connectToDatabase();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use("/", userRoutes);

const server = app.listen(8080, () => {
  console.log(`Server started on PORT: 8080 in ${process.env.NODE_ENV}`);
});
