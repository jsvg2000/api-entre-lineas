const {Model, DataTypes} = require('sequelize');

const MESSAGE_TABLE = 'message';

const MessageSchema = {
  idMensaje:{
    field:"id_mensaje",
    allowNull: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  mensaje:{
    allowNull: false,
    type: DataTypes.TEXT
  },
  fecha:{
    allowNull: true,
    autoIncrement: false,
    type: DataTypes.DATEONLY(),
    defaultValue: DataTypes.NOW
  },
  inhabilitar:{
    allowNull: true,
    autoIncrement: false,
    type: DataTypes.BOOLEAN(),
    defaultValue: false
  }
}

class Message extends Model{
  static associate(models){
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: MESSAGE_TABLE,
      modelName: 'Message',
      timestamps: false
    }
  }
}

module.exports = {MESSAGE_TABLE, MessageSchema,Message}
