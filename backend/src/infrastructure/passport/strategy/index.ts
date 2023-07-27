import { Strategy } from "passport-local";
import { compare } from "bcrypt";

const strategy = new Strategy(async (username, password, done) => {
  try {
    const user = {
      hashed_password: "willa",
    };
    console.log(user.hashed_password, password);
    // if (!user || (await compare(password, user.hashed_password)))
    if (!user || password !== user.hashed_password)
      return done(null, false, { message: "Incorrect username or password" });

    return done(null, user);
  } catch (e) {
    return done(e);
  }
});

export default strategy;
