import { Router } from 'express';

const rootRoute = Router();

rootRoute.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

export { rootRoute };
