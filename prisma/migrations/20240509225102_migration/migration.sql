/*
  Warnings:

  - The primary key for the `historialclinico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `client_id` on the `historialclinico` table. All the data in the column will be lost.
  - You are about to drop the column `clinical_data` on the `historialclinico` table. All the data in the column will be lost.
  - You are about to drop the column `consultation_date` on the `historialclinico` table. All the data in the column will be lost.
  - You are about to drop the column `dentist_id` on the `historialclinico` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `historialclinico` table. All the data in the column will be lost.
  - You are about to drop the `AntecedentesNoPatologicos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AntecedentesPatologicos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bitacora` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Clientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Doctor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Empleado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Enfermedades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExamenClinicoIntraoral` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permiso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuarios` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `HistoryId` to the `historialclinico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `AntecedentesNoPatologicos` DROP FOREIGN KEY `AntecedentesNoPatologicos_id_patient_fkey`;

-- DropForeignKey
ALTER TABLE `AntecedentesPatologicos` DROP FOREIGN KEY `AntecedentesPatologicos_patient_id_fkey`;

-- DropForeignKey
ALTER TABLE `ExamenClinicoIntraoral` DROP FOREIGN KEY `ExamenClinicoIntraoral_id_patient_fkey`;

-- DropForeignKey
ALTER TABLE `historialclinico` DROP FOREIGN KEY `historialclinico_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `historialclinico` DROP FOREIGN KEY `historialclinico_dentist_id_fkey`;

-- AlterTable
ALTER TABLE `historialclinico` DROP PRIMARY KEY,
    DROP COLUMN `client_id`,
    DROP COLUMN `clinical_data`,
    DROP COLUMN `consultation_date`,
    DROP COLUMN `dentist_id`,
    DROP COLUMN `id`,
    ADD COLUMN `ClientId` INTEGER NULL,
    ADD COLUMN `ClinicalData` JSON NULL,
    ADD COLUMN `ConsultationDate` DATE NULL,
    ADD COLUMN `DentistId` INTEGER NULL,
    ADD COLUMN `HistoryId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`HistoryId`);

-- DropTable
DROP TABLE `AntecedentesNoPatologicos`;

-- DropTable
DROP TABLE `AntecedentesPatologicos`;

-- DropTable
DROP TABLE `Bitacora`;

-- DropTable
DROP TABLE `Clientes`;

-- DropTable
DROP TABLE `Doctor`;

-- DropTable
DROP TABLE `Empleado`;

-- DropTable
DROP TABLE `Enfermedades`;

-- DropTable
DROP TABLE `ExamenClinicoIntraoral`;

-- DropTable
DROP TABLE `Permiso`;

-- DropTable
DROP TABLE `Usuarios`;

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

    UNIQUE INDEX `Email`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `cliente_id` ON `historialclinico`(`ClientId`);

-- CreateIndex
CREATE INDEX `dentista_id` ON `historialclinico`(`DentistId`);

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
