import { Request, Response, NextFunction } from 'express';

interface ErrorResponseProps extends Error {
  status?: number;
}

export const errorResponse = (
  err: ErrorResponseProps,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(err.status || 500).json({ message: err.message });
};
