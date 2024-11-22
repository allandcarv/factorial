import type { FC } from 'react';

import type { Product } from '../../../types';

import styles from './ProductsList.module.css';
import { ProductItem } from '../ProductItem/ProductItem';

interface ProductsListProps {
  products: Product[];
}

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <ul className={styles['products-list']}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
