import type { FC, PropsWithChildren, TdHTMLAttributes } from 'react';

import styles from './Cell.module.css';

type TableCellProps = PropsWithChildren<TdHTMLAttributes<HTMLTableCellElement>>;

export const Cell: FC<TableCellProps> = ({ children, ...tableCellProps }) => {
  return (
    <td className={styles['table-cell']} {...tableCellProps}>
      {children}
    </td>
  );
};
