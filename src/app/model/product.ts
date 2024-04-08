import { Supplier } from './supplier';

export class Product {
  id: number;
  productName: string;
  productPrice: number;
  productColor: string;
  availableQuantity: number;
  supplier: Supplier;
}
