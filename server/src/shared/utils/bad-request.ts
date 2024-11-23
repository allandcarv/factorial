import { Response } from 'express';

/**
 * Returns the bad request message to the user
 * @param res - express Response
 * @param message - error message
 */
export const badRequest = (res: Response, message: string) => {
  res.status(400).json({ message });
};
