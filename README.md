# Dashboard de Respuestas – Prueba Técnica

## Sobre el proyecto

Esta prueba técnica fue una experiencia muy entretenida y enriquecedora para mí, donde pude demostrar mis habilidades tanto en desarrollo frontend como backend utilizando tecnologías modernas.

Para el backend implementé una API REST con Express (Node.js), gestionando las respuestas en una única tabla que almacena toda la información (email, lenguaje, motivación y fecha). Aunque idealmente podría haberse separado la información de tecnologías en una tabla aparte para mayor normalización y escalabilidad, decidí optar por esta solución más directa para avanzar más rápido y cumplir con los tiempos.

En el frontend usé Next.js con TypeScript y Tailwind CSS para construir un dashboard responsivo que muestra estadísticas clave de las respuestas: total, distribución por lenguaje y los registros más recientes. Además, agregué una visualización gráfica tipo barras usando rechart, para darle más dinamismo y claridad a los datos.

A pesar de que hay varias mejoras posibles (como añadir autenticación, mejorar validaciones, o normalizar la base de datos), considero que esta versión cumple los objetivos de manera eficiente y es una buena base para futuros desarrollos.

## Tecnologías usadas

- Backend: Express (Node.js), base de datos SQL (puede ser SQLite, MySQL, PostgreSQL, según configuración)
- Frontend: Next.js (App Router), TypeScript, Tailwind CSS
- Gráficos: recharts

## Instalación y ejecución

### Backend

1. Navega a la carpeta backend:

   ```bash
   cd backend/

Instala las dependencias:

```npm install

Ejecuta el servidor:

```npm run nodemon
(O el comando que uses para levantar el servidor Express)

Frontend
Navega a la carpeta frontend:

```cd frontend/
Instala las dependencias:

```npm install
Ejecuta el proyecto:

```npm run dev

###Notas finales
Asegúrate de que el backend esté corriendo en http://localhost:3001 (o el puerto que uses) para que el frontend pueda consumir la API correctamente.

El proyecto podria mejorar con optimización de modelos y mejoras en la interfaz.

Disfruté mucho realizar esta prueba técnica y espero seguir aplicando y ampliando estos conocimientos en próximos proyectos.

