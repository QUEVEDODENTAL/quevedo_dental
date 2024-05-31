-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `Age` INTEGER NULL,
    `BirthDate` DATETIME(3) NULL,
    `Gender` ENUM('Masculino', 'Femenino', 'Otro') NULL,
    `Specialty` VARCHAR(191) NULL,
    `Address` VARCHAR(191) NULL,
    `Phone` VARCHAR(191) NULL,
    `Cellphone` VARCHAR(191) NULL,
    `Curp` VARCHAR(191) NULL,
    `LicenseNumber` VARCHAR(191) NULL,
    `Sex` VARCHAR(191) NULL,
    `MedicalLicense` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empleado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `BirthDate` DATETIME(3) NULL,
    `Gender` ENUM('Masculino', 'Feminino', 'Otro') NULL,
    `Phone` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NULL,
    `Address` VARCHAR(191) NULL,
    `Position` VARCHAR(191) NULL,
    `Curp` VARCHAR(191) NULL,
    `Rfc` VARCHAR(191) NULL,
    `Salary` DOUBLE NULL,
    `HireDate` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `Sex` VARCHAR(191) NOT NULL,
    `Age` INTEGER NOT NULL,
    `BirthDate` DATETIME(3) NULL,
    `Address` VARCHAR(191) NULL,
    `Phone` VARCHAR(191) NULL,
    `Curp` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NULL,
    `BloodType` VARCHAR(191) NOT NULL,
    `Occupation` VARCHAR(191) NOT NULL,
    `Education` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enfermedades` (
    `id_disease` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('Cardiovasculares', 'Hematológicas', 'Neurológicas', 'Pulmonares', 'Endocrinas', 'Metabólicas', 'Renales', 
'Mentales', 'Gastrointestinales', 'Dermatológicas', 'Cáncer', 'Otros', 'ENFERMEDADES DE LA INFANCIA') NOT NULL,
    `other` VARCHAR(191) NOT NULL,
    `causes` VARCHAR(191) NOT NULL,
    `symptoms` VARCHAR(191) NOT NULL,
    `treatment` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_disease`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AntecedentesNoPatologicos` (
    `id_patient` INTEGER NOT NULL,
    `smoking` ENUM('Yes', 'No') NOT NULL,
    `substance_abuse` ENUM('Yes', 'No') NOT NULL,
    `alcoholism` ENUM('Yes', 'No') NOT NULL,
    `sedentary` ENUM('Yes', 'No') NOT NULL,
    `surgeries` VARCHAR(191) NULL,
    `exercise` VARCHAR(191) NULL,

    PRIMARY KEY (`id_patient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AntecedentesPatologicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patient_id` INTEGER NOT NULL,
    `disease` VARCHAR(191) NOT NULL,
    `diagnosis_date` DATETIME(3) NOT NULL,
    `disease_type` ENUM('Cardiovasculares', 'Hematológicas', 'Neurológicas', 'Pulmonares', 'Endocrinas', 'Metabólicas', 'Renales', 'Mentales', 
'Gastrointestinales', 'Dermatológicas', 'Cáncer', 'Otros', 'ENFERMEDADES DE LA INFANCIA') NOT NULL,
    `chronic` ENUM('Yes', 'No') NOT NULL,
    `treatment` VARCHAR(191) NULL,
    `observations` VARCHAR(191) NULL,

    INDEX `patient_id`(`patient_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExamenClinicoIntraoral` (
    `id_patient` INTEGER NOT NULL,
    `examination_date` DATETIME(3) NOT NULL,
    `gums` VARCHAR(191) NOT NULL,
    `tongue` VARCHAR(191) NOT NULL,
    `hard_palate` VARCHAR(191) NOT NULL,
    `soft_palate` VARCHAR(191) NOT NULL,
    `pharynx` VARCHAR(191) NOT NULL,
    `floor_of_mouth` VARCHAR(191) NOT NULL,
    `residual_ridge` VARCHAR(191) NOT NULL,
    `occlusion_type` VARCHAR(191) NOT NULL,
    `observations` VARCHAR(191) NULL,

    PRIMARY KEY (`id_patient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historialclinico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_id` INTEGER NOT NULL,
    `dentist_id` INTEGER NOT NULL,
    `consultation_date` DATETIME(3) NOT NULL,
    `clinical_data` JSON NOT NULL,

    INDEX `client_id`(`client_id`),
    INDEX `dentist_id`(`dentist_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permiso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `permission` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bitacora` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user` VARCHAR(191) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `table` VARCHAR(191) NULL,
    `record_id` INTEGER NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Usuarios (
    `Id` INT AUTO_INCREMENT PRIMARY KEY,
    `Email` VARCHAR(50) NOT NULL UNIQUE,
    `Password` VARCHAR(50) NOT NULL,
    `IsAdministrator` BOOLEAN NOT NULL DEFAULT FALSE,
    `IsDoctor` BOOLEAN NOT NULL DEFAULT FALSE,
    `IsEmployee` BOOLEAN NOT NULL DEFAULT FALSE
);

-- AddForeignKey
ALTER TABLE `AntecedentesNoPatologicos` ADD CONSTRAINT `AntecedentesNoPatologicos_id_patient_fkey` FOREIGN KEY (`id_patient`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AntecedentesPatologicos` ADD CONSTRAINT `AntecedentesPatologicos_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExamenClinicoIntraoral` ADD CONSTRAINT `ExamenClinicoIntraoral_id_patient_fkey` FOREIGN KEY (`id_patient`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historialclinico` ADD CONSTRAINT `historialclinico_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historialclinico` ADD CONSTRAINT `historialclinico_dentist_id_fkey` FOREIGN KEY (`dentist_id`) REFERENCES `Doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
