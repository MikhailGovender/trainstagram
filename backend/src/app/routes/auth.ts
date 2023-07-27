import { Router } from "express";
import passport from "passport";
import {
  strategy,
  serializeUser,
  deserializeUser,
} from "../../infrastructure/passport";
import expressSession from "express-session";
import { ENV } from "../../infrastructure/env";
import logoutMiddleware from "../middleware/auth/logout";
import signUpMiddleware from "../middleware/auth/sign-up";

passport.use(strategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

export const session = expressSession({
  secret: ENV.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true },
});

const authRouter = Router();

authRouter.get("/login", (_, res) => res.render("login"));
authRouter.post(
  "/login/password",
  passport.authenticate(strategy, {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  })
);

authRouter.post("logout", logoutMiddleware);

authRouter.get("/signup", (_, res) => res.render("signup"));
authRouter.post("/signup", signUpMiddleware);

export default authRouter;
