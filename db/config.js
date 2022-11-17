const { config } = require('./../config/config');

module.exports = {
  dev: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions:{
      ssl : {
        rejectUnauthorized:false
      }
    }
  }
}
