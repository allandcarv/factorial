import { body } from 'express-validator';

export const validateNewProductGroup = [
  body('title').notEmpty().isString().trim(),
  body('description').notEmpty().isString().trim(),
];
