import { useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router';

import { QUERY_PARAMS } from '../constants';
import { fetchGroupByType } from '../services/api';
import type { Product } from '../types';
import { useSelectedProducts } from '../store/hooks/use-selected-products';

export const useOnClickProduct = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const queryClient = useQueryClient();

  const { addProduct, removeProduct, selectedProducts } = useSelectedProducts();

  const onClickItemHandler = async (product: Product) => {
    if (!pathname.includes('products')) {
      const productGroup = queryClient.fetchQuery({
        queryKey: ['type', product.productType.id, 'group'],
        queryFn: () => fetchGroupByType(product.productType.id),
      });

      navigate(`/products?${QUERY_PARAMS.Group}=${(await productGroup).id}`);
    }

    const isProductSelected = selectedProducts.some(
      (selectedProduct) => selectedProduct.id === product.id
    );

    if (isProductSelected) {
      removeProduct(product.id);
    } else {
      addProduct(product);
    }
  };

  return {
    onClickItemHandler,
  };
};
