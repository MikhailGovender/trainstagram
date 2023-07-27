import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../../infrastructure/repositories/UserRepository";
import { hash } from "bcrypt";
import User from "../../../infrastructure/models/user";

const register = async (req: Request, res: Response, next: NextFunction) => {
  const newUser = {
    userID: 0,
    username: req.body.username,
    hashedPassword: await hash(req.body.password, 10),
    biography: "",
    profilePicture: "",
  };

  await new UserRepository().create(newUser as User);

  req.login(newUser, (e) => {
    if (e) return next(e);
    res.send(newUser);
    res.redirect("/");
  });
  res.send(newUser);
  return next();
};

export default register;
