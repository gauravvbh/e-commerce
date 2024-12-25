import axios from "axios";


export const API_BASE_URL = "http://localhost:3000/api";

// export const API_BASE_URL = import.meta.env.VITE_API_URL;


console.log("token")
console.log(localStorage.getItem('token'))

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json"
    }
});