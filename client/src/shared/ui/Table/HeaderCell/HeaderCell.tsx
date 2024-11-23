import type { FC, PropsWithChildren, ThHTMLAttributes } from 'react';

import styles from './HeaderCell.module.css';

type TableHeaderCellProps = PropsWithChildren<
  ThHTMLAttributes<HTMLTableCellElement>
>;

export const HeaderCell: FC<TableHeaderCellProps> = ({
  children,
  className,
  ...tableHeaderCellProps
}) => {
  return (
    <th
      className={`${styles['table-header-cell']} ${className ? className : ''}`}
      {...tableHeaderCellProps}
    >
      {children}
    </th>
  );
};

HeaderCell.displayName = 'Table.HeaderCell';
