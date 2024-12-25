import axios from "axios";
import { api, API_BASE_URL } from "../../config/apiConfig";
import {
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_FAILURE,
    FIND_PRODUCT_REQUEST,
    FIND_PRODUCT_SUCCESS
} from "./ActionType";

// Fetches products based on various filters
export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_REQUEST });

    const {
        color,
        size,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize
    } = reqData;

    try {
        console.log("sending request")
        const { data } = await axios.get(`${API_BASE_URL}/products`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            params: {
                color,
                size,
                minPrice,
                maxPrice,
                minDiscount,
                category,
                stock,
                sort,
                pageNumber,
                pageSize
            }
        });
        console.log("getting data")
        console.log(data)
        dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        if (error.response) {
            console.error("Error response:", error.response.data);
            console.error("Status:", error.response.status);
        } else if (error.request) {
            console.error("No response received:", error.request);
        } else {
            console.error("Error setting up request:", error.message);
        }
        dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
    }
};

// Fetches a single product by its ID
export const findProductById = ({ productId }) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    try {
        const { data } = await api.get(`/products/id/${productId}`);
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};
