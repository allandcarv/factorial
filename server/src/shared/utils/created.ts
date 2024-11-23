import { Response } from 'express';

/**
 * Returns the created message to the user
 * @param res - express Response
 * @param json - error message
 */
export const created = (res: Response, json: unknown) => {
  res.status(201).json(json);
};
