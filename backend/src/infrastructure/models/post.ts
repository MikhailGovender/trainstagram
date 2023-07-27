import { DataTypes, Model } from "sequelize";
import User from "../models/user";
import sequelize from "sequelize/types/sequelize";
import { SequelizeConnection } from "../database/SequelizeConnection";

export interface PostAttributes {
  postID: number;
  userID: number;
  Image: Buffer | string;
  Caption: string;
  Likes: number;
  PostedAt: Date; 
}

  class Post extends Model<PostAttributes> implements PostAttributes {
    declare postID: number;
    declare userID: number;
    declare Image: Buffer | string;
    declare Caption: string;
    declare Likes: number;
    declare PostedAt: Date;
  }

  Post.init({
    postID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    userID:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Image: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    Caption: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Likes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PostedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
    }, {
      freezeTableName: true,
      sequelize: SequelizeConnection.getInstance(),
      timestamps: false
    });

    // Post.belongsTo(User);

export default Post;