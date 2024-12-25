import { api } from "../../config/apiConfig";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_REQUEST } from "./ActionType";

export const createPayment = (orderId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.post(`/payment/${orderId}`);
        dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data.paymentLinkId });
        if (data.payment_link_url) {
            window.location.href = data.payment_link_url;
        }
    } catch (error) {
        console.log("Error of createPayment", error);
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
}


export const updatePaymentInfo = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.get(`/payment`, {
            params: {
                payment_id: reqData.paymentId,
                order_id: reqData.orderId
            }
        });
    } catch (error) {
        console.log("Error of updatePaymentInfo", error);
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
}
