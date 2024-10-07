# API REST de Gestión de Mascotas

Este proyecto consiste en una API REST construida con **TypeScript** y **Express.js**, que permite la gestión de mascotas y consultas asociadas. También se incluye un frontend desarrollado en **Vue.js** que consume esta API.

## Descripción del Proyecto

La API permite realizar las siguientes operaciones:

1. **Crear una mascota** con los siguientes atributos:
   - Nombre
   - Especie
   - Raza
   - Edad

2. **Agregar consultas** a cada mascota, que incluyen:
   - ID de la mascota
   - Fecha
   - Detalles de la consulta

El frontend en Vue.js proporciona una interfaz simple y reactiva para interactuar con la API.

## Tecnologías Utilizadas

- **Backend**: 
  - TypeScript
  - Express.js
  - Node.js

- **Frontend**: 
  - Vue.js
  - Axios

# instalacion

1. **Clonar el repositorio:**
git clone https://github.com/fernandoreds/Express-api.git


## Requisitos Previos

**Instalar dependencias backend:**

npm install express
npm install typescript ts-node @types/node @types/express --save-dev


**Instalar dependencias frontend:**

vuejs
cd ../petfrontend
npm install axios
npm install


- **Backend**:
npm run dev

- **Frontend**:
npm run serve


# pruebas Api por metodo Curl

curl -X POST http://localhost:3000/api \ H "Content-Type: application/json" \ -d '{"nombre": "Firulais", "especie": "Perro", "raza": "Labrador", "edad": 3}'

curl -X GET http://localhost:3000/api

curl -X POST http://localhost:3000/api/mascotas/{id}/consultas \ -H "Content-Type: application/json" \ -d '{"fecha": "2024-10-06", "detalles": "Consulta general"}'

curl -X GET http://localhost:3000/api/mascotas/{id}/consultas