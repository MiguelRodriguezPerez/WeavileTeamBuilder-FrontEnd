import { AbilityData } from "../../../../../domain/dataEntities";
import { PokemonType } from "../../../../../domain/enums";

export interface MissignoDTO {

    id: number;
    name: string;

    pc_sprite: string; // Sospechoso de fallar

    base_hp: number;
    base_attack: number;
    base_defense: number;
    base_special_attack: number;
    base_special_defense: number;
    base_speed: number;

    type_list: PokemonType[];
    ability_list: AbilityData[];
        
}