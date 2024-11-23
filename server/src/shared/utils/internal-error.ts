import { Response } from 'express';

/**
 * Returns the default error message to the user
 * @param res - express Response
 */
export const internalError = (res: Response) => {
  res.status(500).json({ message: 'Internal Server Error' });
};
