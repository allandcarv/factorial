export interface ProductGroupDTO {
  id: string;
  title: string;
  description: string;
}

export type NewProductGroupDTO = Omit<ProductGroupDTO, 'id'>;
