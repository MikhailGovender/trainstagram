// // Note: This file reads all the domains and adds in to the DB
// import fs from "fs";
// import path from "path";
// const basename = path.basename(__filename);
// import Sequelize from "sequelize";
// import { SequelizeConnection } from '../database/SequelizeConnection';
// let db: any = {};

// const sequelize = SequelizeConnection.getInstance();

// fs.readdirSync(__dirname)
//   .filter((file: string) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
//     );
//   })
//   .forEach((file: any) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(async (modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;