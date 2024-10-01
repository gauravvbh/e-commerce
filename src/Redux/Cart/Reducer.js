import {
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS
} from "./ActionType";

const initialState = {
    cart: null, // This will hold the entire cart object including cartItems
    loading: false,
    error: null,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST:
            return { ...state, loading: true, error: null };

        case ADD_ITEM_TO_CART_SUCCESS:
            // Merge new cartItems into the existing cart
            return {
                ...state,
                loading: false,
                cart: {
                    ...state.cart,
                    cartItems: action.payload.cartItems // Assuming action.payload contains the updated cart object
                }
            };

        case ADD_ITEM_TO_CART_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case GET_CART_REQUEST:
            return { ...state, loading: true, error: null };

        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload // Assuming action.payload contains the entire cart object 
            };

        case GET_CART_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return { ...state, loading: true, error: null };

        case REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.filter(item => item._id !== action.payload._id) // Adjust to match the correct identifier
                }
            };

        case UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.map(item =>
                        item._id === action.payload._id ? action.payload : item
                    )
                }
            };

        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};