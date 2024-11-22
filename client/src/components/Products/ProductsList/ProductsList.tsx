import type { FC } from 'react';

import type { Product } from '../../../types';
import { ProductItem } from '../ProductItem/ProductItem';

import styles from './ProductsList.module.css';

interface ProductsListProps {
  products: Product[];
  onClickItem: (product: Product) => void;
}

export const ProductsList: FC<ProductsListProps> = ({
  products,
  onClickItem,
}) => {
  return (
    <ul className={styles['products-list']}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onClickItem={() => onClickItem(product)}
        />
      ))}
    </ul>
  );
};
