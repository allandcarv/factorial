import { ordersRouter } from './orders';
import { productGroupsRouter } from './product-groups';
import { productRestrictionsRouter } from './product-restrictions';
import { productTypesRouter } from './product-types';
import { productsRouter } from './products';

export const routes = [
  ordersRouter,
  productGroupsRouter,
  productTypesRouter,
  productRestrictionsRouter,
  productsRouter,
];
