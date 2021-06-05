import React from 'react';

import '../assets/Subtotal.css';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../context/reducer';


function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            <>
                <p>
                    Subtotal ({basket.length} items): <strong>Rs {getBasketTotal(basket)}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> 
                    This order contains a gift
                </small>
            </>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
