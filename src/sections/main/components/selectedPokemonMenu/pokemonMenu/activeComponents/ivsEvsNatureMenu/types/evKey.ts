import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";

export type EvKey = keyof Pick<PokemonTeamMember,
  'hp_ev' |
  'attack_ev' |
  'defense_ev' |
  'special_attack_ev' |
  'special_defense_ev' |
  'speed_ev'
>;
