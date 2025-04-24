import { AbilityData, ItemData, MoveData } from "../dataEntities";
import { PokemonType } from "../enums";
import { NatureData } from "./NatureData";

export interface PokemonTeamMember {

    id: number; //Haz que se base en la posición del array
    name: string | null;

    front_default_sprite: string | null; // Sospechoso de fallar
    pc_sprite: string | null; // Sospechoso de fallar

    base_hp: number;
    base_attack: number;
    base_defense: number;
    base_special_attack: number;
    base_special_defense: number;
    base_speed: number;

    hp_ev: number;
    attack_ev: number;
    defense_ev: number;
    special_attack_ev: number;
    special_defense_ev: number;
    speed_ev: number;

    hp_iv: number;
    attack_iv: number;
    defense_iv: number;
    special_attack_iv: number;
    special_defense_iv: number;
    speed_iv: number;

    /* Al borrar movimientos en el cliente tienes que permitir 
    que los elementos del array puedan ser null */
    move_list: ( MoveData | null )[]; 
    ability: AbilityData | null;
    item: ItemData | null;
    type_list: PokemonType[] | null;
    tera_type: PokemonType | null;
    nature: NatureData | null;

}
