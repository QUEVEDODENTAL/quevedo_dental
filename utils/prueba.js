const mysql = require('mysql');

// Configura los parámetros de conexión a tu base de datos MySQL
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Backend1',
  database: 'proyecto_salud'
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
  const datos_doctor = {
    Name: 'Ana',
    LastName: 'Gómez',
    Age: 35,
    BirthDate: '1989-03-22',
    Gender: 'Femenino',
    Specialty: 'Neurología',
    Address: 'Calle Secundaria 456',
    Cellphone: '0987654321',
    Curp: 'GOMA890322HDFMGN07',
    LicenseNumber: '87654321',
    Sex: 'Femenino',
    MedicalLicense: 'DEF456',
    Email: 'ana@example.com',
    HireDate: '2023-06-15',
  };

  conexion.query('INSERT INTO doctor SET ?', datos_doctor, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla doctor:', error);
      return;
    }
    console.log('Datos insertados en la tabla doctor correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Empleado'
  const datos_empleado = {
    Name: 'Carlos',
    LastName: 'Hernández',
    BirthDate: '1985-11-12',
    Gender: 'Masculino',
    Cellphone: '0987112233',
    Email: 'carlos@example.com',
    Address: 'Avenida Norte 123',
    Position: 'Recepcionista',
    Curp: 'HERH851112HDFNRL05',
    Rfc: 'HERH851112XYZ5678',
    Salary: 18000.00,
    HireDate: '2023-07-01',
  };

  conexion.query('INSERT INTO empleado SET ?', datos_empleado, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla empleado:', error);
      return;
    }
    console.log('Datos insertados en la tabla empleado correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Clientes'
  const datos_cliente = {
    Name: 'Juan',
    LastName: 'Martínez',
    Sex: 'Masculino',
    Age: 28,
    BirthDate: '1996-02-20',
    Address: 'Calle Sur 789',
    Phone: '5678123467',
    Curp: 'MAJU960220HDFRTN08',
    Email: 'juan@example.com',
    BloodType: 'O+',
    Occupation: 'Profesor',
    Education: 'Maestría'
  };

  conexion.query('INSERT INTO clientes SET ?', datos_cliente, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla clientes:', error);
      return;
    }
    console.log('Datos insertados en la tabla clientes correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Enfermedades'
  const datos_enfermedades = {
    DiseaseType: 'Hematológicas',
    Other: 'Asma',
    Causes: 'Alergias, contaminación, ejercicio, etc.',
    Symptoms: 'Dificultad para respirar, sibilancias, opresión en el pecho',
    Treatment: 'Inhaladores, medicamentos, evitar desencadenantes'
  };

  conexion.query('INSERT INTO enfermedades SET ?', datos_enfermedades, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla enfermedades:', error);
      return;
    }
    console.log('Datos insertados en la tabla enfermedades correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'AntecedentesNoPatologicos'
  const datos_antecedentes_no_patologicos = {
    PatientId: 10,
    Smoking: 'Sí',
    SubstanceAbuse: 'No',
    Alcoholism: 'No',
    Sedentary: 'No',
    Surgeries: 'Apendicectomía en 2010',
    Exercise: 'Ciclismo semanal'
  };

  conexion.query('INSERT INTO antecedentes_no_patologicos SET ?', datos_antecedentes_no_patologicos, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla antecedentes_no_patologicos:', error);
      return;
    }
    console.log('Datos insertados en la tabla antecedentes_no_patologicos correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'AntecedentesPatologicos'
  const datos_antecedentes_patologicos = {
    PatientId: 10,
    Disease: 'Diabetes tipo 2',
    DiagnosisDate: '2018-05-15',
    DiseaseType: 'Metabólicas',
    Chronic: 'Sí',
    Treatment: 'Metformina, dieta controlada, ejercicio',
    Observations: 'Revisión trimestral con endocrinólogo'
  };

  conexion.query('INSERT INTO antecedentes_patologicos SET ?', datos_antecedentes_patologicos, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla antecedentes_patologicos:', error);
      return;
    }
    console.log('Datos insertados en la tabla antecedentes_patologicos correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'ExamenClinicoIntraoral'
  const datos_examen_clinico_intraoral = {
    PatientId: 10,
    ExaminationDate: '2024-06-01',
    Gums: 'Enrojecimiento leve en encías superiores',
    Tongue: 'Lengua saburral',
    HardPalate: 'Normal',
    SoftPalate: 'Normal',
    Pharynx: 'Irritación leve',
    FloorOfMouth: 'Normal',
    ResidualRidge: 'Normal',
    OcclusionType: 'Clase I de Angle',
    Observations: 'Se recomienda limpieza dental profesional cada seis meses'
  };

  conexion.query('INSERT INTO examen_clinico_intraoral SET ?', datos_examen_clinico_intraoral, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla examen_clinico_intraoral:', error);
      return;
    }
    console.log('Datos insertados en la tabla examen_clinico_intraoral correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'HistorialClinico'
  const datos_historial_clinico = {
    ClientId: 10,
    DentistId: 3,
    ConsultationDate: '2024-06-01',
    ClinicalData: JSON.stringify({
      Sintomas: 'Cansancio, sed excesiva, micción frecuente',
      Diagnostico: 'Diabetes tipo 2 controlada',
      Tratamiento: 'Continuar con metformina y dieta'
    })
  };

  conexion.query('INSERT INTO historial_clinico SET ?', datos_historial_clinico, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla historial_clinico:', error);
      return;
    }
    console.log('Datos insertados en la tabla historial_clinico correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Permiso'
  const datos_permisos = [
    { Permission: '0002', Description: 'Permite al usuario editar información' },
  ];

  conexion.query('INSERT INTO permisos (Permission, Description) VALUES ?', [datos_permisos.map(item => [item.Permission, item.Description])], (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla permisos:', error);
      return;
    }
    console.log('Datos insertados en la tabla permisos correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Bitacora'
  const datos_bitacora = {
    DateTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
    User: 'usuario2',
    Action: 'Cambio de contraseña',
    Tabla: 'usuarios',
    RecordId: 3,
    Description: 'El usuario usuario2 cambió su contraseña correctamente.'
  };

  conexion.query('INSERT INTO bitacora SET ?', datos_bitacora, (error, resultado) => {
    if (error) {
      console.error('Error al insertar datos en la tabla Bitacora:', error);
      return;
    }
    console.log('Datos insertados en la tabla Bitacora correctamente:', resultado);
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Usuarios'
  const datos_usuarios = {
    Email: 'usuario2@example.com',
    Password: 'password2',
    IsAdministrator: false,
    IsDoctor: false,
    IsEmployee: true
  };

  const insertusuarios = 'INSERT INTO usuarios (Email, Password, IsAdministrator, IsDoctor, IsEmployee) VALUES ?';
  conexion.query(insertusuarios, [[Object.values(datos_usuarios)]], (error, results) => {
    if (error) {
      console.error('Error al insertar datos en la tabla usuarios:', error);
      return;
    }
    console.log('Datos insertados correctamente en la tabla usuarios');
  });
  // --------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------
  // Inserta datos de ejemplo en la tabla 'Servicios'
  const servicios = [
    { Service_Name: 'Examen de la vista', Price: 300.00 },
    { Service_Name: 'Consulta pediátrica', Price: 700.00 },
    { Service_Name: 'Terapia física', Price: 1000.00 }
  ];

  servicios.forEach(servicio => {
    const query = 'INSERT INTO servicios (Service_Name, Price) VALUES (?, ?)';
    conexion.query(query, [servicio.Service_Name, servicio.Price], (err, results) => {
      if (err) {
        console.error('Error al insertar datos en la tabla servicios:', err.stack);
      } else {
        console.log('Datos insertados:', results.insertId);
      }
    });
  });
  // --------------------------------------------------------------------------------------------

  // Cierra la conexión a la base de datos
  conexion.end();
});
