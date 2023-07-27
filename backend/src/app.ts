import express from "express";
import { userRoutes } from "./app/routes/user";
import { viewRoutes } from "./app/routes/views";
import { ENV } from "./infrastructure/env/index";
import { connectToDatabase } from "./infrastructure/database/connectToDatabase";
import authRouter from "./app/routes/auth";
import session from "./app/helpers/auth/session";
import cookieParser from "cookie-parser";
import authMiddleware from "./app/middleware/auth/login";
import passport from "passport";

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
app.use(cookieParser());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(authMiddleware);

app.use(viewRoutes);
app.use("/user", userRoutes);
app.use("/", authRouter);

app.use(express.static("./frontend/src/", { extensions: ["html"] }));
app.use(express.static("./frontend/src/css", { extensions: ["css"] }));
app.use(express.static("./frontend/src/js", { extensions: ["js"] }));

const server = app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT} in ${ENV.ENVIRONMENT}`);
});
