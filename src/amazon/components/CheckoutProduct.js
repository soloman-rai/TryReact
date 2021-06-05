import React from 'react';

import '../assets/CheckoutProduct.css';
import { useStateValue } from '../context/StateProvider';


function CheckoutProduct({ id, title, price, rating, image }) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt={title} />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>

                <p className="checkoutProduct_price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
