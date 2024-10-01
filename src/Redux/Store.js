import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { paymentReducer } from "./Payment/Reducer";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: customerProductReducer,
        cart: cartReducer,
        order: orderReducer,
        payment: paymentReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});