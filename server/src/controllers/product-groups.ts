import { Request, Response } from 'express';

import {
  addProductGroup,
  getProductGroup,
  getProductGroups,
} from '../models/product-groups';
import { internalErrorHandler } from '../utils/internal-error';
import { resourceNotFound } from '../utils/resource-not-found';
import { validationResult } from 'express-validator';
import type { NewProductGroupDTO } from '../types/product-group';

export const productGroupsController = async (_req: Request, res: Response) => {
  try {
    const productGroups = await getProductGroups();

    res.status(200).json(productGroups);
  } catch (err) {
    internalErrorHandler(res);
  }
};

export const productGroupController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const productGroup = await getProductGroup(id);

    if (productGroup) {
      res.status(200).json(productGroup);
    } else {
      resourceNotFound(res, 'Product Group Not Found');
    }
  } catch (err) {
    internalErrorHandler(res);
  }
};

export const addProductGroupController = async (
  req: Request,
  res: Response
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }

    const newProductGroup: NewProductGroupDTO = {
      description: req.body.description,
      title: req.body.title,
    };

    const result = await addProductGroup(newProductGroup);

    res.status(201).json(result);
  } catch (err) {
    internalErrorHandler(res);
  }
};
