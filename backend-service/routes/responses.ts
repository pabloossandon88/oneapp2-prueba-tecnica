import express, { Request, Response, Router, NextFunction } from 'express';
import { initDB } from '../db/db';
import validator from 'validator';
import * as handlers from '../handlers/responses';

import { body, validationResult } from 'express-validator';

const router: Router = express.Router();

// GET de prueba
router.get('/ping', 
  (req, res) => {
    res.send('Ruta /api/responses/ping funcionando ✅');
  }
);


router.post('/',
  [
    body('email').isEmail().withMessage('Email inválido'),
  ],
  (req: Request, res: Response, next: NextFunction)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }, 
  handlers.createResponse
);

router.get('/count', handlers.getCount);
router.get('/recent', handlers.getRecent);
router.get('/stats', handlers.getStats);
router.get('/:email', handlers.getByEmail);

export default router;
