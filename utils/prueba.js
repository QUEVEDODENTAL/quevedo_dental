const mysql = require('mysql');

// Configura los parámetros de conexión a tu base de datos MySQL
const conexion = mysql.createConnection({
  host: 'localhost', // Cambia esto por la dirección de tu servidor de base de datos si es diferente
  user: 'root', // Cambia esto por tu nombre de usuario de MySQL
  password: '1234', // Cambia esto por tu contraseña de MySQL
  database: 'proyecto_salud' // Cambia esto por el nombre de tu base de datos
});

// Conéctate a la base de datos
conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión establecida con la base de datos.');


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Doctor'
  const datosDoctor = {
    Name: 'Juan',
    LastName: 'Pérez',
    Age: 35,
    BirthDate: '1989-08-20',
    Gender: 'Masculino',
    Specialty: 'Pediatría',
    Address: 'Calle Independencia 456',
    Phone: '1234567890',
    Cellphone: '0987654321',
    Curp: 'PEJU890820HTCPRN07',
    LicenseNumber: '87654321',
    Sex: 'Masculino',
    MedicalLicense: 'XYZ789',
    Email: 'juan@example.com'
  };

  conexion.query('INSERT INTO Doctor SET ?', datosDoctor, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla Doctor:', error);
      return;
    }
    console.log('Datos insertados en la tabla Doctor correctamente:', resultado);
  });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Empleado'
  const datosEmpleado = {
    Name: 'Ana',
    LastName: 'Gómez',
    BirthDate: '1995-03-10',
    Gender: 'Femenino',
    Phone: '9876543210',
    Email: 'ana@example.com',
    Address: 'Avenida Reforma 123',
    Position: 'Secretaria',
    Curp: 'GOAN950310MDFMNS08',
    Rfc: 'GOAN950310ABC1234',
    Salary: 20000.00,
    HireDate: '2023-02-15'
  };

  conexion.query('INSERT INTO Empleado SET ?', datosEmpleado, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla Empleado:', error);
      return;
    }
    console.log('Datos insertados en la tabla Empleado correctamente:', resultado);
  });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Clientes'
  const datosCliente = {
    Name: 'Roberto',
    LastName: 'Hernández',
    Sex: 'Masculino',
    Age: 45,
    BirthDate: '1979-11-05',
    Address: 'Calle Principal 789',
    Phone: '5678901234',
    Curp: 'HERO791105MDFRBR03',
    Email: 'roberto@example.com',
    BloodType: 'A+',
    Occupation: 'Abogado',
    Education: 'Maestría'
  };

  conexion.query('INSERT INTO Clientes SET ?', datosCliente, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla Clientes:', error);
      return;
    }
    console.log('Datos insertados en la tabla Clientes correctamente:', resultado);
  });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
// Inserta datos de ejemplo en la tabla 'Enfermedades'
const datosEnfermedades = {
  DiseaseType: 'Pulmonares',
  Other: 'Asma',
  Causes: 'Alergias, exposición a humo, contaminantes, etc.',
  Symptoms: 'Tos, dificultad para respirar, opresión en el pecho, etc.',
  Treatment: 'Broncodilatadores, corticosteroides, antihistamínicos, etc.'
};

conexion.query('INSERT INTO Enfermedades SET ?', datosEnfermedades, (error, resultado) => {
  if (error) {
    console.error('Error al insertar datos en la tabla Enfermedades:', error);
    return;
  }
  console.log('Datos insertados en la tabla Enfermedades correctamente:', resultado);
});
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'AntecedentesNoPatologicos'
  const datosAntecedentesNoPatologicos = {
    PatientId: 3,
    Smoking: 'No',
    SubstanceAbuse: 'No',
    Alcoholism: 'No',
    Sedentary: 'No',
    Surgeries: 'Cirugía de apendicitis',
    Exercise: 'Natación dos veces por semana'
  };

  conexion.query('INSERT INTO AntecedentesNoPatologicos SET ?', datosAntecedentesNoPatologicos, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla AntecedentesNoPatologicos:', error);
      return;
    }
    console.log('Datos insertados en la tabla AntecedentesNoPatologicos correctamente:', resultado);
  });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'AntecedentesPatologicos'
  const datosAntecedentesPatologicos = {
    PatientId: 3,
    Disease: 'Diabetes tipo 2',
    DiagnosisDate: '2010-06-15',
    DiseaseType: 'Metabólicas',
    Chronic: 'Sí',
    Treatment: 'Control de la dieta, ejercicio regular, medicamentos orales',
    Observations: 'Monitoreo constante de los niveles de glucosa en sangre'
  };

  conexion.query('INSERT INTO AntecedentesPatologicos SET ?', datosAntecedentesPatologicos, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla AntecedentesPatologicos:', error);
      return;
    }
    console.log('Datos insertados en la tabla AntecedentesPatologicos correctamente:', resultado);
  });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'ExamenClinicoIntraoral'
  const datosExamenClinicoIntraoral = {
    PatientId: 3,
    ExaminationDate: '2024-02-10',
    Gums: 'Inflamación en la encía superior derecha',
    Tongue: 'Leve halitosis y saburra lingual',
    HardPalate: 'Intacto',
    SoftPalate: 'Intacto',
    Pharynx: 'Normal',
    FloorOfMouth: 'Normal',
    ResidualRidge: 'Normal',
    OcclusionType: 'Clase I de Angle',
    Observations: 'Recomendación de higiene bucal adecuada y revisión periódica'
  };

  conexion.query('INSERT INTO ExamenClinicoIntraoral SET ?', datosExamenClinicoIntraoral, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla ExamenClinicoIntraoral:', error);
      return;
    }
    console.log('Datos insertados en la tabla ExamenClinicoIntraoral correctamente:', resultado);
  });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'HistorialClinico'
  const datosHistorialClinico = {
    ClientId: 3,
    DentistId: 1,
    ConsultationDate: '2024-02-10',
    ClinicalData: JSON.stringify({
      Sintomas: 'Malestar general, fatiga, micción frecuente',
      Diagnostico: 'Infección de las vías urinarias',
      Tratamiento: 'Antibióticos, analgésicos, aumentar la ingesta de líquidos'
    })
  };

  conexion.query('INSERT INTO historialclinico SET ?', datosHistorialClinico, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla historialclinico:', error);
      return;
    }
    console.log('Datos insertados en la tabla historialclinico correctamente:', resultado);
  });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Permiso'
  const datosPermisos = [
    { Permission: '0000', Description: 'Permite al usuario modificar información.' },
    { Permission: '0001', Description: 'Permite al usuario administrar el sistema.' }
  ];

  conexion.query('INSERT INTO Permisos (Permission, Description) VALUES ?', [datosPermisos.map(item => [item.Permission, item.Description])], (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla Permisos:', error);
      return;
    }
    console.log('Datos insertados en la tabla Permisos correctamente:', resultado);
  });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
    // Inserta datos de ejemplo en la tabla 'Bitacora'
    const datosBitacora = {
      DateTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
      User: 'admin',
      Action: 'Cambio de contraseña',
      Tabla: null,
      RecordId: null,
      Description: 'El usuario admin cambió su contraseña.'
    };
  
    conexion.query('INSERT INTO Bitacora SET ?', datosBitacora, (error, resultado) => {
      if (error) {
        console.error('Error al insertar datos en la tabla Bitacora:', error);
        return;
      }
      console.log('Datos insertados en la tabla Bitacora correctamente:', resultado);
    });
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Usuarios'
  const datosUsuarios = {
    Email: 'juan@example.com', 
    Password: 'juan123', 
    IsAdministrator: false, 
    IsDoctor: true, 
    IsEmployee: false
  };
  
  // Consulta SQL para insertar datos en la tabla Usuarios
  const insertUsuarios = 'INSERT INTO Usuarios (Email, Password, IsAdministrator, IsDoctor, IsEmployee) VALUES ?';
  
  // Insertar datos en la tabla Usuarios
  conexion.query(insertUsuarios, [[Object.values(datosUsuarios)]], (error, results) => {
    if (error) {
      console.error('Error al insertar datos en la tabla Usuarios:', error);
      return;
    }
    console.log('Datos insertados correctamente en la tabla Usuarios');
  });
// --------------------------------------------------------------------------------------------


  // Cierra la conexión a la base de datos
  conexion.end();
});
