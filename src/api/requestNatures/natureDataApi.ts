import axios, { AxiosInstance } from "axios";

export const natureDataApi: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/natureData`,
    headers: {
        'Content-Type': 'application/json'
    }
})

