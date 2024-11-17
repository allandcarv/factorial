import { body } from 'express-validator';

export const validateNewProductGroup = [
  body('title').notEmpty().isString().trim(),
  body('description').notEmpty().isString().trim(),
];

export const validateUpdateProductGroup = [
  body('title').optional().isString().trim(),
  body('description').optional().isString().trim(),
];
