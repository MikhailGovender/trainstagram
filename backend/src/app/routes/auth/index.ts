import { Router } from "express";
import passport from "passport";
import {
  strategy,
  serializeUser,
  deserializeUser,
} from "../../../infrastructure/passport";
import logout from "./logout";
import register from "./register";

passport.use(strategy);
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

const authRouter = Router();

authRouter.post(
  "/login/password",
  passport.authenticate(strategy, {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  })
);
authRouter.post("/login/password", (req, res) => res.send(req.body));

authRouter.post("/logout", logout);
authRouter.post("/register", register);

export default authRouter;
