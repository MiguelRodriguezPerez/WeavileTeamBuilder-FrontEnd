import { AbilityDto, MoveDto } from ".";

export interface PokemonDataCache {

    name: string,
    move_list: MoveDto[],
    ability_list: AbilityDto[]

}