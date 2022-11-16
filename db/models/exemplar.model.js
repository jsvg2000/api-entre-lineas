const {Model, DataTypes,} = require('sequelize');
const {BOOK_TABLE } = require('./book.model');
const {STORE_TABLE } = require('./store.model');

const EXEMPLAR_TABLE = 'exemplar';

const ExemplarSchema = {
  codigo:{
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
  idTienda:{
    allowNull: false,
    type: DataTypes.INTEGER,
    reference:{
      model: STORE_TABLE,
      key:'idTienda'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

class Exemplar extends Model{

  static associate(models){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: EXEMPLAR_TABLE,
      modelName: 'Exemplar',
      timestamps: false
    }
  }
}

module.exports = {EXEMPLAR_TABLE, ExemplarSchema,Exemplar}
