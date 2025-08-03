import { AbilityData, MoveData } from ".";

export interface PokemonDataCache {

    name: string,
    move_list: MoveData[],
    ability_list: AbilityData[]

}