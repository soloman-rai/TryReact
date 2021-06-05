import React from 'react';

import Nav from './Nav';
import { useStateValue } from '../context/StateProvider';
import '../assets/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <>
            <Nav />
            <div className="checkout">  
                <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="Checkout Ad" />    
                
                {basket?.length === 0 ? (
                    <div> 
                        <h2>Your Shopping Basket is empty</h2> 
                        <p>
                            You have no items in your basket. To buy one or more items browse through the items and click on "Add to Basket" button.
                        </p>
                    </div>
                ) : (
                    <div> 
                            <h2 className="checkout_title">Your Shopping Basket</h2> 
                            {basket.map((item) => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            ))}
                    </div>
                )}
                </div>
                
                
                {basket.length > 0 && (
                    <div className="checkout_right">
                        <Subtotal />
                    </div>
                    ) 
                }
            </div>
            
        </>
    )
}

export default Checkout
