const {Model, DataTypes} = require('sequelize');

const {TARGET_TABLE} =require('./target.models');
const {USER_TABLE} = require('./user.model');

const HAVETARGET_TABLE = 'have-target-user';

const HaveTargetSchema = {

  idTieneTarjeta:{
    field: 'id_tiene_tarjetas',
    allowNull: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  numeroTarjeta:{
    field: 'numero_tarjeta',
    allowNull: false,
    type: DataTypes.BIGINT,
    reference:{
      model: TARGET_TABLE,
      key:'numeroTarjeta'
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
  }
}

class HaveTarget extends Model{

  static associate(models){
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: HAVETARGET_TABLE,
      modelName: 'HaveTarget',
      timestamps: false
    }
  }
}

module.exports = {HAVETARGET_TABLE, HaveTargetSchema,HaveTarget}
