import type { FC } from 'react';

import { Table } from '../../shared/ui';
import type { Product } from '../../shared/types';

import styles from './CheckoutTable.module.css';

interface CheckoutTableProps {
  products: Product[];
}

export const CheckoutTable: FC<CheckoutTableProps> = ({ products }) => {
  let total = 0;

  return (
    <Table>
      <Table.Body>
        {products.map((product) => {
          total += product.price;

          return (
            <Table.Row key={product.id}>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell className={styles['table-value-cell']}>
                {Intl.NumberFormat('es-ES', {
                  style: 'currency',
                  currency: 'EUR',
                }).format(product.price)}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
      <Table.Footer>
        <Table.Row className={styles['table-footer-row']}>
          <Table.Cell colSpan={2}>
            <strong>
              {' '}
              Total:{' '}
              {Intl.NumberFormat('es-ES', {
                style: 'currency',
                currency: 'EUR',
              }).format(total)}
            </strong>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
