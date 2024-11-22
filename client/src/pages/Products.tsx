import { Suspense, type FC } from 'react';
import { useSearchParams } from 'react-router';

import { QUERY_PARAMS } from '../shared/constants';
import { AllProducts, Loading, ProductsByGroup } from '../components';

const Products: FC = () => {
  const [searchParams] = useSearchParams();
  const groupId = searchParams.get(QUERY_PARAMS.Group);

  return (
    <>
      <h2>Products Page</h2>
      <Suspense fallback={<Loading />}>
        {groupId ? <ProductsByGroup groupId={groupId} /> : <AllProducts />}
      </Suspense>
    </>
  );
};

export default Products;
