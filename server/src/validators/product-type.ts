import { body } from 'express-validator';

export const validateNewProductType = [
  body('title').notEmpty().trim(),
  body('description').notEmpty().trim(),
  body('productGroup').notEmpty().trim(),
];
