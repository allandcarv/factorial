import type { FC } from 'react';

import type { Product } from '../../../shared/types';

import styles from './ProductItem.module.css';
import { useAppStore } from '../../../shared/store/hooks';
import { useOnClickProduct } from '../../../shared/hooks';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { onClickItemHandler } = useOnClickProduct();
  const restrictedProducts = useAppStore((state) => state.restrictedProducts);
  const selectedProducts = useAppStore((state) => state.selectedProducts);

  const isProductBlocked = selectedProducts.some((selectedProduct) => {
    const isSameProduct = selectedProduct.id === product.id;

    if (isSameProduct) {
      return false;
    }

    const isSameProductType =
      selectedProduct.productType.id === product.productType.id;

    return isSameProductType;
  });

  const isProductRestricted = restrictedProducts.has(product.id);

  const isProductDisabled = isProductBlocked || isProductRestricted;

  return (
    <li
      className={`${styles['product-item']} ${
        isProductDisabled ? styles['product-item-disabled'] : ''
      }`}
      onClick={() => !isProductDisabled && onClickItemHandler(product)}
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
