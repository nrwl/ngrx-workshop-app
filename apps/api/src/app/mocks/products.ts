import { Product } from '@ngrx-workshop-app/api-interface';

export const mockProducts: Product[] = [
  {
    productId: '1',
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    productId: '2',
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    productId: '3',
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];
