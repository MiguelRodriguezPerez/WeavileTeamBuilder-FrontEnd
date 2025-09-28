import { AxiosResponse } from "axios";
import { PokemonDataDTO } from "../../domain/dataEntities";
import { pokemonDataApi } from "./pokemonDataApi";

export const getPokemonByNameRequest = async (name: string): Promise<AxiosResponse<PokemonDataDTO>> => {    
    const resultado = await pokemonDataApi.get(`/getPokemonByName/${name}`);

    console.log(resultado.data);
    
    return resultado;
}