import { body } from 'express-validator';

export const validateNewProductRestriction = [
  body('sourceProduct').notEmpty().isString().trim(),
  body('restrictedProduct').notEmpty().isString().trim(),
];
