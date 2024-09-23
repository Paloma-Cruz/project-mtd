export type Product = {
    id: number
    name: string
    price: number
    image: Image
}

export type Image = {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string; 
}

export type CartItem = {
    product: Product
    quantity: number
}

export interface CartContextType {
    cart: CartItem[]
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (id: number) => void;
    openModal: () => void;
    closeModal: () => void;
    clearCart: () => void;
    modalOpened: boolean
}