# Manual de Instalacion

Esta documentación proporciona una guía sobre cómo Instalar para gestionar y realizar la migración.
## Prerrequisitos
`````
 * npm 10.5.2 o superior
 *  MySQL Workbench 8 o superior para (Base de Datos)
 *  MySQL Product Archives(Crear contraseña)
 * github desktop
 *  git bash
 * Node
`````
##Instalación de Linux en Windows con WSL
```
wsl --install
```

## Instalación Programas 

1. Clona este repositorio en tu máquina local:

```
git clone (https://github.com/QUEVEDODENTAL/quevedo_dental.git)
```

2. Navega hasta el directorio del proyecto:
```
cd quevedo_dental
```

3. Instala las dependencias del proyecto:
```
npm install

````
## Instalación de las icons
`````
npm install react-icons
`````
## Instalar la programa para crear contraseña para uso .env
```
MySQL Product Archives(https://downloads.mysql.com/archives/community/)

Cuando se Instale despues hacer el proceso de intalacion se pidara   poner una  contraseña  y como esta Configuracion de la Base De Datos se tepide hacer Ejecucion de Migración  los paso que pidiran  que pongas en la terminal
```
## Configuracion de la Base De Datos.

3. Crea un archivo .env

4. Edita el archivo ´.env´ con los detalles de la base de datos.

```
DATABASE_URL="mysql://root:contraseña@localhost:3306/proyecto_salud?schema=public"

NEXTAUTH_URL="http://localhost:3000/"

NEXTAUTH_SECRET=TuPalabraSecreta
`````
## Ejecucion de Migración.

5. Genera y Migra el schema de Base de datos.

```
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate

```
## Modo de uso de Base de Datos
1. Para ver que se haya ejecutado correctamente ejecutamos el comando.
```
npx prisma studio
```

despues de poner  comando  le aparecerá  http://localhost:5555 

dando click url lo mandara  la página  y despues  dar en  el + en donde  les desplegara  OPEN MODEL  debera buscar usuario le abrira  paguina en donde  tendra que poner un  correo y contraseña  y despues le da en aguardar   

