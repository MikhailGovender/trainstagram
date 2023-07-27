import { Request, Response, NextFunction } from "express";

const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};

export default logout;
