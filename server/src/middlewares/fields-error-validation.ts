import type { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { badRequest } from '../shared/utils';

export const fieldsErrorValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    badRequest(res, 'All fields are required');
  }
};
