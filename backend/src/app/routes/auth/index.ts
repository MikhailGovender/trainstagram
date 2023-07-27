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

const authRoutes = Router();

authRoutes.post(
  "/login/password",
  passport.authenticate(strategy, {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  })
);
authRoutes.post("/login/password", (req, res) => res.send(req.body));

authRoutes.post("/logout", logout);
// authRoutes.post("/register", register);

export default authRoutes;
