const {Model, DataTypes,Sequelize} = require('sequelize');

const BOOK_TABLE = 'books';

const BookSchema = {
  issn:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(20),
    primaryKey: true,
    unique:'compositeIndex'
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
  }
}

class Book extends Model{

  static associations(){

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


