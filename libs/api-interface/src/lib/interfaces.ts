export interface Message {
  message: string;
}

export interface ShippingMethod {
  type: string;
  price: number;
}

export interface Product {
  productId: number;
  name: string;
  price: number;
  description: string;
}
