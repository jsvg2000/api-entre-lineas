const {Model, DataTypes,} = require('sequelize');

const TYPETARGET_TABLE = 'type-target';

const TypeTargetSchema = {
  idTipoTarjeta:{
    field:"id_tipo_tarjeta",
    allowNull: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  tipoTarjeta:{
    field:"tipo_usuario",
    allowNull: false,
    type: DataTypes.STRING(20)
  }
}

class TypeTarget extends Model{
  static associate(models){
    this.hasMany(models.Target,{
      as: 'target',
      foreignKey:'idTipoTarjeta'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: TYPETARGET_TABLE,
      modelName: 'TypeTarget',
      timestamps: false
    }
  }
}

module.exports = {TYPETARGET_TABLE,TypeTargetSchema,TypeTarget};
