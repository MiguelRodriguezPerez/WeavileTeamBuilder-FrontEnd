import { PokemonDataCache } from "../../api/pokemonData";

export const getPokemonDataCache = (id: number): PokemonDataCache => {
 
    const dataCache: (PokemonDataCache | null)[] = JSON.parse(localStorage.getItem('currentTeamPokemonData')!);
    return dataCache[id]!;
 
}