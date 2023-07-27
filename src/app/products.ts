export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Roberto Calos',
    price: 65,
    description: 'Disco dos anos 80'
  },
  {
    id: 2,
    name: 'Blink 182',
    price: 182,
    description: 'Disco dos anos 90'
  },
  {
    id: 3,
    name: 'Michael Jackson',
    price: 110,
    description: 'Disco dos anos 80'
  }
];
