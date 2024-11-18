import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import {
  addProductGroup,
  getProductGroup,
  getProductGroups,
  updateProductGroup,
} from '../models/product-groups';
import { internalError } from '../utils/internal-error';
import { resourceNotFound } from '../utils/resource-not-found';
import type {
  NewProductGroup,
  UpdateProductGroup,
} from '../types/product-group';
import { badRequest } from '../utils/bad-request';
import { created } from '../utils/created';
import { success } from '../utils/success';

export const getProductGroupsController = async (
  _req: Request,
  res: Response
) => {
  try {
    const productGroups = await getProductGroups();

    success(res, productGroups);
  } catch (err) {
    internalError(res);
  }
};

export const getProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id;

    const productGroup = await getProductGroup(id);

    if (productGroup) {
      success(res, productGroup);
    } else {
      resourceNotFound(res, 'Product Group Not Found');
    }
  } catch (err) {
    internalError(res);
  }
};

export const addProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      badRequest(res, 'All fields are required');
      return;
    }

    const newProductGroup: NewProductGroup = {
      description: req.body.description,
      title: req.body.title,
    };

    const result = await addProductGroup(newProductGroup);

    created(res, result);
  } catch (err) {
    internalError(res);
  }
};

export const updateProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      badRequest(res, 'All fields are required');
      return;
    }

    const productGroup = await getProductGroup(req.params.id);

    if (!productGroup) {
      badRequest(res, 'Product Group Not Found');
      return;
    }

    const updatedProductGroup: UpdateProductGroup = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
    };

    const result = await updateProductGroup(updatedProductGroup);

    success(res, result);
  } catch (err) {
    internalError(res);
  }
};
