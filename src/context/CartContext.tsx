import React, { createContext, ReactNode, useContext, useState } from 'react'

// INTERFACE
import { CartContextType, CartItem, Product } from './interface';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [modalOpened, setModalOpened] = useState(false);

    const addToCart = (product: Product, quantity: number) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.product.id === product.id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: quantity }
                        : item
                );
            } else {
                return [...prevCart, { product, quantity }];
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        closeModal();
    };

    const openModal = () => {
        setModalOpened(true);
    };

    const closeModal = () => {  
        setModalOpened(false);
    };

    return (
        <CartContext.Provider value={{ cart, modalOpened, openModal, closeModal, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};