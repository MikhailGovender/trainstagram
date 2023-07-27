import express from "express";
import { getUserProfile } from "../service/userProfileService";

export const userRoutes = express.Router();

userRoutes.route('/profile').get(getUserProfile);
