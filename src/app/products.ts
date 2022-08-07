export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    quanity:number;
    totalprice: number;
    
}

export class Cart {
    constructor (
      public item: Product,
      public quantity: number,
      public total: number
      ) {}
  }

export const products = [
    {
        id: 1,
        name: 'iPhone 13 mini',
        price: 25900,
        description: 'จอภาพขนาด 5.4 นิ้ว',
        quanity:1,
        totalprice: 0
        
    },
    {
        id: 2,
        name: 'iPhone 13',
        price: 29900,
        description: 'จอภาพขนาด 6.5 นิ้ว',
        quanity:1,
        totalprice: 0
    },
    {
        id: 3,
        name: 'iPhone 13 Pro',
        price: 38900,
        description: 'จอภาพขนาด 5.1 นิ้ว',
        quanity:1,
        totalprice: 0
    },
    {
        id: 4,
        name: 'iPhone 13 Pro MAX',
        price: 42900,
        description: 'จอภาพขนาด 6.1 นิ้ว',
        quanity:1,
        totalprice: 0
    }
];
