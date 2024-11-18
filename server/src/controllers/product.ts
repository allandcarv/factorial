import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import {
  addProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../models/product';
import { getProductType, getProductTypes } from '../models/product-types';
import type { ProductTypeDTO } from '../types/product-type';
import type {
  NewProduct,
  Product,
  ProductDTO,
  UpdateProduct,
} from '../types/product';
import { internalError } from '../utils/internal-error';
import { resourceNotFound } from '../utils/resource-not-found';
import { badRequest } from '../utils/bad-request';
import { created } from '../utils/created';
import { success } from '../utils/success';
import { notFound } from '../utils/not-found';

export const getProductsController = async (_req: Request, res: Response) => {
  try {
    const products = await getProducts();
    const productTypes = await getProductTypes();

    const mappedProductTypes = new Map<string, ProductTypeDTO>();

    productTypes.forEach((productType) =>
      mappedProductTypes.set(productType.id, productType)
    );

    const result: Product[] = products.map((product) => {
      const productType = mappedProductTypes.get(product.product_type);

      return {
        description: product.description,
        id: product.id,
        productType: {
          id: productType?.id,
          title: productType?.title,
        },
        stock: product.stock,
        title: product.title,
      };
    });

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};

export const getProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await getProduct(id);

    if (!product) {
      resourceNotFound(res, 'Product not found');

      return;
    }

    const productType = await getProductType(product.product_type);

    const result: Product = {
      description: product.description,
      id: product.id,
      productType: {
        id: productType?.id,
        title: productType?.title,
      },
      stock: product.stock,
      title: product.title,
    };

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};

export const addProductController = async (req: Request, res: Response) => {
  try {
    const productType = await getProductType(req.body.productType);

    if (!productType) {
      badRequest(res, 'Product Type Not Found');
      return;
    }

    const newProduct: NewProduct = {
      title: req.body.title,
      productType: req.body.productType,
      description: req.body.description,
      stock: req.body.stock,
    };

    const result = await addProduct(newProduct);

    const product: Product = {
      id: result.id,
      title: result.title,
      productType: {
        id: productType.id,
        title: productType.title,
      },
      description: result.description,
      stock: result.stock,
    };

    created(res, product);
  } catch (err) {
    internalError(res);
  }
};

export const updateProductController = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const product = await getProduct(productId);

    if (!product) {
      notFound(res, 'Product Not Found');
      return;
    }

    let productType: ProductTypeDTO | undefined;

    if (req.body.productType) {
      productType = await getProductType(req.body.productType);

      if (!productType) {
        badRequest(res, 'Product Type Not Found');
        return;
      }
    }

    const newProduct: UpdateProduct = {
      id: req.params.id,
      title: req.body.title,
      productType: req.body.productType,
      description: req.body.description,
      stock: req.body.stock,
    };

    const updatedProduct = await updateProduct(newProduct);

    productType = await getProductType(updatedProduct.product_type);

    const result: Product = {
      id: updatedProduct.id,
      title: updatedProduct.title,
      productType: {
        id: productType?.id,
        title: productType?.title,
      },
      description: updatedProduct.description,
      stock: updatedProduct.stock,
    };

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
