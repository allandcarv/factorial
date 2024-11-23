export interface ProductGroupDTO {
  id: string;
  title: string;
  description: string;
}

export type NewProductGroup = Omit<ProductGroupDTO, 'id'>;

export interface UpdateProductGroup
  extends Partial<Omit<ProductGroupDTO, 'id'>> {
  id: string;
}
