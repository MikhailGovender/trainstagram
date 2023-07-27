import { Strategy } from "passport-local";
import { compare } from "bcrypt";
import { UserRepository } from "../../repositories/UserRepository";

const strategy = new Strategy(async (username, password, done) => {
  try {
    const user = await new UserRepository().readByUsername(username);
    if (!user || (await compare(password, user.hashedPassword)))
      return done(null, false, { message: "Incorrect username or password" });

    return done(null, user);
  } catch (e) {
    return done(e);
  }
});

export default strategy;
