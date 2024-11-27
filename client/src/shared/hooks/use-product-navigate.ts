import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import type { Product } from '../types';
import { fetchGroupByType } from '../services/api';
import { QUERY_PARAMS } from '../constants';

export const useProductNavigate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const navigateToProductsPage = async (product: Product) => {
    const productGroup = await queryClient.fetchQuery({
      queryKey: ['type', product.productType.id, 'group'],
      queryFn: () => fetchGroupByType(product.productType.id),
    });

    navigate(`/products?${QUERY_PARAMS.Group}=${productGroup.id}`);
  };

  return { navigateToProductsPage };
};
