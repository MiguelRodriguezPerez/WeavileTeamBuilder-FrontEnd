import { AbilityDto } from "../../../../../domain/dataEntities";
import { PokemonType } from "../../../../../domain/enums";

/* La razón de ser de esta clase es recibir cada pokemonData del servidor
y mostrarlo en MissignoGrid sin cargar la lista de movimientos. Recuerda que 
la lista de movimientos la necesitaras en el contexto del menú del pokemón seleccionado */
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
    ability_list: AbilityDto[];

}