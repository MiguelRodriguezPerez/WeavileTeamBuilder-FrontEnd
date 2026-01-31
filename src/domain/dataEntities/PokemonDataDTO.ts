import { AbilityDto, MoveDto } from '.';
import { PokemonType } from './PokemonType';

export interface PokemonDataDto {

    id: number;
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
    ability_list: AbilityDto[];
    move_list: MoveDto[];

}
