// prueba conexión sin poner credenciales en este archivo
const mysql = require('mysql');
const dbConfig = require('./dbConfig'); // Ruta al archivo dbConfig.js

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
      console.error('CONEXIÓN FALLIDA a la BD MySQL', err);
      return;
  }
  console.log('CONEXIÓN EXITOSA A LA BD MYSQL');
});

connection.end((err) => {
  if (err) {
      console.error('ERROR AL CERRAR LA CONEXIÓN', err);
      return;
  }
  console.log('CONEXIÓN CERRADA CON ÉXITO');
});
