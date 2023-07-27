// import User from "../models/user";
import User from "../models/user";
import Post from "../models/post";
import { SequelizeConnection } from "./SequelizeConnection";

export const connectToDatabase = async () => {
    try {
        User.sync({ alter: true});
        Post.sync({ alter: true});
        // SequelizeConnection.getInstance().models.User.sync({ alter: true });
        await SequelizeConnection.getInstance().authenticate();
        
        console.log('Connect to the Database')
    } catch(err) {
        console.error('Unable to connect to the database: ', err);
    }
}