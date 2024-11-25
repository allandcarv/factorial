import type { Request, Response, NextFunction } from 'express';

import { internalError, notFound } from '../../shared/utils';
import { getUser } from '../../models/user';

export const userIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUser(req.params.id);

    if (!user) {
      notFound(res, 'User Not Found');
    } else {
      next();
    }
  } catch (err) {
    internalError(res);
  }
};
