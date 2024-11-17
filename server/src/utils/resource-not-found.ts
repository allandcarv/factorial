import { Response } from 'express';

/**
 * Returns the not found message to the user
 * @param res - express Response
 * @param message - error message
 */
export const resourceNotFound = (res: Response, message: string) => {
  res.status(404).json({ message });
};
