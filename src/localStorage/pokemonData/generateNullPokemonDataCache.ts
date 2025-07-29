import { PokemonDataCache } from "../../domain/dataEntities/PokemonDataCache"

export const generateNullPokemonDataCache = (): void => {

    const dataCache: (PokemonDataCache | null)[] = [null, null, null, null, null, null];
    localStorage.setItem('currentTeamPokemonData', JSON.stringify(dataCache));

}