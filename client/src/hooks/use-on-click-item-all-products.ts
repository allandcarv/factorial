import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { fetchGroupByType } from '../services/api';
import { QUERY_PARAMS } from '../shared/constants';
import type { Product } from '../types';

export const useOnClickItemAllProducts = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const onClickItemHandler = async (product: Product) => {
    const productGroup = queryClient.fetchQuery({
      queryKey: ['type', product.productType.id, 'group'],
      queryFn: () => fetchGroupByType(product.productType.id),
    });

    navigate(`/products?${QUERY_PARAMS.Group}=${(await productGroup).id}`);
  };

  return {
    onClickItemHandler,
  };
};
