import React from 'react';

import '../assets/Product.css';
import { useStateValue } from '../context/StateProvider';


function Product({ id, title, image, price, rating }) {
    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        // add Item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product_info">
                <p className="product_title">{title}</p>
                <p className="product_price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} className="product_image" alt={`Product ${id}`} />
            <button onClick={addToBasket} className="product_buttonAdd">Add to Basket</button>
        </div>
    )
}

export default Product
