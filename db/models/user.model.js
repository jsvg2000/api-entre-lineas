const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  dni: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  tipoUsuario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'tipo_usuario',
  },
  nombre: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  apellidos: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  fechaNacimiento: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'fecha_nacimiento',
  },
  pais: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  departamento: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  ciudad: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  direccion: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  generoFavorito: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'genero_favorito',
  },
  correo: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  usuario: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  contrasena: {
    allowNull: false,
    type: DataTypes.STRING,
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
    // associate
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
