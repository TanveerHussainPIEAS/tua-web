export interface Product {
    id : number | null;
    typeId: number;
    name: string;
    code: string;
    details: string;
    productImages : ProductImage[] ;
  }

  export interface ProductImage {
    id : number | null;
    productId: number;
    name: string | null;
    url: string| null;
    details: string| null;
  }
