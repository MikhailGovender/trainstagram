import express from "express";
import { getUserProfile } from "../service/userProfileService";
import passport from "passport";
export const userRoutes = express.Router();

userRoutes
  .route("/profile")
  .get(passport.authenticate("session"), getUserProfile);
