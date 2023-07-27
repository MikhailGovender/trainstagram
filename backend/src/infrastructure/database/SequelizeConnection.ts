import { Sequelize } from "sequelize";
import { ENV } from "../env";

export class SequelizeConnection {
  private static sequelizeConnection: Sequelize;

  private constructor() {}

  public static getInstance(): Sequelize {
    if (!SequelizeConnection.sequelizeConnection) {
      SequelizeConnection.sequelizeConnection = new Sequelize(
        ENV.DB_NAME,
        ENV.DB_USER,
        ENV.DB_PASSWORD,
        {
          host: ENV.DB_SERVER,
          dialect: "mssql",
          logging: false,
          dialectOptions: {
            options: {
              trustServerCertificate: true,
              encrypt: true,
            },
          },
        }
      );
    }

    return SequelizeConnection.sequelizeConnection;
  }
}
