import { PokemonDataDTO } from "../../domain/dataEntities";
import { PokemonDataCache } from '../../domain/dataEntities/PokemonDataCache';

export const convertPokemonDtoToDataCache = (dto: PokemonDataDTO): PokemonDataCache => {

    const resultado: PokemonDataCache = {
        name: dto.name,
        move_list: dto.move_list,
        ability_list: dto.ability_list
    }

    return resultado;
}