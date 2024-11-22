import type { FC } from 'react';

import type { Product } from '../../../shared/types';
import { useSelectedProducts } from '../../../shared/store/hooks/use-selected-products';

import styles from './ProductItem.module.css';
import { useOnClickProduct } from '../../../shared/hooks';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const selectedProducts = useSelectedProducts(
    (state) => state.selectedProducts
  );
  const { onClickItemHandler } = useOnClickProduct();

  const isProductBlocked = selectedProducts.some(
    (selectedProduct) =>
      selectedProduct.id !== product.id &&
      selectedProduct.productType.id === product.productType.id
  );

  return (
    <li
      className={`${styles['product-item']} ${
        isProductBlocked ? styles['product-item-blocked'] : ''
      }`}
      onClick={() => !isProductBlocked && onClickItemHandler(product)}
    >
      <section className={styles['product-section']}>
        <img
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
          className={styles['product-img']}
        />
      </section>
      <section className={styles['product-section']}>
        <p className={styles['product-title']}>{product.title}</p>
        <strong>
          {Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
          }).format(product.price)}
        </strong>
      </section>
    </li>
  );
};
