import { AbilityData, ItemData, MoveData } from "../dataEntities";
import { PokemonType } from "../enums";
import { NatureData } from "./NatureData";

export interface PokemonTeamMember {
    id: number;
    name: string;
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
  
    pkmn_team_move_list: MoveData[];
    ability: AbilityData;
    item?: ItemData;
    type_list: PokemonType[];
    tera_type?: PokemonType;
    nature: NatureData;
  }
  