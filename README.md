# Prueba Técnica - Desarrollador Full Stack

## 📋 Descripción General

Esta prueba técnica evalúa tus habilidades para desarrollar una aplicación full stack completa que incluye frontend, backend y base de datos. Deberás crear un sistema de formularios con dashboard para visualizar las respuestas.

## 🎯 Objetivo

Crear un sistema completo que permita a los usuarios responder un cuestionario y visualizar estadísticas de las respuestas a través de un dashboard administrativo.

## 📝 Requerimientos Funcionales

### 1. **Formulario de Respuestas**

Debes crear un formulario que contenga **exactamente** las siguientes preguntas:

#### **Pregunta 1: Texto Libre (OPCIONAL)**
- **Pregunta**: "¿Qué te motivó a aplicar a esta posición?"
- **Tipo**: Campo de texto libre
- **Validación**: Opcional (puede quedar vacío)

#### **Pregunta 2: Selección Múltiple (OBLIGATORIA)**
- **Pregunta**: "¿Cuál es tu lenguaje de programación favorito?"
- **Tipo**: Selección múltiple (radio buttons o select)
- **Opciones**:
  - JavaScript
  - Python
  - Java
  - C#
  - Otro
- **Validación**: Obligatoria (debe seleccionar una opción)

#### **Campo de Identificación (OBLIGATORIO)**
- **Campo**: Correo electrónico
- **Validación**: 
  - Obligatorio
  - Formato de email válido
  - **Un usuario no puede enviar más de una respuesta** (validar por email)

### 2. **Dashboard de Estadísticas**

Crear una vista de dashboard que muestre:

#### **Componente 1: Contador de Respuestas**
- Mostrar el número total de respuestas almacenadas en la base de datos

#### **Componente 2: Últimos Usuarios**
- Lista de los últimos 5 usuarios que han respondido el formulario
- Mostrar: email y fecha/hora de respuesta
- **Funcionalidad adicional**: Al hacer clic en cualquier usuario, mostrar su respuesta a la pregunta de texto

#### **Componente 3: Estadísticas de Selección Múltiple**
- Gráfico o tabla que muestre cuántas veces se ha seleccionado cada opción
- Ejemplo:
  - JavaScript: 15 respuestas
  - Python: 8 respuestas
  - Java: 3 respuestas
  - C#: 2 respuestas
  - Otro: 1 respuesta

## 🏗️ Arquitectura Técnica

### **Frontend**
- **Tecnología**: Next.js (ya configurado)
- **Ubicación**: Carpeta `frontend/`
- **Funcionalidades**:
  - Página del formulario
  - Página del dashboard
  - Navegación entre ambas páginas
  - Validaciones en tiempo real
  - Comunicación con el backend via API

### **Backend**
- **Tecnología**: Node.js con Express (ya configurado)
- **Ubicación**: Carpeta `backend-service/`
- **Endpoints requeridos**:
  ```
  POST /api/responses          # Enviar nueva respuesta
  GET  /api/responses/count    # Obtener total de respuestas
  GET  /api/responses/recent   # Obtener últimas 5 respuestas
  GET  /api/responses/stats    # Estadísticas de selección múltiple
  GET  /api/responses/:email   # Obtener respuesta específica por email
  ```

### **Base de Datos**
- **Tecnología**: A tu elección (PostgreSQL, MySQL, MongoDB, SQLite, etc.)

## ✅ Criterios de Evaluación

### **Funcionalidad**
- ✅ El formulario funciona correctamente
- ✅ Las validaciones se implementan según especificaciones
- ✅ No se permiten respuestas duplicadas por email
- ✅ El dashboard muestra toda la información requerida
- ✅ La interacción entre componentes funciona

### **Código y Arquitectura**
- ✅ Código limpio y bien estructurado
- ✅ Separación correcta entre frontend y backend
- ✅ Manejo adecuado de errores
- ✅ Uso correcto de las tecnologías proporcionadas

### **Base de Datos**
- ✅ Diseño apropiado de la base de datos
- ✅ Queries eficientes
- ✅ Integridad de datos garantizada

### **Extras**
- ✅ Interfaz de usuario atractiva
- ✅ Responsive design
- ✅ Manejo de estados de carga
- ✅ Documentación adicional

## 🚀 Instrucciones de Desarrollo

### **1. Configuración Inicial**
```bash
# Instalar dependencias del frontend
cd frontend
npm install

# Instalar dependencias del backend
cd ../backend-service
npm install
```

### **2. Base de Datos**
- Configura la base de datos de tu elección
- Crea las tablas necesarias
- Configura la conexión en el backend

### **3. Desarrollo Backend**
- Implementa los endpoints requeridos
- Configura middleware para CORS
- Implementa validaciones
- Maneja errores apropiadamente

### **4. Desarrollo Frontend**
- Crea la página del formulario
- Crea la página del dashboard
- Implementa la navegación
- Conecta con los endpoints del backend

### **5. Pruebas**
- Prueba el flujo completo
- Verifica todas las validaciones
- Asegúrate de que el dashboard funcione correctamente

## 📦 Entregables

### **Código**
- Todo el código fuente en las carpetas correspondientes
- Archivo de configuración de base de datos
- Instrucciones de instalación y configuración

### **Documentación**
- README actualizado con instrucciones específicas de tu implementación
- Documentación de endpoints de API
- Esquema de base de datos

### **Demo**
- Aplicación funcionando completamente
- Datos de prueba en la base de datos
- Screenshots demostrativos (opcional)

## 🔧 Estructura de Archivos Recomendada

```
proyecto/
├── frontend/                 # Ya existe
│   ├── src/
│   │   ├── app/
│   │   │   ├── form/        # Nueva: Página del formulario
│   │   │   ├── dashboard/   # Nueva: Página del dashboard
│   │   │   └── page.tsx     # Modificar: Página de inicio
│   │   ├── components/      # Nuevos componentes
│   │   └── services/        # Servicios de API
├── backend-service/         # Ya existe
│   ├── src/
│   │   ├── routes/          # Nuevas rutas de API
│   │   ├── models/          # Modelos de base de datos
│   │   └── handlers/        # Lógica de negocio
└── database/                # Nueva: Scripts y configuración
    ├── migrations/
    └── seeds/
```

## ❓ Preguntas Frecuentes

**Q: ¿Puedo usar librerías adicionales?**
A: Sí, puedes agregar las librerías que consideres necesarias.

**Q: ¿Qué pasa si no termino en el tiempo estimado?**
A: Entrega lo que hayas completado y documenta qué faltaría implementar.

**Q: ¿Puedo cambiar las tecnologías base?**
A: Debes usar Next.js para frontend y Node.js para backend. La base de datos es libre.

**Q: ¿Necesito implementar autenticación?**
A: No, solo validación por email para evitar respuestas duplicadas.

---

## 🎉 ¡Buena Suerte!

Esta prueba está diseñada para evaluar tus habilidades técnicas de manera integral. Tómate tu tiempo para entender bien los requerimientos antes de comenzar a codificar.

**Contacto**: Si tienes dudas sobre los requerimientos, no dudes en preguntar.
