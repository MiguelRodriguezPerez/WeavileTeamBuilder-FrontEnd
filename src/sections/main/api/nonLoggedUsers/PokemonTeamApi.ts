import axios, { AxiosInstance } from "axios";

export const PokemonTeamApi : AxiosInstance = axios.create({

    baseURL : 'http://localhost:9002/nonLoggedUsers/pokemonTeam',
    headers: {
        "Content-Type" : "application/json"
    },
    // TODO: Solicitudes persistidas en BD
})