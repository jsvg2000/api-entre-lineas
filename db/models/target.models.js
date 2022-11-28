const {Model, DataTypes,} = require('sequelize');
const {TYPETARGET_TABLE } = require('./type-target.models');

const TARGET_TABLE = 'target';

const TargetSchema = {
  numeroTarjeta:{
    field:"numero_tarjeta",
    allowNull: false,
    autoIncrement: false,
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  idTipoTarjeta:{
    field: 'id_tipo_tarjeta',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference:{
      model: TYPETARGET_TABLE,
      key:'idTipoTarjeta'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  saldo:{
    type: DataTypes.FLOAT,
    allowNull: true
  },
  cupo:{
    type: DataTypes.FLOAT,
    allowNull: true
  },
  fechaVencimiento:{
    allowNull: true,
    type: DataTypes.DATEONLY(),
    field: 'fecha_vencimiento',
    defaultValue: DataTypes.NOW
  },
  nombreTitular:{
    type:DataTypes.STRING(50),
    field:'nombre_titular'
  },
  cvv:{
    allowNull: true,
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  inhabilitar:{
    allowNull: false,
    type:DataTypes.BOOLEAN
  }
}

class Target extends Model{
  static associate(models){
    this.belongsTo(models.TypeTarget,{ foreignKey:'idTipoTarjeta',as: 'TypeTarget' });
    this.belongsToMany(models.User, {
      as: 'User',
      through: models.HaveTarget,
      foreignKey: 'numeroTarjeta',
      otherKey: 'usuario'
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TARGET_TABLE,
      modelName: 'Target',
      timestamps: false
    }
  }
}

module.exports = {TARGET_TABLE,TargetSchema,Target};
