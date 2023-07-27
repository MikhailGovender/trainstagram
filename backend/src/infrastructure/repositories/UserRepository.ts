import User from "../models/user";
import { IRepository } from "./IRepository";

export class UserRepository implements IRepository<User, number> {
  public UserRepository() {}

  async create(body: User): Promise<User> {
    return await User.create({
      userID: 0,
      username: body.username,
      hashedPassword: body.hashedPassword,
      biography: body.biography,
      profilePicture: body.profilePicture,
    });
  }

  async readByID(id: number): Promise<User | null> {
    // console.log('DB: ', db);
    console.log("DB users: ", await User.findAll());
    const result = await User.findByPk(id);
    console.log("result: ", result);
    return result;
  }

  async readByUsername(username: string): Promise<User | null> {
    return await User.findOne({ where: { username: username } });
  }

  async update(id: number, body: User): Promise<User | null> {
    await User.update(
      {
        username: body.username,
        hashedPassword: body.hashedPassword,
        biography: body.biography,
        profilePicture: body.profilePicture,
      },
      { where: { userID: id } }
    );

    const user = User.findByPk(id);

    return user;
  }

  async delete(id: number): Promise<boolean> {
    let user = await User.findByPk(id);
    user?.destroy();
    return true;
  }
}
