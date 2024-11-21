import { body } from 'express-validator';

export const validateNewProduct = [
  body('title').notEmpty().isString().trim(),
  body('description').notEmpty().isString().trim(),
  body('price')
    .notEmpty()
    .custom((price) => typeof price === 'number'),
  body('productType').notEmpty().isString().trim(),
  body('stock')
    .notEmpty()
    .custom((stock) => typeof stock === 'boolean'),
];

export const validateUpdateProduct = [
  body('title').optional().isString().trim(),
  body('description').optional().isString().trim(),
  body('price')
    .optional()
    .custom((price) => typeof price === 'number'),
  body('productType').optional().isString().trim(),
  body('stock')
    .optional()
    .custom((stock) => typeof stock === 'boolean'),
];
