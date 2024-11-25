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

    return products.every((product) => {
      const hasValidId = product.id && typeof product.id === 'string';
      const hasValidTitle = product.title && typeof product.title === 'string';
      const hasValidPrice = product.price && typeof product.price === 'number';

      return hasValidId && hasValidPrice && hasValidTitle;
    });
  }),
];
