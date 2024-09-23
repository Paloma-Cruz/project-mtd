import React, { useEffect, useState } from 'react'

// STYLES
import style from './style.module.scss';

// CONTEXT
import { useCart } from '../../context/CartContext';

// ICONS
import SucessIcon from '/assets/images/icon-order-confirmed.svg';

const Modal: React.FC = () => {
    const { modalOpened, clearCart, cart } = useCart();
    const [valueTotal, setValueTotal] = useState(0);

    useEffect(() => {
        const body = document.querySelector('body');
        if (modalOpened) {
            body!.style.overflow = 'hidden';
        } else {
            body!.style.overflow = 'auto';
        }
    }, [modalOpened])

    useEffect(() => {
        let total = 0;
        cart.forEach((itemCart: any) => {
            const pricePerProduct = (itemCart.product.price * itemCart.quantity);
            total += pricePerProduct;
            setValueTotal(total);
        })
    }, [cart]);

    if (modalOpened) {
        return (
            <div>
                <div className={style.overlayModal}>
                    <div className={style.modal}>
                        <img src={SucessIcon} alt="Sucesso" title='Sucesso' className={style.sucessIcon} />
                        <h3 className={style.titleModal}>Order Confirmed</h3>
                        <p className={style.textModal}>We hope you enjoy your food!</p>

                        <div className={style.productList}>
                            {cart.map((itemCart: any) => {
                                return (
                                    <div className={style.productItem} key={itemCart.product.id}>
                                        <img className={style.thumbnail} src={itemCart.product.image.thumbnail} alt={itemCart.product.name} title={itemCart.product.name} />
                                        <div className={style.productInfo}>
                                            <p className={style.productName}>{itemCart.product.name}</p>
                                            <div className={style.productQuantityAndPriceUnit}>
                                                <span className={style.quantity}>{itemCart.quantity}x</span>
                                                <span className={style.pricePerUnit}><span className={style.at}>@</span>{itemCart.product.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <span className={style.totalPricePerProduct}>${(itemCart.product.price * itemCart.quantity).toFixed(2)}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={style.orderTotal}>
                            <p className={style.text}>Order Total</p>
                            <p className={style.total}>${valueTotal.toFixed(2)}</p>
                        </div>
                        <button className={style.newOrder} onClick={() => clearCart()}>Start New Order</button>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <></>
    )
}

export default Modal