import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../../../infrastructure/repositories/UserRepository";
import { hash } from "bcrypt";
import User from "../../../infrastructure/models/user";

const register = async (req: Request, res: Response, next: NextFunction) => {
  console.log();
  
  const newUser = {
    username: req.body.username,
    hashedPassword: await hash(req.body.password, 10),
    biography: "",
    profilePicture: "",
  };

  try {
    new UserRepository().create(newUser as User);
    res.send(newUser);
  } catch (e) {
    console.log(e);
    next(e)
  } finally {
    return next();
  }

  // req.login(newUser, (e) => {
  //   if (e) {
  //     console.log(e);

  //     return next(e);
  //   }
  //   res.send(newUser);
  //   res.redirect("/");
  // });
};

export default register;
