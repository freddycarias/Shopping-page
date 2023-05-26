import { Images } from "./image.models";
import { ProductCategory } from "./productCategory.models";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory[];
  description: string;
  price: number;
  stocked: boolean;
  color: string;
  images: Images[];
}
