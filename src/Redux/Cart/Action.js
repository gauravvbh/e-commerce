import { toast } from "react-toastify";
import { api } from "../../config/apiConfig";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });
    try {
        const { data } = await api.get('/cart');
        dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message });
    }
};

// In your action creators
export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    try {
        const { data } = await api.put('/cart/add', reqData);
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
        dispatch(getCart());
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
        if (error.response.statusText === "Unauthorized") {
            toast.error("Please login to add items to cart");
        }
    }
};


export const removeItemFromCart = (cartItemId) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    try {
        const { data } = await api.delete(`/cart_items/${cartItemId}`);
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: data });
        dispatch(getCart());
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
    }
}


export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    try {
        const { data } = await api.put(`/cart_items/${reqData.cartItemId}`, reqData);
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
        dispatch(getCart());
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
    }
}