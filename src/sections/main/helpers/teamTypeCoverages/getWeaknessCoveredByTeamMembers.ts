import { PokemonType } from "../../../../domain/enums";
import { PokemonTeam, PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import { getMemberInmunities, getMemberResistances, getMemberWeakness } from "../../../../globalHelpers/pokemonTypes/memberTypeInteractions";

/* Se considera que un miembro cubre las debilidades de otro miembro cuando las debilidades 
de uno son las resistencias o inmunidades de otro */

/* Este método devuelve un map con los miembros que cubren al miembro a cubrir, 
así como los tipos que le cubren */

export const getWeaknessCoveredByTeamMembers = (member: PokemonTeamMember, team: PokemonTeam): Map<PokemonTeamMember, PokemonType[]> => {

  const memberWeaknesses = getMemberWeakness(member.type_list!);
  const result = new Map<PokemonTeamMember, PokemonType[]>();

  for (const teammate of team.teamMembers) {
        if (teammate === member) continue; // Evitar compararse consigo mismo

        const resistances = getMemberResistances(teammate.type_list!);
        const immunities = getMemberInmunities(teammate.type_list!);

        const covers = [...resistances, ...immunities].filter(type =>
        memberWeaknesses.includes(type)
        );

        if (covers.length > 0) result.set(teammate, covers);
  }

  return result;
};