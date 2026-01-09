import { AxiosResponse } from "axios";
import { MissignoDTO } from "../../sections/main/components/selectedPokemonMenu/missignoMenu/MissignoDTO";
import { pokemonDataApi } from "./";

export const getSVPokemonsRequest = async (): Promise<AxiosResponse<MissignoDTO[]>> => {
    console.log(import.meta.env.VITE_SERVER_URL);
    const resultado = await pokemonDataApi.get('/allSVPokemon');
    console.log(resultado);
    
    return resultado;
}