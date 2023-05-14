import { useReducer } from "react";

import { cartReducer, cartInitialState, actionTypes } from "../reducers/cart.reducer";

export function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const {ADD_ACTION_TYPE, REMOVE_ACTION_TYPE, CLEAR_ACTION_TYPE} = actionTypes

    const addToCart = product => dispatch({
        type: ADD_ACTION_TYPE,
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: REMOVE_ACTION_TYPE,
        payload: product
    })

    const clearCart = () => dispatch({
        type: CLEAR_ACTION_TYPE,
    })

    return { state, addToCart, removeFromCart, clearCart }
}