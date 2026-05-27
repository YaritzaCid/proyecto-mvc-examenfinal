# DentPlus MVC

Sistema web desarrollado para la gestión de afiliados de una clínica dental utilizando arquitectura MVC.

---

# Tecnologías utilizadas

- Node.js
- TypeScript
- Express
- Handlebars
- Prisma ORM
- SQLite
- Bootstrap 5

---

# Arquitectura MVC

El proyecto se encuentra organizado utilizando el patrón MVC:

- Models → acceso y lógica de datos
- Views → interfaces desarrolladas con Handlebars
- Controllers → coordinación entre vistas y modelos
- Routes → definición de endpoints
- Prisma → conexión con la base de datos SQLite

---

# Funcionalidades

## CRUD completo de afiliados

- Crear afiliados
- Listar afiliados
- Ver detalle de afiliados
- Editar afiliados
- Eliminar afiliados

---

## Simulador de descuentos

Cada afiliado posee un tipo de membresía:

- Silver → 5%
- Gold → 10%
- Platinium → 20%

El sistema permite ingresar un monto de tratamiento y calcular automáticamente el precio final según el descuento correspondiente.

---

# Instalación y ejecución del proyecto

## Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js
- npm
- Git

---

## 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Ingresar a la carpeta del proyecto

```bash
cd proyecto-mvc
```

---

## 3. Instalar dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias definidas en el archivo `package.json`.

---

## 4. Configurar base de datos Prisma

Ejecutar migraciones:

```bash
npx prisma migrate dev
```

Este comando:
- crea la base de datos SQLite
- genera las tablas
- aplica las migraciones necesarias

---

## 5. Ejecutar el proyecto

```bash
npm run dev
```

---

## 6. Abrir aplicación

Abrir en navegador:

```txt
http://localhost:3000
```

---

# Estructura principal del proyecto

```txt
src/
 ├── controllers
 ├── models
 ├── routes
 ├── prisma
 └── app.ts

views/
 ├── affiliates
 └── layouts

prisma/
 └── schema.prisma
```

# Base de datos

El proyecto utiliza SQLite mediante Prisma ORM.

Archivo principal:

```txt
dev.db
```

---

---

# Video demostrativo

El funcionamiento del sistema y explicación del proyecto se encuentra disponible en el siguiente enlace:

[Ver video en YouTube](https://youtu.be/eF6qDWzsh0s)

---

# Autor

Proyecto desarrollado por Yaritza Cid.