import { body } from 'express-validator';

export const validateNewOrder = [
  body('user').notEmpty().isString().trim(),
  body('products').custom((products) => {
    if (!Array.isArray(products)) {
      return false;
    }

    if (products.length === 0) {
      return false;
    }

    return products.every((productId) => typeof productId === 'string');
  }),
];
