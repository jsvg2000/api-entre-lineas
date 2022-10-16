const {client, Client} = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'libreria_entre_lineas'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
