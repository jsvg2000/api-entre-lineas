const {Model, DataTypes,} = require('sequelize');
const {BOOK_TABLE } = require('./book.model');

const NOTICES_TABLE = 'notices';

const NoticesSchema = {
  idNoticias:{
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
  inhabilitado:{
    allowNull:true,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }

}

class Notices extends Model{

  static associate(models){
    this.belongsTo(models.Book,{ foreignKey:'issn',as: 'books' });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: NOTICES_TABLE,
      modelName: 'Notices',
      timestamps: false
    }
  }
}

module.exports = {NOTICES_TABLE, NoticesSchema,Notices}
