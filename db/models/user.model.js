const {Model, DataTypes, Sequelize} = require('sequelize');
const {TYPEUSER_TABLE } = require('./type-user.models');

const USER_TABLE = 'users';

const UserSchema = {
  dni: {
    allowNull: true,
    type: DataTypes.BIGINT(10),
    unique:true
  },
  nombre: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  apellidos: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  fechaNacimiento: {
    allowNull: true,
    type: DataTypes.DATEONLY,
    field: 'fecha_nacimiento',
  },
  tipoDocumento: {
    allowNull: true,
    type: DataTypes.STRING(50),
    field: 'tipo_documento',
  },
  direccion: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  pais: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  departamento: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  ciudad: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  genero:{
    allowNull: true,
    type: DataTypes.STRING(20),
  },
  correo: {
    allowNull: true,
    type: DataTypes.STRING(50),
    unique:true
  },
  usuario: {
    allowNull: false,
    primaryKey: true,
    unique:true,
    type: DataTypes.STRING(20),
  },
  contrasena: {
    allowNull: false,
    type: DataTypes.STRING(20),
  },
  temasPreferencia: {
    field: 'temas_preferencia',
    allowNull: true,
    type: DataTypes.TEXT,
  },
  idTipoUsuario:{
    field: 'id_tipo_usuario',
    allowNull: false,
    type: DataTypes.INTEGER(11),
    reference:{
      model: TYPEUSER_TABLE,
      key:'idTipoUsuario'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  suscripcionNoticias: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'suscripcion_noticias',
  },
  inhabilitar: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  }
}

class User extends Model {
  static associate() {
    this.belongsTo(models.TypeUser,{
      foreignKey:'idTipoUser', as: 'typeStore' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = {USER_TABLE, UserSchema, User}
