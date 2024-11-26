export type ProductType = 'product' | 'service' | 'subscription';

export interface ProductI {
  id: number;
  name: string;
  description: string;
  productType: ProductType;
  price: number;
  sectionId: number;
  order: number;
  hidden: boolean;
}