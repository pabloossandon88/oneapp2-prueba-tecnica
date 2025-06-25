# Servicio Backend Boilerplate

Este servicio es un backend serverless basado en Express.js, diseñado para ejecutarse en AWS Lambda y localmente usando Serverless Framework.

## Requisitos previos

- Node.js 18.x (usa nvm y el archivo `.nvmrc` para seleccionar la versión correcta)
- npm >= 9
- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/)
- Acceso a AWS CLI (solo para despliegue en la nube)

## Instalación

1. Clona el repositorio y navega a la carpeta del servicio:

   ```sh
   cd "Prueba Técnica Andain/backend-service"
   ```

2. Instala la versión correcta de Node.js:

   ```sh
   nvm install
   nvm use
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

## Ejecución en ambiente de desarrollo

1. Compila el proyecto y ejecuta el entorno offline:

   ```sh
   npm run dev
   ```

2. El servicio estará disponible en:
   - http://localhost:4001/dev/backend/
   - http://localhost:4001/dev/backend/endpoint1
   - http://localhost:4001/dev/backend/endpoint2

## Probar los endpoints

Puedes probar los endpoints usando `curl`:

```sh
curl -i http://localhost:4001/dev/backend/
curl -i http://localhost:4001/dev/backend/endpoint1
curl -i http://localhost:4001/dev/backend/endpoint2
```

## Variables de entorno

- `BASE_PATH`: Define el path base del servicio. Por defecto es el nombre del servicio.

## Notas

- El runtime configurado para AWS Lambda es `nodejs18.x`.
- Para cualquier error relacionado con versiones de Node.js, asegúrate de usar la versión especificada en `.nvmrc`.
