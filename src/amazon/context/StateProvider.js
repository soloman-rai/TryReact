

// Setting up the Context API

import { createContext, useReducer, useContext } from "react";

// this is the data layer
export const StateContext = createContext();


/// build a Provider to wrap the entire app
const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer(reducer, initialState) }>
        {children}
    </StateContext.Provider>
)

export default StateProvider;

// how we use this inside of the component
export const useStateValue = () => useContext(StateContext)