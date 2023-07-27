import { UserRepository } from "../../repositories/UserRepository";

const deserializeUser = async (user: { username: string }, cb: any) => {
  const newUser = await new UserRepository().readByUsername(user.username);
  process.nextTick(() => cb(null, newUser));
};

export default deserializeUser;
