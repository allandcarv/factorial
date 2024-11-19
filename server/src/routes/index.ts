import { productGroupsRouter } from './product-group';
import { productRestrictionsRouter } from './product-restrictions';
import { productTypesRouter } from './product-type';
import { productsRouter } from './products';

export const routes = [
  productGroupsRouter,
  productTypesRouter,
  productRestrictionsRouter,
  productsRouter,
];
