const initialState = {
    user: null,
    error: null,
    loading: false,
    jwt: localStorage.getItem("token") || null
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
        case 'REGISTER_REQUEST':
        case 'GET_USER_REQUEST':
            return {
                ...state,
                error: null,
                loading: true,
            }
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                error: null,
                loading: false,
                jwt: action.payload
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                error: null,
                loading: false,
                user: action.payload
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            }
        case 'LOGOUT':
            return initialState
        default:
            return state
    }
}