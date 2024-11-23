import type { FC, PropsWithChildren, HtmlHTMLAttributes } from 'react';

import styles from './Row.module.css';

type TableRowProps = PropsWithChildren<HtmlHTMLAttributes<HTMLTableRowElement>>;

export const Row: FC<TableRowProps> = ({
  children,
  className,
  ...tableRowProps
}) => {
  return (
    <tr
      className={`${styles['table-row']} ${className ? className : ''}`}
      {...tableRowProps}
    >
      {children}
    </tr>
  );
};

Row.displayName = 'Table.Row';
