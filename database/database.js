const mysql = require('mysql')

function getConnection() {
  const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'libreria_entre_lineas',
    user: 'root',
    password: ''
  })
  conexion.connect((error) => {
    if (error) {
      throw new Error("Error conectando a la BD");
    } else {
      console.log("Conexión exitosa");
    }
  });
  return conexion
};

/*
const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'libreria_entre_lineas',
  user: 'root',
  password: ''
})
conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log('conexion exitosa');
  }
});

console.log(conexion);
*/

module.exports = {
  getConnection
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------



