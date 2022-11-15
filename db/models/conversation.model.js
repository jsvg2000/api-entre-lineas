const {Model, DataTypes} = require('sequelize');

const CONVERSATION_TABLE = 'conversation';

const ConversationSchema = {
  idConversacion:{
    field:"id_conversacion",
    allowNull: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
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

class Conversation extends Model{
  static associate(models){
    this.belongsToMany(models.Message, {
      as: 'Message',
      through: models.ConversationUser,
      foreignKey: 'idConversacion',
      otherKey: 'idMensaje'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CONVERSATION_TABLE,
      modelName: 'Conversation',
      timestamps: false
    }
  }
}

module.exports = {CONVERSATION_TABLE, ConversationSchema,Conversation}
