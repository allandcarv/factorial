import type { FC } from 'react';

import { Table } from '../../shared/ui';
import type { Product } from '../../shared/types';
import { formatCurrency } from '../../shared/utils';

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
                {formatCurrency(product.price)}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
      <Table.Footer>
        <Table.Row className={styles['table-footer-row']}>
          <Table.Cell colSpan={2}>
            <strong>Total: {formatCurrency(total)}</strong>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
