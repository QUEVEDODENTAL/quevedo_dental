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
Dirigete al url  y sigue los pasos para realizar la clonacion https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository

2. Instala node.js
Ingresando a la pagina https://nodejs.org/en/download
Instala la version 20.11.1

Instala la version 20.11.1 en caso de tener de ya contar con otra version
 ```
nvm use [version] 
 ```

4. Instala las dependencias utilizando el gestor de paquetes npm:
  ```
npm install npm@latest -g
 ```

Ingresa a la terminal y escribe el comando:
    ```sh npm install   ```
Para cambiar de version usa el comando
```
npm install -g npm@7.0.0
```
 Inicia el servidor de desarrollo:
 ```
 npm run dev
```
  ```
npm run dev
  ```

Genera y Migra el schema de Base de datos.
```
npx prisma migrate dev
```
``` 
npx prisma migrate deploy
 ```
 ``` 
 npx prisma generate
```

Ejecuta el proyecto.
```
 npm run dev
```

5. Desde el equipo donde ejecutaste el codigo abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento pero de manera local.
5. Abre tu navegador y ve a
```
http://localhost:3000
```
para ver la aplicación en funcionamiento.


6. Pero si es en otra equipo donde se esta ejecutando abre el cmd de tu equipo y escribe ipconfig, cuando termine de ejecutarse ese comando busca un apartado que diga direccion IPv4.
6. Dada la direccion IPv4 que te dete diriges a tu navegador y pones
 ```
http://direccion ip:3000
```

# Tecnologías Utilizadas y Versiones

## Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza tus cambios y haz commit de ellos (git commit -am 'Agrega nueva característica').
Haz push de tu rama al repositorio remoto (git push origin feature/nueva-caracteristica).
Abre un Pull Request.
