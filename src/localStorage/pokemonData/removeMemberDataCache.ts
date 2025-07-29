import { PokemonDataCache } from "../../api/pokemonData";

export const removeMemberDataCache = (id: number): void => {
 
    const dataCache: (PokemonDataCache | null)[] = JSON.parse(localStorage.getItem('currentTeamPokemonData')!);
    dataCache[id] = null;

    localStorage.setItem('currentTeamPokemonData', JSON.stringify(dataCache));
}