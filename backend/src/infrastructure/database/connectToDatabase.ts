import { SequelizeConnection } from "./SequelizeConnection";

export const connectToDatabase = async () => {
    try {
        await SequelizeConnection.getInstance().authenticate();
        console.log('Connect to the Database')
    } catch(err) {
        console.error('Unable to connect to the database: ', err);
    }
}