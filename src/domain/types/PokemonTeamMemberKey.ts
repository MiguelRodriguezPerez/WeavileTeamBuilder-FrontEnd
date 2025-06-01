import { PokemonTeamMember } from "../teamMemberEntities";

export type PokemonTeamMemberKey = keyof Pick<PokemonTeamMember,
  | 'base_hp'
  | 'base_attack'
  | 'base_defense'
  | 'base_special_attack'
  | 'base_special_defense'
  | 'base_speed'
  | 'hp_ev'
  | 'attack_ev'
  | 'defense_ev'
  | 'special_attack_ev'
  | 'special_defense_ev'
  | 'speed_ev'
  | 'hp_iv'
  | 'attack_iv'
  | 'defense_iv'
  | 'special_attack_iv'
  | 'special_defense_iv'
  | 'speed_iv'
>;
