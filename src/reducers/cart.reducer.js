export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export const actionTypes = {
    ADD_ACTION_TYPE: 'ADD_TO_CART',
    REMOVE_ACTION_TYPE: 'REMOVE_FROM_CART',
    CLEAR_ACTION_TYPE: 'CLEAR_CART',
}

export const updateLocalStorage = state => {
    localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
    [actionTypes.ADD_ACTION_TYPE]: (state, action) => {
        const { id } = action.payload
        const productInCardIndex = state.findIndex(item => item.id === id)            
        if(productInCardIndex >= 0){
            const newState = structuredClone(state)
            newState[productInCardIndex].quantity += 1
            updateLocalStorage(newState)
            return newState
        }
        
        const newState = [
            ...state,
            {
                ...action.payload,
                quantity: 1
            }
        ]
        updateLocalStorage(newState)
        return newState
    },
    [actionTypes.REMOVE_ACTION_TYPE]: (state, action) => {
        const { id } = action.payload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
    },
    [actionTypes.CLEAR_ACTION_TYPE]: () => {
        updateLocalStorage([])
        return []
    }
}


export const cartReducer = (state, action) => {
    const { type: actionType } = action

    const updateState =  UPDATE_STATE_BY_ACTION[actionType]

    return updateState? updateState(state, action) : state
}