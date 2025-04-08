import { AbilityData, MoveData } from '.'
import { PokemonType } from '../enums';

export interface PokemonDataDTO {

    name: string;

    front_default_sprite: string; // Sospechoso de fallar
    pc_sprite: string; // Sospechoso de fallar

    base_hp: number;
    base_attack: number;
    base_defense: number;
    base_special_attack: number;
    base_special_defense: number;
    base_speed: number;

    type_list: PokemonType[];
    ability_list: AbilityData[];
    move_list: MoveData[];

}
