-- CreateTable
CREATE TABLE `antecedentesnopatologicos` (
    `PatientId` INTEGER NOT NULL,
    `Smoking` ENUM('Si', 'No') NOT NULL,
    `SubstanceAbuse` ENUM('Si', 'No') NOT NULL,
    `Alcoholism` ENUM('Si', 'No') NOT NULL,
    `Sedentary` ENUM('Si', 'No') NOT NULL,
    `Surgeries` VARCHAR(255) NULL,
    `Exercise` VARCHAR(255) NULL,

    PRIMARY KEY (`PatientId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `antecedentespatologicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `PatientId` INTEGER NULL,
    `Disease` VARCHAR(255) NOT NULL,
    `DiagnosisDate` DATE NOT NULL,
    `DiseaseType` ENUM('Cardiovasculares', 'Hematológicas', 'Neurológicas', 'Pulmonares', 'Endocrinas', 'Metabólicas', 'Renales', 'Mentales', 'Gastrointestinales', 'Dermatológicas', 'Cáncer', 'Otros', 'ENFERMEDADES DE LA INFANCIA') NOT NULL,
    `Chronic` ENUM('Si', 'No') NOT NULL,
    `Treatment` VARCHAR(255) NULL,
    `Observations` VARCHAR(255) NULL,

    INDEX `paciente_id`(`PatientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bitacora` (
    `LogId` INTEGER NOT NULL AUTO_INCREMENT,
    `DateTime` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `User` VARCHAR(255) NOT NULL,
    `Action` VARCHAR(255) NOT NULL,
    `Tabla` VARCHAR(255) NULL,
    `RecordId` INTEGER NULL,
    `Description` VARCHAR(255) NULL,

    PRIMARY KEY (`LogId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(100) NOT NULL,
    `LastName` VARCHAR(100) NOT NULL,
    `SEX` CHAR(9) NOT NULL,
    `Age` INTEGER NOT NULL,
    `BirthDate` DATE NULL,
    `Address` VARCHAR(255) NULL,
    `Phone` VARCHAR(20) NULL,
    `CURP` VARCHAR(18) NOT NULL,
    `Email` VARCHAR(100) NULL,
    `BloodType` VARCHAR(3) NOT NULL,
    `Occupation` VARCHAR(255) NOT NULL,
    `Education` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `LastName` VARCHAR(50) NOT NULL,
    `Age` INTEGER NULL,
    `BirthDate` DATE NULL,
    `Gender` ENUM('Masculino', 'Femenino', 'Otro') NULL,
    `Specialty` VARCHAR(100) NULL,
    `Address` VARCHAR(255) NULL,
    `Phone` VARCHAR(20) NULL,
    `Cellphone` VARCHAR(20) NULL,
    `CURP` VARCHAR(18) NULL,
    `LicenseNumber` VARCHAR(12) NULL,
    `Sex` VARCHAR(10) NULL,
    `MedicalLicense` VARCHAR(100) NULL,
    `Email` VARCHAR(150) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empleado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `LastName` VARCHAR(50) NOT NULL,
    `BirthDate` DATE NULL,
    `Gender` ENUM('Masculino', 'Femenino', 'Otro') NULL,
    `Phone` VARCHAR(20) NULL,
    `Email` VARCHAR(100) NULL,
    `Address` VARCHAR(255) NULL,
    `Position` VARCHAR(100) NULL,
    `CURP` VARCHAR(18) NULL,
    `RFC` VARCHAR(191) NULL,
    `Salary` DECIMAL(10, 2) NULL,
    `HireDate` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enfermedades` (
    `DiseaseId` INTEGER NOT NULL AUTO_INCREMENT,
    `DiseaseType` ENUM('Cardiovasculares', 'Hematológicas', 'Neurológicas', 'Pulmonares', 'Endocrinas', 'Metabólicas', 'Renales', 'Mentales', 'Gastrointestinales', 'Dermatológicas', 'Cáncer', 'Otros', 'ENFERMEDADES DE LA INFANCIA') NOT NULL,
    `Other` TEXT NOT NULL,
    `Causes` TEXT NOT NULL,
    `Symptoms` TEXT NOT NULL,
    `Treatment` TEXT NOT NULL,

    PRIMARY KEY (`DiseaseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examenclinicointraoral` (
    `PatientId` INTEGER NOT NULL,
    `ExaminationDate` DATE NOT NULL,
    `Gums` VARCHAR(255) NOT NULL,
    `Tongue` VARCHAR(255) NOT NULL,
    `HardPalate` VARCHAR(255) NOT NULL,
    `SoftPalate` VARCHAR(255) NOT NULL,
    `Pharynx` VARCHAR(255) NOT NULL,
    `FloorOfMouth` VARCHAR(255) NOT NULL,
    `ResidualRidge` VARCHAR(255) NOT NULL,
    `OcclusionType` VARCHAR(255) NOT NULL,
    `Observations` VARCHAR(255) NULL,

    PRIMARY KEY (`PatientId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historialclinico` (
    `HistoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `ClientId` INTEGER NULL,
    `DentistId` INTEGER NULL,
    `ConsultationDate` DATE NULL,
    `ClinicalData` JSON NULL,

    INDEX `cliente_id`(`ClientId`),
    INDEX `dentista_id`(`DentistId`),
    PRIMARY KEY (`HistoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permisos` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Email` VARCHAR(100) NOT NULL,
    `Password` VARCHAR(100) NOT NULL,
    `IsAdministrator` BOOLEAN NOT NULL DEFAULT false,
    `IsDoctor` BOOLEAN NOT NULL DEFAULT false,
    `IsEmployee` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `usuarios_Email_key`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `antecedentesnopatologicos` ADD CONSTRAINT `AntecedentesNoPatologicos_id_paciente_fkey` FOREIGN KEY (`PatientId`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `antecedentespatologicos` ADD CONSTRAINT `AntecedentesPatologicos_paciente_id_fkey` FOREIGN KEY (`PatientId`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `examenclinicointraoral` ADD CONSTRAINT `ExamenClinicoIntraoral_id_paciente_fkey` FOREIGN KEY (`PatientId`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historialclinico` ADD CONSTRAINT `HistorialClinico_cliente_id_fkey` FOREIGN KEY (`ClientId`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historialclinico` ADD CONSTRAINT `HistorialClinico_dentista_id_fkey` FOREIGN KEY (`DentistId`) REFERENCES `doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
