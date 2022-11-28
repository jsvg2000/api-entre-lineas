const {Model, DataTypes,Sequelize} = require('sequelize');
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
    allowNull: true,
    type: DataTypes.DATEONLY(),
    field: 'fecha_publicacion',
    defaultValue: DataTypes.NOW
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
  cantidad:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.INTEGER
  },
  precio:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.FLOAT
  },
  urlImage:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.TEXT,
    field: 'url_image'
  },
  inhabilitado:{
    allowNull:true,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}

class Book extends Model{

  static associate(models){
    this.belongsToMany(models.Store, {
      as: 'Store',
      through: models.Exemplar,
      foreignKey: 'issn',
      otherKey: 'idTienda'
    });
    this.belongsToMany(models.Buy, {
      as: 'Buy',
      through: models.BuyBook,
      foreignKey: 'issn',
      otherKey: 'idCompra'
    });
    this.hasMany(models.Notices,{
      as: 'notices',
      foreignKey:'issn'
    });
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


