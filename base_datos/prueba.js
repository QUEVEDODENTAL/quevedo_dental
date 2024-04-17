const mysql = require('mysql');

// Configura los parámetros de conexión a tu base de datos MySQL
const conexion = mysql.createConnection({
  host: 'localhost', // Cambia esto por la dirección de tu servidor de base de datos si es diferente
  user: 'root', // Cambia esto por tu nombre de usuario de MySQL
  password: 'Backend1', // Cambia esto por tu contraseña de MySQL
  database: 'proyecto_salud' // Cambia esto por el nombre de tu base de datos
});

// Conéctate a la base de datos
conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión establecida con la base de datos.');

  // Inserta un dato de prueba en la tabla 'Clientes'
  const datoPrueba = {
    nombre: 'Juan',
    apellido: 'Pérez',
    sexo: 'M',
    edad: 30,
    fecha_nacimiento: '1994-05-10',
    domicilio: 'Calle Principal 123',
    telefono: '1234567890',
    curp: 'PERJ940510HMCXNNA1',
    correo_electronico: 'juan@example.com',
    tipo_sangre: 'O+',
    ocupacion: 'Ingeniero',
    escolaridad: 'Universidad'
  };

  conexion.query('INSERT INTO Clientes SET ?', datoPrueba, (error, resultado) => {
    if (error) {
      console.error('Error al insertar el dato:', error);
      return;
    }
    console.log('Dato insertado correctamente:', resultado);
  });

  // Cierra la conexión a la base de datos
  conexion.end();
});
