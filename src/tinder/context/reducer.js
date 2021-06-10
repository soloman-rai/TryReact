export const initialState = {
    user: null,
    userDetails: null,
};


// Reducer
const reducer = (state, action) => {
    // console.log(action); 
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_USER_DETAILS':
            return {
                ...state,
                userDetails: action.userDetails
            };
        default:
            return state;
    }
        
}

export default reducer;