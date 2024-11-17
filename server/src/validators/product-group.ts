import { body } from 'express-validator';

export const validateNewProductGroup = [
  body('title').notEmpty().trim(),
  body('description').notEmpty().trim(),
];
