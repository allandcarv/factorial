import { Response } from 'express';

/**
 * Returns the not found message to the user
 * @param res - express Response
 */
export const resourceNotFound = (res: Response, message: string) => {
  res.status(404).json({ message });
};
