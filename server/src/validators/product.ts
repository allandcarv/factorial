import { body } from 'express-validator';

export const validateNewProduct = [
  body('title').notEmpty().isString().trim(),
  body('description').notEmpty().isString().trim(),
  body('productType').notEmpty().isString().trim(),
  body('stock')
    .notEmpty()
    .custom((stock) => typeof stock === 'boolean'),
];
