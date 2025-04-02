import { AxiosResponse } from "axios";
import { MissignoDTO } from "../sections/main/components/selectedPokemonMenu/missignoMenu/MissignoDTO";
import { PokemonDataApi } from "./PokemonDataApi";

export const getSVPokemonsRequest = async (): Promise<AxiosResponse<MissignoDTO[]>> => {
    const resultado = await PokemonDataApi.get('/allSVPokemon');
    return resultado;
}