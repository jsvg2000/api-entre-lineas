const {Model, DataTypes,} = require('sequelize');

const STORE_TABLE = 'store';

const StoreSchema = {
  idTienda:{
    field:"id_tienda",
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER(11),
    primaryKey: true
  },
  nombreTienda:{
    field:"nombre_tienda",
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(50)
  },
  telefono:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.INTEGER(20)
  },
  horarios:{
    allowNull: false,
    type: DataTypes.TEXT('long'),
  },
  direccion:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.TEXT('long'),
    field: 'anyo_publicacion'
  },
  pais:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(100)
  },
  departamento:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(100)
  },
  cuidad:{
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.STRING(100)
  }
}

class Store extends Model{

  static associate(models){
    this.hasMany(models.Book,{
      as: 'books',
      foreignKey:'idTienda'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: STORE_TABLE,
      modelName: 'Store',
      timestamps: false
    }
  }
}

module.exports = {STORE_TABLE, StoreSchema,Store}


