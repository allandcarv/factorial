import { Response } from 'express';

/**
 * Returns the no content message to the user
 * @param res - express Response
 */
export const noContent = (res: Response) => {
  res.status(204).send();
};
