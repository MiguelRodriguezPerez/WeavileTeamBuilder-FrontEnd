import { PokemonTeamMember } from "../../../../../../../../domain/teamMemberEntities";

export type IvKey = keyof Pick<PokemonTeamMember,
  'hp_iv' |
  'attack_iv' |
  'defense_iv' |
  'special_attack_iv' |
  'special_defense_iv' |
  'speed_iv'
>;