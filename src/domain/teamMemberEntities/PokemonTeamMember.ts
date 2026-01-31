import { AbilityDto, ItemDto, MoveDto } from "../dataEntities";
import { PokemonType } from "../dataEntities/PokemonType";
import { NatureDto } from "./NatureDto";

export interface PokemonTeamMember {

    /* NOTA: No confundas el team_index_id, que es la posición que ocupa en el equipo con la de
    pokemon_data_id, que es la que contiene toda la info sobre el pokemón */

    team_index_id: number; 
    pokemon_data_id: number | null;
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
    move_list: (MoveDto | null)[];
    ability: AbilityDto | null;
    item: ItemDto | null;
    type_list: PokemonType[] | null;
    tera_type: PokemonType | null;
    nature: NatureDto;

}
