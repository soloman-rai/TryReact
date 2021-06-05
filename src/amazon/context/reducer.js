export const initialState = {
    basket: [],
    user: null
};


export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}

// Reducer
const reducer = (state, action) => {
    // console.log(action); 
    switch (action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // Logic for Adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]  // return the state with updated basket item
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                // item exists in basket and remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove the product with ID ${action.id} since it has not been added to the basket.`)
            }

            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
        
}

export default reducer;