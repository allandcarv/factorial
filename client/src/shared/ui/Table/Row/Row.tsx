import type { FC, PropsWithChildren, HtmlHTMLAttributes } from 'react';

type TableRowProps = PropsWithChildren<HtmlHTMLAttributes<HTMLTableRowElement>>;

export const Row: FC<TableRowProps> = ({ children, ...tableRowProps }) => {
  return <tr {...tableRowProps}>{children}</tr>;
};

Row.displayName = 'Table.Row';
