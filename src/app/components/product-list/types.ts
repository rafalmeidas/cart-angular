import { Product } from 'src/app/models/product.model';

export interface ProductView extends Product {
  amount: number;
}
