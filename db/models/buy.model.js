const {Model, DataTypes,} = require('sequelize');
const {STATEBUY_TABLE } = require('./state-buy-model');

const BUY_TABLE = 'buy-target';

const BuySchema = {
  idCompra:{
    field:"id_compra",
    allowNull: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  idEstadoCompra:{
    field: 'id_estado_compra',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference:{
      model: STATEBUY_TABLE,
      key:'idEstadoCompra'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  fecha: {
    allowNull: true,
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
}

class Buy extends Model{
  static associate(models){

    this.belongsTo(models.StateBuy,{ foreignKey:'idEstadoCompra',as: 'StateBuy' });
    this.belongsToMany(models.User, {
      as: 'User',
      through: models.BuyBook,
      foreignKey: 'idCompra',
      otherKey: 'usuario'
    });
    this.belongsToMany(models.Book, {
      as: 'Book',
      through: models.BuyBook,
      foreignKey: 'idCompra',
      otherKey: 'issn'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: BUY_TABLE,
      modelName: 'Buy',
      timestamps: false
    }
  }
}

module.exports = {BUY_TABLE,BuySchema,Buy};
