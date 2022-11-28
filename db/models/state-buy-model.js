const {Model, DataTypes,} = require('sequelize');

const STATEBUY_TABLE = 'state-buy-target';

const StateBuySchema = {
  idEstadoCompra:{
    field:"id_estado_compra",
    allowNull: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  estadoCompra:{
    field:"estado_compra",
    allowNull: false,
    type: DataTypes.STRING(20)
  }
}

class StateBuy extends Model{
  static associate(models){
    this.hasMany(models.Buy,{
      as: 'Buy',
      foreignKey:'idEstadoCompra'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: STATEBUY_TABLE,
      modelName: 'StateBuy',
      timestamps: false
    }
  }
}

module.exports = {STATEBUY_TABLE,StateBuySchema,StateBuy};
