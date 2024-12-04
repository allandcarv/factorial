import { Request, Response } from 'express';

export const notFounResponse = (req: Request, res: Response) => {
  res.status(404).json({ message: `Cannot ${req.method} ${req.path}` });
};
