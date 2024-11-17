import { body } from 'express-validator';

export const validateNewProductGroup = [
  body('title', 'Required Field').notEmpty().trim(),
  body('description', 'Required Field').notEmpty().trim(),
];
