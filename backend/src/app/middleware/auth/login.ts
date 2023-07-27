import { Request, Response, NextFunction } from "express";
import passport from "passport";

const authMiddleware = (req: Request, _: Response, next: NextFunction) => {
  if (req.path === "/login" || req.path === "/login/password") return next();
  passport.authenticate("session");
  return next();
};

export default authMiddleware;
