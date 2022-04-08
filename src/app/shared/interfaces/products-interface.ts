export interface Product {
  id: number;
  stock?: number;
  image: string;
  description: string;
  type: 'electronics' | 'clothes' | 'technology' | 'other';
  price: number;
  buyQuantity?: number;
  boughtAt?: string;
}
