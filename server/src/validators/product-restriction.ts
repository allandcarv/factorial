import { body } from 'express-validator';

export const validateNewProductRestriction = [
  body('productGroup').notEmpty().isString().trim(),
  body('sourceProduct').notEmpty().isString().trim(),
  body('restrictedType').notEmpty().isString().trim(),
  body('restrictedProduct').notEmpty().isString().trim(),
];

export const validateUpdateProductRestriction = [
  body('productGroup').optional().isString().trim(),
  body('sourceProduct').optional().isString().trim(),
  body('restrictedType').optional().isString().trim(),
  body('restrictedProduct').optional().isString().trim(),
];
