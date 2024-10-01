import { CREATE_PAYMENT_SUCCESS } from "./ActionType"

const initialState = {
    paymentId: {},
}


export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PAYMENT_SUCCESS:
            return { ...state, paymentId: action.payload }
        default:
            return state
    }
}