import { AxiosResponse } from "axios";
import { PokemonData } from "../../domain/dataEntities";
import { pokemonDataApi } from "./pokemonDataApi";

export const getPokemonByNameRequest = async (name: string): Promise<AxiosResponse<PokemonData>> => {
    const resultado = await pokemonDataApi.get(`/getPokemonByName/${name}`);
    return resultado;
}