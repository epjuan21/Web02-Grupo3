# Web02-Grupo3

Repositorio Proyecto G3 Virtual Store del Grupo 03 - Ciclo 4 - Desarrollo Aplicaciones Web Grupo 02

### Integrantes:

 - Juan Fernando Ramírez Vélez
 - Alberto Duque Villegas
 - Juan Carlos Castro Higuita
 - Michell Jessit Anaya Alsina
 - Cristian Rozo López

### Tutor
Juan David Triana

## Instalación
El proyecto consta de dos carpetas principales, **server** y **g3store** para BACK END Y FRONT END respectivamente.

### Server
El servidor esta realizado en **Mongo**, **Node** y **Express**. Para iniciar el servidor se debe ejecutar el comando `npm start` el servidor arrancará por defecto en el puerto 3000

Se debe crear un archivo `.env` con los siguientes valores:

**DB_STRING** = aquí debe ir la cadena de conexión a la base de datos de MongoDB, ya sea local o remota, como por ejemplo en Mongo Atlas

**DB_PASS** = aquí debe ir la clave de acceso a la base de datos de MongoDB

**JWT_SECRET** = aquí debe ir una frase de seguridad que será usara por JWT o JSon Web Token para cifrar las contraseñas de los usuarios

### g3store

En esta carpeta esta el código del Front End, el cual esta realizado en ReactJS. Para iniciar el proyecto en local se puede usar el comando `npm start`

### Descripción

Este proyecto ofrecerá productos y servicios de software de pesaje vehicular y de control de tráfico y recaudo en las estaciones de peajes y pesaje de las vías concesionadas de Colombia y soluciones de software a la medida en el área de transporte y movilidad en general.
