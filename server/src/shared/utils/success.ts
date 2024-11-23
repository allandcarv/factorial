import { Response } from 'express';

/**
 * Returns the success message to the user
 * @param res - express Response
 * @param json - error message
 */
export const success = (res: Response, json: unknown) => {
  res.status(200).json(json);
};
