import type { FC } from 'react';

import { ProductsList } from './ProductsList/ProductsList';
import { useProducts } from '../../shared/hooks';
import { useAppStore } from '../../shared/store/hooks';
import { Loading } from '../Loading/Loading';
import { ErrorBody } from '../ErrorBody/ErrorBody';

export const AllProducts: FC = () => {
  const { products } = useProducts();

  const isError = useAppStore((store) => store.isError);
  const isLoading = useAppStore((store) => store.isLoading);

  if (isError) {
    return <ErrorBody />;
  }

  return (
    <>
      {isLoading && <Loading />}
      <ProductsList products={products} />
    </>
  );
};
