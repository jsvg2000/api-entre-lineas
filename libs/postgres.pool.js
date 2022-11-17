const { options } = require('joi');
const {Pool} = require('pg');
const {config} = require('./../config/config');

let URI = "";

const options ={}

if(config.isProd){
  URI = config.dbUrl;
  options.connectionString = config.dbUrl;
  options.ssl = {
    rejectUnauthorized:false
  };
}else{
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const pool = new Pool();


module.exports = pool;
