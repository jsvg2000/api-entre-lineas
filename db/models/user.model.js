const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  dni: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class User extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = {USER_TABLE, UserSchema, User}
