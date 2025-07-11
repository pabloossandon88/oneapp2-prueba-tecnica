# Frontend - Interfaz de Pruebas para Backend API

Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) para probar y consumir los endpoints del backend service.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: Versión 18.0.0 o superior
- **npm**: Versión 8.0.0 o superior (incluido con Node.js)

### Verificar las versiones instaladas:
```bash
node --version
npm --version
```

### Instalar Node.js (si no lo tienes):
- Descarga desde [nodejs.org](https://nodejs.org/)
- O usa un gestor de versiones como nvm:
```bash
# Instalar nvm (macOS/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instalar Node.js 18
nvm install 18
nvm use 18
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd "Prueba Técnica Andain/frontend"
```

### 2. Instalar dependencias
```bash
npm install
```

Este comando instalará todas las dependencias necesarias incluyendo:
- Next.js 14.2.30
- React 18.2.0
- TypeScript 5
- Tailwind CSS 3.4.0
- ESLint

### 3. Verificar la instalación
```bash
npm list --depth=0
```

## 🏃‍♂️ Ejecutar el Proyecto

### Servidor de Desarrollo
```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en [http://localhost:3000](http://localhost:3000).

### Otros comandos disponibles:
```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start

# Ejecutar linter
npm run lint
```

## 🔧 Configuración del Backend

**⚠️ Importante**: Antes de usar la interfaz, asegúrate de que el backend service esté ejecutándose.

### Requisitos del Backend:
- El backend debe estar ejecutándose en `http://localhost:4001`
- Los endpoints disponibles son:
  - `ANY | http://localhost:4001/dev/backend/{proxy*}`
  - `POST | http://localhost:4001/2015-03-31/functions/api/invocations`

### Iniciar el Backend:
```bash
# Navegar al directorio del backend
cd ../backend-service

# Instalar dependencias (si es la primera vez)
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 🎯 Características de la Interfaz

### 1. **Pruebas de API HTTP**
- Realizar peticiones GET, POST, PUT, DELETE
- Enviar datos JSON en el cuerpo de la petición
- Ver respuestas en tiempo real
- Prueba rápida de conexión

### 2. **Invocación Directa de Lambda**
- Invocar funciones Lambda directamente
- Configurar eventos personalizados
- Simular eventos HTTP completos
- Gestionar headers y parámetros

### 3. **Interfaz Responsive**
- Diseño adaptativo para desktop y móvil
- Componentes desarrollados con Tailwind CSS
- Interfaz intuitiva y fácil de usar

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página principal
│   │   └── globals.css        # Estilos globales
│   ├── components/            # Componentes React
│   │   ├── ApiTester.tsx      # Probador de API HTTP
│   │   └── LambdaInvoker.tsx  # Invocador de Lambda
│   └── services/              # Servicios y utilidades
│       └── api.ts             # Servicio de API
├── public/                    # Archivos estáticos
├── package.json              # Dependencias y scripts
├── tailwind.config.ts        # Configuración de Tailwind
├── next.config.js            # Configuración de Next.js
└── README.md                 # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React con App Router
- **React 18**: Biblioteca de interfaces de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Tailwind CSS**: Framework de CSS utility-first
- **ESLint**: Linter para mantener código limpio

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port 3000 already in use"
```bash
# Usar un puerto diferente
npm run dev -- -p 3001
```

### Error de conexión con el backend
1. Verifica que el backend esté ejecutándose en `http://localhost:4001`
2. Revisa la consola del navegador para errores CORS
3. Asegúrate de que no haya firewall bloqueando las conexiones

### Problemas con Node.js
```bash
# Cambiar a Node.js 18 si usas nvm
nvm use 18

# Verificar la versión
node --version
```

## 📚 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |

## 🔗 Enlaces Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Guía de TypeScript](https://www.typescriptlang.org/docs/)

## 👨‍💻 Desarrollo

Para contribuir al proyecto:

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios
3. Ejecuta las pruebas: `npm run lint`
4. Commit tus cambios: `git commit -m "Agregar nueva funcionalidad"`
5. Push a tu rama: `git push origin feature/nueva-funcionalidad`

---

**Nota**: Este proyecto está diseñado específicamente para probar y consumir los endpoints del backend service. Asegúrate de tener ambos servicios ejecutándose para una experiencia completa.