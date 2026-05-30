# DentPlus Evolucionado - Unidad 3

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

* Models → acceso y lógica de datos
* Views → interfaces desarrolladas con Handlebars
* Controllers → coordinación entre vistas y modelos
* Routes → definición de endpoints
* Prisma → conexión con la base de datos PostgreSQL

---

# Funcionalidades

## Gestión de usuarios

* Registro de usuarios
* Inicio de sesión
* Cierre de sesión
* Contraseñas protegidas mediante bcryptjs

---

## Gestión de afiliados

* Crear afiliados
* Listar afiliados
* Ver detalle de afiliados
* Editar afiliados
* Eliminar afiliados

---

## Aislamiento de datos

Cada usuario puede visualizar y administrar únicamente sus propios afiliados.

El identificador del usuario autenticado se obtiene desde la sesión y nunca desde formularios enviados por el cliente.

---

## Validaciones con Zod

Se validan los formularios de:

* Registro de usuarios
* Creación de afiliados
* Edición de afiliados
* Simulación de descuentos

Las validaciones muestran errores inline y mantienen los datos ingresados por el usuario.

---

## Simulador de descuentos

Cada afiliado posee un tipo de membresía:

* Silver → 5%
* Gold → 10%
* Platinium → 20%

El sistema permite ingresar un monto de tratamiento y calcular automáticamente el precio final según el descuento correspondiente.

---

# Instalación y ejecución SIN Docker

## Requisitos previos

* Node.js
* npm
* PostgreSQL
* Git

---

## Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## Ingresar al proyecto

```bash
cd proyecto-mvc-u3
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

## Generar cliente Prisma

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

## Levantar contenedores

```bash
docker compose up --build
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

Durante el desarrollo se utilizó ChatGPT como herramienta de apoyo para:

* Comprender conceptos de autenticación y sesiones
* Implementar validaciones utilizando Zod
* Configurar Prisma ORM
* Migrar desde SQLite a PostgreSQL
* Implementar Docker y Docker Compose
* Resolver errores de TypeScript y Prisma

La herramienta fue utilizada como apoyo educativo.

---

# Video demostrativo

El funcionamiento del sistema y explicación del proyecto se encuentra disponible en el siguiente enlace:


