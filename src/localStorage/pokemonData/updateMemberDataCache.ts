import { PokemonDataDTO } from "../../domain/dataEntities";
import { convertPokemonDtoToDataCache } from "./convertPokemonDtoToDataCache";
import { PokemonDataCache } from "../../domain/dataEntities/PokemonDataCache";
import { generateNullPokemonDataCache } from "./generateNullPokemonDataCache";

export const updateMemberDataCache = (id: number, dto: PokemonDataDTO): void => {

    const dataCache: (PokemonDataCache | null)[] = JSON.parse(localStorage.getItem('currentTeamPokemonData')!);

    dataCache[id] = convertPokemonDtoToDataCache(dto);
    localStorage.setItem('currentTeamPokemonData', JSON.stringify(dataCache));

}