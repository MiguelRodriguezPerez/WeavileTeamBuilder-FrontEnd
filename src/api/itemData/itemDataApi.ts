import axios, { AxiosInstance } from "axios";

export const itemDataApi: AxiosInstance = axios.create({
    baseURL : `${import.meta.env.VITE_SERVER_URL}/itemData`,
    headers : {
        'Content-Type' : 'application/json'
    },
});