export interface Props {
    product: Product
}

export type Product = {
    name: string;
    category: string
    price: number;
    image: Image
    id: number
}

export type Image = {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string; 
}