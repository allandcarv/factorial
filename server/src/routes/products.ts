import { Router } from 'express';
import { productGroupsController } from '../controllers/product-groups';

const productsRouter = Router();

const productGroupsRouter = Router();

productGroupsRouter.get('/groups', productGroupsController);

productsRouter.use('/products', productGroupsRouter);

export { productsRouter };
