module.exports = function (sequelize: any, DataTypes: any) {
    const User = sequelize.define('users', {
      userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      biography: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      freezeTableName: true,
      timestamps: true,
      classMethods: {
        associate () {
          // associations can be defined here
        }
      }
    })
  
    return User
  }