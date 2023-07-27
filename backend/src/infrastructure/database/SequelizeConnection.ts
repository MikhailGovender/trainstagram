import { Sequelize } from "sequelize";

export class SequelizeConnection {
    private static sequelizeConnection: Sequelize;

    private constructor() {}

    public static getInstance(): Sequelize {
        if (!SequelizeConnection.sequelizeConnection) {
            SequelizeConnection.sequelizeConnection = new Sequelize('trainstagramDB', 'root', '', {
                host: 'localhost',
                dialect: 'mssql',
                logging: false,
                dialectOptions: {
                    options: {
                        trustServerCertificate: true,
                        encrypt: true
                    }
                }
              });
        }
        

        return SequelizeConnection.sequelizeConnection;
    }
}