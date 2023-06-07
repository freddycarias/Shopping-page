export interface Product {
  id: string;
  color: string;
  description: string;
  images: {
    id: string;
    path: string;
    name: string;
  };
  name: string;
  price: number;
  stocked: boolean;
  productType: string;
}