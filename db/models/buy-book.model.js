const {Model, DataTypes,} = require('sequelize');

const {BOOK_TABLE } = require('./book.model');
const {USER_TABLE } = require('./user.model');
const {BUY_TABLE } = require('./buy.model');

const BUYBOOK_TABLE = 'buy-book';

const BuyBookSchema = {
  idCompraLibro:{
    field: 'id_compra_libro',
    allowNull: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  issn:{
    allowNull: false,
    type: DataTypes.STRING(20),
    reference:{
      model: BOOK_TABLE,
      key:'issn'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  usuario:{
    allowNull: false,
    type: DataTypes.STRING,
    reference:{
      model: USER_TABLE,
      key:'usuario'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idCompra:{
    allowNull: false,
    type: DataTypes.INTEGER,
    reference:{
      model: BUY_TABLE,
      key:'idCompra'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  cantidad:{
    allowNull: false,
    type: DataTypes.INTEGER
  }

}

class BuyBook extends Model{

  static associate(models){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: BUYBOOK_TABLE,
      modelName: 'BuyBook',
      timestamps: false
    }
  }
}

module.exports = {BUYBOOK_TABLE, BuyBookSchema,BuyBook}
