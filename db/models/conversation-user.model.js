const {Model, DataTypes} = require('sequelize');
const {CONVERSATION_TABLE} =require('./conversation.model');
const {MESSAGE_TABLE } = require('./message.models');
const {USER_TABLE} = require('./user.model');

const CONVERSATIONUSER_TABLE = 'conversation-user';

const ConversationUserSchema = {
  idConversacionUsuario:{
    field: 'id_conversacion_usuario',
    allowNull: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  idConversacion:{
    field: 'id_conversacion',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference:{
      model: CONVERSATION_TABLE,
      key:'idConversacion'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  usuario:{
    allowNull: false,
    type: DataTypes.STRING(20),
    reference:{
      model: USER_TABLE,
      key:'usuario'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idMensaje:{
    field: 'id_mensaje',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference:{
      model: MESSAGE_TABLE,
      key:'idMensaje'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  inhabilitar:{
    allowNull:true,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}

class ConversationUser extends Model{

  static associate(models){
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CONVERSATIONUSER_TABLE,
      modelName: 'ConversationUser',
      timestamps: false
    }
  }
}

module.exports = {CONVERSATIONUSER_TABLE, ConversationUserSchema,ConversationUser}
