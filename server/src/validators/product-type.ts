import { body } from 'express-validator';

export const validateNewProductType = [
  body('title').notEmpty().isString().trim(),
  body('description').notEmpty().isString().trim(),
  body('productGroup').notEmpty().isString().trim(),
];

export const validateUpdateProductType = [
  body('title').optional().isString().trim(),
  body('productGroup').optional().isString().trim(),
  body('description').optional().isString().trim(),
];
