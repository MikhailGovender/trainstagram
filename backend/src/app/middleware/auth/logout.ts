import { Request, Response, NextFunction } from "express";
import passport from "passport";

const logoutMiddleware = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};

export default logoutMiddleware;
