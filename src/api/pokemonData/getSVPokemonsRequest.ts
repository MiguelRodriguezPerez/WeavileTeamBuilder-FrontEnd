import { AxiosResponse } from "axios";
import { MissignoDTO } from "../../sections/main/components/selectedPokemonMenu/missignoMenu/MissignoDTO";
import { pokemonDataApi } from "./";

export const getSVPokemonsRequest = async (): Promise<AxiosResponse<MissignoDTO[]>> => {
    
    const resultado = await pokemonDataApi.get('/allSVPokemon');
    return resultado;
}