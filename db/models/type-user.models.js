const {Model, DataTypes,} = require('sequelize');

const TYPEUSER_TABLE = 'type-user';

const TypeUserSchema = {
  idTipoUsuario:{
    field:"id_tipo_usuario",
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  tipoUsuario:{
    field:"tipo_usuario",
    allowNull: false,
    type: DataTypes.STRING(20)
  }
}

class TypeUser extends Model{
  static associate(models){
    this.hasMany(models.User,{
      as: 'users',
      foreignKey:'idTipoUsuario'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: TYPEUSER_TABLE,
      modelName: 'TypeUser',
      timestamps: false
    }
  }
}

module.exports = {TYPEUSER_TABLE, TypeUserSchema,TypeUser};
