import express from "express";
import { userRoutes } from "./app/routes/user";
import { postRoutes } from "./app/routes/post";
import { viewRoutes } from "./app/routes/views";
import { ENV } from "./infrastructure/env/index";
import { connectToDatabase } from "./infrastructure/database/connectToDatabase";
import authRoutes from "./app/routes/auth";
import session from "./app/helpers/auth/session";
import cookieParser from "cookie-parser";
import authMiddleware from "./app/middleware/auth/login";
import passport from "passport";
import register from "./app/routes/auth/register";

const PORT = ENV.PORT;
const app = express();

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
// app.use(passport.session());
app.use(authMiddleware);

app.use(
  express.static("./frontend/src", { extensions: ["html", "js", "css", "png"] })
);

app.use(viewRoutes);
app.use(userRoutes);
app.use(postRoutes);
app.use(authRoutes);
app.post("/register", register);

const server = app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
