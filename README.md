# Documentación de BASE DE DATOS

Esta documentación proporciona una guía rápida sobre cómo usar Prisma para gestionar la base de datos y realizar migraciones.

## Instalación

Antes de comenzar, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, instala Prisma de forma global utilizando npm:

```
npm install -g prisma
```

1. Clona este repositorio en tu máquina local:

```
git clone (https://github.com/ValenzuelaRa/quevedo_dental.git)
```

2. Navega hasta el directorio del proyecto:
```
cd tu_proyecto
```

3. INstala las dependencias del proyecto:
```
npm install
```

## Configuracion de la Base De Datos.

3. Crea un archivo .env
```
cp .env.example .env
```

4. Edita el archivo ´.env´ con los detalles de la base de datos.
```
DATABASE_URL="mysql://usuario:contraseña@localhost:5432/nombre_basedatos?schema=public"
```

## Ejecucion de Migración.

5. Genera y Migra el schema de Base de datos.
```
npx prisma migrate dev
```
``` 
npx prisma migrate deploy
 ```
 ``` 
 npx prisma generate
```

