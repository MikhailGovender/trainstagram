import express from "express";
import { getUserProfile } from "../service/userProfileService.ts";

export const router = express.Router();

router.route('/user/profile').get(getUserProfile);
