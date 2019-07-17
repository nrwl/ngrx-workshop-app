export interface Message {
  message: string;
}

export interface ShippingMethod {
  type: string;
  price: number;
}

export interface Product {
  productId: string;
  name: string;
  price: number;
  description: string;
}
