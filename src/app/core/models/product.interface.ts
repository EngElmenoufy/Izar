export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  stock_quantity: number;
  category: string;
  img: string[];
  discount?: number;
  condition: string;
  sellerId: string;
  Brand: string;
  allowReturn: boolean;
  colors: any[];
  size: any[];
  isNegotiable: boolean;
  slug: string;
  yourEarn: number;
  averageRate: number;
  totalReviews: number;
}
