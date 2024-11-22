import { Suspense, type FC } from 'react';
import { useSearchParams } from 'react-router';

import { QUERY_PARAMS } from '../../shared/constants';
import { AllProducts, Loading, ProductsByGroup } from '../../components';

import styles from './Products.module.css';

const Products: FC = () => {
  const [searchParams] = useSearchParams();
  const groupId = searchParams.get(QUERY_PARAMS.Group);

  return (
    <>
      <h1 className={styles['products-title']}>Products Page</h1>
      <Suspense fallback={<Loading />}>
        {groupId ? <ProductsByGroup groupId={groupId} /> : <AllProducts />}
      </Suspense>
    </>
  );
};

export default Products;
