import express from "express";
import { getUserProfile } from "../service/userProfileService";

export const router = express.Router();

router.route('/user/profile').get(getUserProfile);
