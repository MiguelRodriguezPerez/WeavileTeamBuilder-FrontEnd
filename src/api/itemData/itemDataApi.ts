import axios, { AxiosInstance } from "axios";

export const itemDataApi: AxiosInstance = axios.create({
    baseURL : 'http://localhost:9002/itemData',
    headers : {
        'Content-Type' : 'application/json'
    },
});