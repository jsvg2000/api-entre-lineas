const {Model, DataTypes,Sequelize} = require('sequelize');
const {STORE_TABLE } = require('./store.model');
const BOOK_TABLE = 'books';

const BookSchema = {
  issn:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  titulo:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(50)
  },
  autor:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(50)
  },
  fechaPublicacion:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_publicacion'
  },
  anyoPublicacion:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.INTEGER(4),
    field: 'anyo_publicacion'
  },
  genero:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(50)
  },
  numeroPaginas:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.INTEGER(5),
    field: 'numero_paginas'
  },
  editorial:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(50)
  },
  idioma:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(50)
  },
  estado:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.BOOLEAN
  },
  precio:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.FLOAT
  },
  urlImage:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.TEXT
  },
  habilitado:{
    allowNull:true,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  idTienda:{
    field: 'id_tienda',
    allowNull: false,
    type: DataTypes.INTEGER(11),
    reference:{
      model: STORE_TABLE,
      key:'idTienda'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Book extends Model{

  static associate(models){
    this.belongsTo(models.Store,{
      foreignKey:'idTienda', as: 'store' });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: BOOK_TABLE,
      modelName: 'Book',
      timestamps: false
    }
  }
}

module.exports = {BOOK_TABLE, BookSchema,Book}


