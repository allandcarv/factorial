import type { FC, PropsWithChildren, HTMLAttributes } from 'react';

type TableBodyProps = PropsWithChildren<
  HTMLAttributes<HTMLTableSectionElement>
>;

export const Body: FC<TableBodyProps> = ({ children, ...tableBodyProps }) => {
  return <tbody {...tableBodyProps}>{children}</tbody>;
};

Body.displayName = 'Table.Body';
