import axios, { AxiosInstance } from "axios";

export const natureDataApi: AxiosInstance = axios.create({
    baseURL: 'http://localhost:9002/natureData',
    headers: {
        'Content-Type': 'application/json'
    }
})

