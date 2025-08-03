import { MoveType, PokemonType } from "../enums";

export interface MoveDto {

    name: string;
    move_type: MoveType;
    pokemon_type: PokemonType;
    accuracy: number;
    power: number;
    description: string;
    pp: number;

}  