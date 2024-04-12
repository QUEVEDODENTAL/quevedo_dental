# Quevedo Dental
Se llevó acabo un proceso meticuloso y detallado para garantizar la eficiencia y la integridad de la información dentro del sistema realizado . Este proyecto implica la gestión de datos relacionados con citas, clientes, deudas, doctores, empleados, inventario, locales, pagos y datos de usuarios, abarcando tanto a doctores, empleados y clientes.


## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)


## Instalación

1. Clona este repositorio en tu máquina local.

Para clonar un repositorio dirigete a donde dice Code y  copia el url que te da HTTPS o SSH
- Abra Git Bash.

-Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.

-Escriba git clone y pegue la dirección URL que ha copiado antes.

-git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

2. Instala node.js 
Ingresando a la pagina https://nodejs.org/en/download
Instala la version 20.11.1

3. Instala el react con el comando
   - npx create-next-app@latest

4. Instala las dependencias utilizando el gestor de paquetes npm:

Ingresa a la terminal y escribe el comando:
   npm install
 Inicia el servidor de desarrollo:
 npm run dev
   
Genera y Migra el schema de Base de datos.
 npx prisma migrate dev
 npx prisma migrate deploy
 npx prisma generate

Ejecuta el proyecto.
 npm run dev

5. Abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.

## Tecnologías Utilizadas y Versiones

- Next.js - Framework de React para aplicaciones web.
- Tailwind CSS - Framework de CSS utilitario.
- npm - '10.2.4'
- node - '20.11.1',

## Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz commit de ellos (git commit -am 'Agrega nueva característica').
Haz push de tu rama al repositorio remoto (git push origin feature/nueva-caracteristica).
Abre un Pull Request.
