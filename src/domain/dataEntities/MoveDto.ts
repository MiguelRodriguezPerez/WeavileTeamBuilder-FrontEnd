import { MoveType } from "../enums";
import { PokemonType } from "./PokemonType";

export interface MoveDto {

    name: string;
    move_type: MoveType;
    pokemon_type: PokemonType;
    accuracy: number;
    power: number;
    description: string;
    pp: number;

}  