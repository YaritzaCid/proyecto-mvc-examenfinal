# DentPlus Evolucionado - Examen Final

Sistema web desarrollado para la gestión de afiliados de una clínica dental utilizando arquitectura MVC, autenticación de usuarios, validaciones con Zod, PostgreSQL y Docker.

---

# Tecnologías utilizadas

* Node.js
* TypeScript
* Express
* Handlebars
* Prisma ORM
* PostgreSQL
* Docker
* Docker Compose
* Bootstrap 5
* Zod
* bcryptjs
* express-session

---

# Arquitectura MVC

El proyecto se encuentra organizado utilizando el patrón MVC:

* Models → acceso y lógica de datos mediante Prisma ORM.
* Views → interfaces desarrolladas con Handlebars.
* Controllers → lógica de negocio y coordinación entre vistas y modelos.
* Routes → definición de endpoints y navegación.
* Prisma → conexión y persistencia de datos en PostgreSQL.

---

# Funcionalidades

## Gestión de usuarios

* Registro de usuarios.
* Inicio de sesión.
* Cierre de sesión.
* Contraseñas protegidas mediante bcryptjs.
* Gestión de sesiones mediante express-session.

---

## Gestión de afiliados

* Crear afiliados.
* Listar afiliados.
* Ver detalle de afiliados.
* Editar afiliados.
* Eliminar afiliados.

---

## Aislamiento de datos

Cada usuario puede visualizar y administrar únicamente sus propios afiliados.

El identificador del usuario autenticado se obtiene desde la sesión y nunca desde formularios enviados por el cliente.

---

## Validaciones con Zod

Se validan los formularios de:

* Registro de usuarios.
* Inicio de sesión.
* Creación de afiliados.
* Edición de afiliados.
* Simulación de descuentos.

Las validaciones muestran errores inline y mantienen los datos ingresados por el usuario.

---

## Simulador de descuentos

Cada afiliado posee un tipo de membresía:

* Silver → 5%
* Gold → 10%
* Platinium → 20%

El sistema permite ingresar un monto de tratamiento y calcular automáticamente el precio final según el descuento correspondiente.

---

# Dockerización

La aplicación fue dockerizada utilizando Docker y Docker Compose.

Se implementó un Dockerfile con estrategia Multi-Stage Build dividido en tres etapas:

* deps → instalación de dependencias.
* build → generación de Prisma Client y compilación TypeScript.
* runner → ejecución optimizada de la aplicación.

Esto permite generar imágenes más pequeñas, seguras y eficientes para despliegue.

Además, Docker Compose levanta automáticamente:

* PostgreSQL
* Aplicación Node.js

Las migraciones de Prisma se ejecutan automáticamente al iniciar el contenedor, por lo que no se requieren pasos manuales adicionales.

---

# Instalación y ejecución SIN Docker

## Requisitos previos

* Node.js
* npm
* PostgreSQL
* Git

## Clonar repositorio

```bash
git clone https://github.com/YaritzaCid/proyecto-mvc-examenfinal.git
```

## Ingresar al proyecto

```bash
cd proyecto-mvc-examenfinal
```

## Instalar dependencias

```bash
npm install
```

## Crear archivo .env

Tomar como referencia el archivo:

```txt
.env.example
```

## Ejecutar migraciones

```bash
npx prisma migrate dev
```

## Generar Prisma Client

```bash
npx prisma generate
```

## Ejecutar aplicación

```bash
npm run dev
```

## Abrir navegador

```txt
http://localhost:3000
```

---

# Instalación y ejecución CON Docker

## Requisitos

* Docker Desktop instalado y en ejecución.

## Levantar proyecto

```bash
docker compose up --build
```

Este comando:

* Levanta PostgreSQL.
* Levanta la aplicación Node.js.
* Ejecuta automáticamente las migraciones de Prisma.
* Deja la aplicación lista para utilizar.

## Verificar contenedores

```bash
docker ps
```

Deben aparecer:

```txt
dentplus_app
dentplus_postgres
```

## Abrir navegador

```txt
http://localhost:3000
```

---

# Variables de entorno

Archivo:

```txt
.env
```

Variables requeridas:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/dentplus_u3?schema=public"
SESSION_SECRET="dentplus-secret"
```

Como referencia para nuevos desarrolladores se incluye el archivo:

```txt
.env.example
```

---

# Estructura principal del proyecto

```txt
src/
 ├── controllers
 ├── middlewares
 ├── models
 ├── routes
 ├── schemas
 ├── types
 └── app.ts

views/
 ├── affiliates
 ├── auth
 └── layouts

prisma/
 ├── schema.prisma
 └── migrations
```

---

# Uso de Inteligencia Artificial

Durante el desarrollo se utilizó ChatGPT como herramienta de apoyo durante la realización de las 3 evaluaciones + examen final para:

* Comprender conceptos de autenticación y sesiones.
* Implementar validaciones utilizando Zod.
* Configurar Prisma ORM.
* Migrar desde SQLite a PostgreSQL.
* Implementar Docker y Docker Compose.
* Implementar Docker Multi-Stage Build.
* Resolver errores de TypeScript, Prisma y Docker.
* Mejorar la documentación del proyecto.

La herramienta fue utilizada como apoyo educativo y de aprendizaje, comprendiendo y validando cada una de las soluciones implementadas.

---

# Video demostrativo

El funcionamiento del sistema y explicación del proyecto se encuentra disponible en el siguiente enlace:

Video: https://youtu.be/P97IOFj-GV8


