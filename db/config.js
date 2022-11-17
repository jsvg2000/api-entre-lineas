const { config } = require('./../config/config');

module.exports = {
  dev: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    ssl : {
      rejectUnauthorized:false
    }
  }
}
