# Manual de Instalacion

Esta documentación proporciona una guía sobre cómo Instalar para gestionar y realizar la migración.
## Prerrequisitos

 * npm 10.5.2 o superior
 * MySQL Product Archives(Crear contraseña)
 * Node
   
## Instalación de Linux en Windows con WSL
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
```

## Instalacion de Mysql Workbench
1. Dirigirse al link anexado para poder descargarlo
   
```
https://dev.mysql.com/downloads/workbench/
```

Una ves instalado mysql hacer el proceso de instalación y se le pedira una contraseña 

## Configuracion de la Base De Datos.

3. Crea un archivo .env

4. Edita el archivo ´.env´ con los detalles de la base de datos a lo cual modificara la contraseña.

Nota: En donde dice contraseña hay que poner la que creo en mysql

```
DATABASE_URL="mysql://root:contraseña@localhost:3306/proyecto_salud?schema=public"

NEXTAUTH_URL="http://localhost:3000/"

NEXTAUTH_SECRET=TuPalabraSecreta
`````

## Instalacion de Base De Datos.


## Ejecucion de Migración.

5. Genera y Migra el schema de Base de datos.

````
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate

````
## Modo de uso de Base de Datos
1. Para ver que se haya ejecutado correctamente ejecutamos el comando.
```
npx prisma studio
```

despues de poner  comando  le aparecerá  http://localhost:5555 

dando click url lo mandara  la página  y despues  dar en  el + en donde  les desplegara  OPEN MODEL  debera buscar usuario le abrira  paguina en donde  tendra que poner un  correo y contraseña  y despues le da en aguardar   

````
`````
## Ejecuta el proyecto.
````
 npm run dev
````


 Abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.

## Visualiza  en otro equipo

Pero si es en otro equipo donde se está ejecutando abre el cmd de tu equipo y escribe ipconfig, cuando termine de ejecutarse este comando busca un apartado que diga dirección IPv4.

```
ipconfig
```
Dada la dirección IPv4 que te de te diriges a tu navegador y pones
http://140.10.6.142:3000



