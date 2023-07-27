import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../../infrastructure/repositories/UserRepository";
import { hash } from "bcrypt";
import User from "../../../infrastructure/models/user";

const signUpMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newUser = {
    userID: 0,
    username: req.body.username,
    hashedPassword: req.body.password, // await hash(req.body.password, 10),
    biography: "",
    profilePicture: "",
  };

  await new UserRepository().create(newUser as User);

  req.login(newUser, (e) => {
    if (e) return next(e);
    res.redirect("/");
  });

  return next();
};

export default signUpMiddleware;
