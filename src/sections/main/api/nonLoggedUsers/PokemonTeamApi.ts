import axios, { AxiosInstance } from "axios";

export const PokemonTeamApi : AxiosInstance = axios.create({
    baseURL : `${import.meta.env.VITE_SERVER_URL}/nonLoggedUsers/pokemonTeam`,
    headers: {
        "Content-Type" : "application/json"
    },
    // TODO: Solicitudes persistidas en BD
})

