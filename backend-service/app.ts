// app.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import responsesRoutes from './routes/responses';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
  express.json()
);

app.use('/api/responses', responsesRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error inesperado:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

export default app;
