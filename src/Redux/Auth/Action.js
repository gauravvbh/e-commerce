import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { toast } from "react-toastify";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (token) => ({ type: REGISTER_SUCCESS, payload: token });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;
        if (user.token) {
            localStorage.setItem('token', user.token);
        }
        // dispatch({ type: 'REGISTER_SUCCESS', payload: user });
        dispatch(registerSuccess(user.token));
        toast.success(user.message, {
            autoClose: 2000,
            pauseOnHover: false,
        });

    } catch (error) {
        
        dispatch(registerFailure(error.response.data.error));
        toast.error(error.response.data.error, {
            autoClose: 2000,
            pauseOnHover: false,
        });
    }
}


const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const user = response.data;
        if (user.token) {
            localStorage.setItem('token', user.token);
        }
        toast.success(user.message, {
            autoClose: 2000,
            pauseOnHover: false,
        });
        dispatch(loginSuccess(user.token));

    } catch (error) {
        toast.error(error.response.data.error, {
            autoClose: 2000,
            pauseOnHover: false,
        });
        dispatch(loginFailure(error.message));
    }
}


const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/users/profile`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const user = response.data;
        dispatch(getUserSuccess(user));

    } catch (error) {
        dispatch(getUserFailure(error.message));
    }
}


export const logout = () => async (dispatch) => {
    localStorage.clear();
    toast.success("Logged out successfully", {
        autoClose: 2000,
        pauseOnHover: false,
    });
    dispatch({ type: LOGOUT, payload: null });
}