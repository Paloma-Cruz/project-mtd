import React, { useEffect, useState } from 'react';

// INTERFACE
import { Props } from './interface';

// STYLES
import style from './style.module.scss';

// HOOKS
import useDevice from '../../../../hooks/useDevice';

// IMAGES
import Cart from '/assets/images/icon-add-to-cart.svg';

// ICONS
import IconDecrement from '../IconDecrement';
import IconIncrease from '../IconIncrease';

// CONTEXT
import { useCart } from '../../../../context/CartContext';

const ProductSummary: React.FC<Props> = ({ product }: Props) => {

    const { deviceType } = useDevice();
    const [imageSelected, setImageSelected] = useState(product.image.desktop);
    const [quantitySelected, setQuantitySelected] = useState(0);
    const { addToCart, removeFromCart, cart } = useCart();

    useEffect(() => {
        if (deviceType === 'mobile') {
            setImageSelected(product.image.mobile);
        } else if (deviceType === 'tablet') {
            setImageSelected(product.image.tablet);
        } else {
            setImageSelected(product.image.desktop);
        }
    }, [deviceType]);

    useEffect(() => {
        if (quantitySelected === 0) {
            removeFromCart(product.id);
        } else {
            addToCart(product, quantitySelected);
        }
    }, [quantitySelected])

    useEffect(() => {
        const findProduct = cart.find((item) => item.product.id === product.id);
        if (!findProduct) {
            setQuantitySelected(0);
        }
    }, [cart])

    return (
        <article className={style.containerProduct}>
            <div className={style.stackProduct}>
                <img className={quantitySelected > 0 ? style.productImageSelected : style.productImage} src={imageSelected} alt={product.name} title={product.name} />
                {quantitySelected > 0 ? 
                    <div className={style.containerSelectedQuantity}>
                        <button className={style.buttonDecrement} onClick={() => setQuantitySelected(quantitySelected - 1)}>
                            <IconDecrement />
                        </button>
                        <p className={style.quantity}>{quantitySelected}</p>
                        <button className={style.buttonIncrease} onClick={() => setQuantitySelected(quantitySelected + 1)}>
                            <IconIncrease />
                        </button>
                    </div> 
                : 
                    <button className={style.addToCart} onClick={() => setQuantitySelected(quantitySelected + 1)}>
                        <img src={Cart} alt="Add to cart" title="Add to cart" className={style.icon} />
                        Add to Cart
                    </button>
                }
            </div>
            <p className={style.productCategory}>{product.category}</p>
            <h2 className={style.productName}>{product.name}</h2>
            <p className={style.productPrice}>${product.price.toFixed(2)}</p>
        </article>
    )
}

export default ProductSummary