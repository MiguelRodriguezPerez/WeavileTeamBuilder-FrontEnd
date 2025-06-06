import { PokemonType } from "../../../../domain/enums";
import { PokemonTeam, PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import { getMemberInmunities, getMemberResistances, getMemberWeakness } from "../../../../globalHelpers/pokemonTypes/memberTypeInteractions";


export const getWeaknessCoveredToTeamMembers = (member: PokemonTeamMember, team: PokemonTeam): Map<PokemonTeamMember, PokemonType[]> => {

  const result = new Map<PokemonTeamMember, PokemonType[]>();

    const memberResistances: PokemonType[] = [
      ...getMemberResistances(member.type_list!),
      ...getMemberInmunities(member.type_list!),
    ];

    for (const teammate of team.teamMembers) {
        if (teammate === member) continue; // No te compares contigo mismo

        const coveredWeaknesses = getMemberWeakness(teammate.type_list!)
          .filter(weaknessType => memberResistances.includes(weaknessType));

        if (coveredWeaknesses.length > 0) result.set(teammate, coveredWeaknesses);
    }

  return result;
};
