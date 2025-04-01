import { AxiosResponse } from "axios";
import { PokemonData } from "../domain/dataEntities";
import { PokemonDataApi } from "./PokemonDataApi";

export const getSVPokemonsRequest = async (): Promise<AxiosResponse<PokemonData[]>> => {
    const resultado = await PokemonDataApi.get('/allSVPokemon');
    return resultado;
}