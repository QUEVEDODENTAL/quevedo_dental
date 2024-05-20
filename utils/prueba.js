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

 // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Doctor'
  const datosDoctor = {
    Name: 'Pedro',
    LastName: 'Ramírez',
    Age: 40,
    BirthDate: '1984-07-15',
    Gender: 'Masculino',
    Specialty: 'Cardiología',
    Address: 'Calle Principal 123',
    Cellphone: '0987123456',
    Curp: 'RARV840715HTCPRD01',
    LicenseNumber: '12345678',
    Sex: 'Masculino',
    MedicalLicense: 'ABC123',
    Email: 'pedro@example.com',
    HireDate: '2023-05-20',
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
    Name: 'María',
    LastName: 'López',
    BirthDate: '1990-09-25',
    Gender: 'Femenino',
    Cellphone: '0987123456',
    Email: 'maria@example.com',
    Address: 'Avenida Central 456',
    Position: 'Enfermera',
    Curp: 'LOPM900925MDFMRA07',
    Rfc: 'LOPM900925XYZ1234',
    Salary: 25000.00,
    HireDate: '2023-05-20',
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
    Name: 'Laura',
    LastName: 'García',
    Sex: 'Femenino',
    Age: 30,
    BirthDate: '1994-12-10',
    Address: 'Avenida Libertad 789',
    Phone: '5678123456',
    Curp: 'GALU941210MDFRRC05',
    Email: 'laura@example.com',
    BloodType: 'AB-',
    Occupation: 'Ingeniera',
    Education: 'Doctorado'
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
    DiseaseType: 'Cardiovasculares',
    Other: 'Hipertensión arterial',
    Causes: 'Factores genéticos, estilo de vida sedentario, dieta poco saludable, etc.',
    Symptoms: 'Dolor de cabeza, fatiga, visión borrosa, etc.',
    Treatment: 'Medicamentos antihipertensivos, cambios en el estilo de vida, control del estrés, etc.'
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
    PatientId: 5,
    Smoking: 'No',
    SubstanceAbuse: 'No',
    Alcoholism: 'No',
    Sedentary: 'Sí',
    Surgeries: 'Ninguna',
    Exercise: 'Caminata diaria'
  };

  conexion.query('INSERT INTO antecedentesnopatologicos SET ?', datosAntecedentesNoPatologicos, (error, resultado) => {
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
    PatientId: 5,
    Disease: 'Hipotiroidismo',
    DiagnosisDate: '2015-10-20',
    DiseaseType: 'Endocrinas',
    Chronic: 'Sí',
    Treatment: 'Reemplazo hormonal con levotiroxina',
    Observations: 'Control regular de los niveles de hormonas tiroideas'
  };

  conexion.query('INSERT INTO antecedentespatologicos SET ?', datosAntecedentesPatologicos, (error, resultado) => {
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
    PatientId: 5,
    ExaminationDate: '2024-05-10',
    Gums: 'Sangrado leve en la encía inferior derecha',
    Tongue: 'Leve saburra lingual',
    HardPalate: 'Intacto',
    SoftPalate: 'Intacto',
    Pharynx: 'Normal',
    FloorOfMouth: 'Normal',
    ResidualRidge: 'Normal',
    OcclusionType: 'Clase II de Angle',
    Observations: 'Instrucciones sobre técnica de cepillado y uso de hilo dental'
  };

  conexion.query('INSERT INTO examenclinicointraoral SET ?', datosExamenClinicoIntraoral, (error, resultado) => {
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
    ClientId: 5,
    DentistId: 2,
    ConsultationDate: '2024-05-10',
    ClinicalData: JSON.stringify({
      Sintomas: 'Fatiga, aumento de peso, intolerancia al frío',
      Diagnostico: 'Hipotiroidismo subclínico',
      Tratamiento: 'Iniciar levotiroxina, seguimiento de los niveles de TSH'
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
  {Permission: '0001', 
   Description: 'Permite al usuario ver información'},]

  conexion.query('INSERT INTO permisos (Permission, Description) VALUES ?', [datosPermisos.map(item => [item.Permission, item.Description])], (error, resultado) => {
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
    User: 'usuario1',
    Action: 'Inicio de sesión',
    Tabla: null,
    RecordId: null,
    Description: 'El usuario usuario1 inició sesión correctamente.'
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
  const datosusuarios = {
    Email: 'daniel@gmail.com', 
    Password: 'daniel123', 
    IsAdministrator: true, 
    IsDoctor: false, 
    IsEmployee: false
  };

  // Consulta SQL para insertar datos en la tabla Usuarios
  const insertusuarios = 'INSERT INTO Usuarios (Email, Password, IsAdministrator, IsDoctor, IsEmployee) VALUES ?';

  // Insertar datos en la tabla Usuarios
  conexion.query(insertusuarios, [[Object.values(datosusuarios)]], (error, results) => {
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