import { Request, Response, NextFunction } from 'express';
import { ResponseModel, ResponseRecord } from '../models/responses';

export const createResponse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, motivation, language } = req.body;

    if (!email || !language) {
      return res.status(400).json({ error: 'Email y lenguaje son requeridos' });
    }

    const newResponse: ResponseRecord = {
      email,
      motivation,
      language,
    };

    await ResponseModel.create(newResponse);

    res.status(201).json({ message: 'Respuesta creada correctamente' });
  } catch (err) {
    next(err);
  }
};

export const getCount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const count = await ResponseModel.count();
    res.json({ count });
  } catch (err) {
    next(err);
  }
};

export const getRecent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recent = await ResponseModel.recent();
    res.json({ recent });
  } catch (err) {
    next(err);
  }
};

export const getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stats = await ResponseModel.stats();
    res.json({ stats });
  } catch (err) {
    next(err);
  }
};

export const getByEmail = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.params.email;
    const response = await ResponseModel.findByEmail(email);

    if (!response) {
      return res.status(404).json({ error: 'No se encontró una respuesta con ese email' });
    }

    res.json({ response });
  } catch (err) {
    next(err);
  }
};
