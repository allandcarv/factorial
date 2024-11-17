import { body } from 'express-validator';

export const validateNewProductType = [
  body('title').notEmpty().isString().trim(),
  body('description').notEmpty().isString().trim(),
  body('productGroup').notEmpty().isString().trim(),
];
