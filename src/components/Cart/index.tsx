import React, { useEffect, useState } from 'react';

// STYLES
import style from './style.module.scss';

// ICONS
import Illustration from '/assets/images/illustration-empty-cart.svg';
import RemoveItem from '/assets/images/icon-remove-item.svg';
import CarbonNeutral from '/assets/images/icon-carbon-neutral.svg';

// CONTEXT
import { useCart } from '../../context/CartContext';


const Cart: React.FC = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    const { cart, removeFromCart, openModal } = useCart();
    const [valueTotal, setValueTotal] = useState(0);

    useEffect(() => {
        if (cart.length > 0) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }

        let total = 0;
        cart.forEach((itemCart: any) => {
            const pricePerProduct = (itemCart.product.price * itemCart.quantity);
            total += pricePerProduct;
            setValueTotal(total);
        })
    }, [cart]);

    return (
        <div className={style.cart}>
            <h2 className={style.title}>Your Cart (0)</h2>
            {isEmpty ?
                <div className={style.containerEmpty}>
                    <img className={style.illustration} src={Illustration} alt="Ilustração" title='Ilustração' />
                    <p className={style.text}>Your added items will appear here</p>
                </div>
                :
                <div className={style.containerNotEmpty}>
                    <div className={style.productList}>
                        {cart.map((itemCart: any) => {
                            return (
                                <div className={style.productItem} key={itemCart.product.id}>
                                    <div className={style.productInfo}>
                                        <p className={style.productName}>{itemCart.product.name}</p>
                                        <div className={style.productQuantityAndPrice}>
                                            <span className={style.quantity}>{itemCart.quantity}x</span>
                                            <span className={style.pricePerUnit}><span className={style.at}>@</span>{itemCart.product.price.toFixed(2)}</span>
                                            <span className={style.totalPricePerProduct}>${(itemCart.product.price * itemCart.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className={style.productClose} onClick={() => removeFromCart(itemCart.product.id)}>
                                        <img className={style.icon} src={RemoveItem} alt="Remover item" title='Remover item' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.containerTotal}>
                        <div className={style.orderTotal}>
                            <p className={style.text}>Order Total</p>
                            <p className={style.total}>{valueTotal.toFixed(2)}</p>
                        </div>
                        <div className={style.carbonNeutral}>
                            <img src={CarbonNeutral} alt="Carbon Neutral" title='Carbon Neutral' className={style.icon} />
                            <p className={style.text}>This is a <span className={style.highlight}>carbon-neutral</span> delivery</p>
                        </div>
                        <button className={style.confirmOrder} onClick={() => openModal()}>Confirm Order</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart