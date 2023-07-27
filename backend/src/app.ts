import express from "express";
import { router as userRoutes } from './app/routes/user';
import { ENV } from "./infrastructure/env/index";
import { connectToDatabase } from "./infrastructure/database/connectToDatabase";

const app = express();
const PORT = ENV.PORT;
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});

// db.sequelize.sync({ force: false });
connectToDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRoutes);

// this can be added to its own routes file
// I just wanted it to make sure the app's frontend was working
app.use(express.static("./frontend/src/", { extensions: ["html"] }));
app.get("/", (_, res) => {
  res.sendFile("index.html", { root: "./frontend/src/" });
})

const server = app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT} in ${ENV.ENVIRONMENT}`);
});

