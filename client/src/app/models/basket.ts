import { ReactNode } from "react";

export interface BasketItem {
    id: number;
    buyerId: string;
    items: BasketItem[];
  }
  
  export interface Basket {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    buyerId: ReactNode;
    productId: number;
    name: string;
    price: number;
    picture: string;
    brand: string;
    type: string;
    quantity: number;
    pictureUrl: string;
  }