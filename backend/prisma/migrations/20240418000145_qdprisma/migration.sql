-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `edad` INTEGER NULL,
    `fecha_nacimiento` DATETIME(3) NULL,
    `genero` VARCHAR(191) NOT NULL,
    `especialidad` VARCHAR(191) NULL,
    `direccion` VARCHAR(191) NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `curp` VARCHAR(191) NOT NULL,
    `cedula` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NULL,
    `licencia_medica` VARCHAR(191) NULL,
    `correo_electronico` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empleado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `fecha_nacimiento` DATETIME(3) NULL,
    `genero` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `correo_electronico` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NULL,
    `puesto` VARCHAR(191) NULL,
    `curp` VARCHAR(191) NOT NULL,
    `rfc` VARCHAR(191) NOT NULL,
    `salario` DOUBLE NULL,
    `fecha_contratacion` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `edad` INTEGER NOT NULL,
    `fecha_nacimiento` DATETIME(3) NULL,
    `domicilio` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `curp` VARCHAR(191) NOT NULL,
    `correo_electronico` VARCHAR(191) NOT NULL,
    `tipo_sangre` VARCHAR(191) NOT NULL,
    `ocupacion` VARCHAR(191) NOT NULL,
    `escolaridad` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistorialClinico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NOT NULL,
    `dentista_id` INTEGER NOT NULL,
    `fecha_consulta` DATETIME(3) NULL,
    `datos_clinicos` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enfermedad` (
    `id_enfermedad` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,
    `otro` VARCHAR(191) NULL,
    `causas` VARCHAR(191) NOT NULL,
    `sintomas` VARCHAR(191) NOT NULL,
    `tratamiento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_enfermedad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AntecedentesNoPatologicos` (
    `id_paciente` INTEGER NOT NULL,
    `tabaquismo` VARCHAR(191) NOT NULL,
    `toxicomanias` VARCHAR(191) NOT NULL,
    `alcoholismo` VARCHAR(191) NOT NULL,
    `sedentarismo` VARCHAR(191) NOT NULL,
    `cirugias` VARCHAR(191) NULL,
    `ejercicio` VARCHAR(191) NULL,

    PRIMARY KEY (`id_paciente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AntecedentesPatologicos` (
    `id_paciente` INTEGER NOT NULL,
    `enfermedad` VARCHAR(191) NOT NULL,
    `fecha_diagnostico` DATETIME(3) NOT NULL,
    `tipo_enfermedad` VARCHAR(191) NOT NULL,
    `cronica` VARCHAR(191) NOT NULL,
    `tratamiento` VARCHAR(191) NULL,
    `observaciones` VARCHAR(191) NULL,

    PRIMARY KEY (`id_paciente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExamenClinicoIntraoral` (
    `id_paciente` INTEGER NOT NULL,
    `fecha_examen` DATETIME(3) NOT NULL,
    `encia` VARCHAR(191) NOT NULL,
    `lengua` VARCHAR(191) NOT NULL,
    `paladar_duro` VARCHAR(191) NOT NULL,
    `paladar_blando` VARCHAR(191) NOT NULL,
    `faringe` VARCHAR(191) NOT NULL,
    `piso_de_la_boca` VARCHAR(191) NOT NULL,
    `reborde_residual` VARCHAR(191) NOT NULL,
    `tipo_oclusion` VARCHAR(191) NOT NULL,
    `observaciones` VARCHAR(191) NULL,

    PRIMARY KEY (`id_paciente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permiso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `permiso` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreusuario` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `rolusuario` VARCHAR(191) NOT NULL,
    `fechacreacion` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_nombreusuario_key`(`nombreusuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bitacora` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_hora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usuario` VARCHAR(191) NOT NULL,
    `accion` VARCHAR(191) NOT NULL,
    `tabla` VARCHAR(191) NULL,
    `id_registro` INTEGER NULL,
    `descripcion` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
