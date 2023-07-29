export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Roberto Carlos',
    price: 65,
    description: 'Disc 80s years'
  },
  {
    id: 2,
    name: 'Blink 182',
    price: 182,
    description: 'Disc 90s years'
  },
  {
    id: 3,
    name: 'Michael Jackson',
    price: 110,
    description: 'Disc 80s years'
  }
];
