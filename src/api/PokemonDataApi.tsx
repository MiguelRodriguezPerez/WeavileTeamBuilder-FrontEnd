import axios, { AxiosInstance } from "axios";

export const PokemonDataApi: AxiosInstance = axios.create({
    baseURL : 'http://localhost:9002/pokemonData',
    headers : {
        "Content-Type" : 'application/json'
    }
})