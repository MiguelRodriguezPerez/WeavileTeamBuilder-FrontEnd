import axios, { AxiosInstance } from "axios";

export const pokemonDataApi: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/pokemonData`,
    headers: {
        "Content-Type": 'application/json'
    }
})


