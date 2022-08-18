# prueba_node
Prueba node.js, usando express, para un CRUD de una BD postgres
# instalacion
- se necesita node version 16.17.0
# dependencias
- cors: ^2.8.5,
- express: ^4.18.1,
- morgan: ^1.10.0,
- pg: ^8.7.3,
- reflect-metadata: ^0.1.13,
- typeorm: ^0.3.7
```
npm i express cors morgan
```
```
npm i pg 
```
```
npm i reflect-metadata --save
```
```
npm i typeorm --save
```
En dado caso que instalacion typeorm de error, usar el comando
```
npm i typeorm --legacy-peer-deps
```
# ejecucion
El proyecto viene con el script start para su ejecucion, utilizar:
```
npm start
```
# Endpoints para verificar CRUD
Para agregar un empleado:
- por post, a traves de un JSON, ir al siguiente endpoint, agregando los valores deseados
```
localhost:1234/empleados
```
Para actualizar un empleado:
- por put, a traves de un JSON, ir al siguiente endpoint, cambiando los valores deseados
```
localhost:1234/empleado/#id
```
cambiar el #id con el valor o id deseado  
Para eliminar un empleado:
- utilizando delete, especificar el id del empleado a borrar
```
localhost:1234/empleado/#id
```
cambiar el #id con el valor o id deseado  
Para visualizar empleados:
- por get, ir al siguiente endpoint
```
localhost:1234/empleados
```
Para eliminar un empleado:
- utilizando delete, especificar el id del empleado a borrar
```
localhost:1234/empleado/#id
```
Para visualizar un empleado en especifico:
- por get, ir al siguiente endpoint
```
localhost:1234/empleado/#id
```
cambiar el #id con el valor o id deseado

## importante
Cambiar las credenciales de la BD dentro del archivo db.js, username, password, database
