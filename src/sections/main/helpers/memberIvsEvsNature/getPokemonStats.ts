import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";

export const getPokemonStats = (data: PokemonTeamMember) => {
    return {
      base_hp: data.base_hp,
      base_attack: data.base_attack,
      base_defense: data.base_defense,
      base_special_attack: data.base_special_attack,
      base_special_defense: data.base_special_defense,
      base_speed: data.base_speed,
    };
}
