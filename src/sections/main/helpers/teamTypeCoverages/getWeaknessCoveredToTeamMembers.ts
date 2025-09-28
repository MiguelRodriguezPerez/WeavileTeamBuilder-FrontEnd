import { PokemonTypeEnum } from "../../../../domain/enums";
import { PokemonTeam, PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import { getPokemonTypeEnumFromEntity } from "../../../../globalHelpers/pokemonTypes/memberTypeCoverage";
import { getMemberInmunities, getMemberResistances, getMemberWeakness } from "../../../../globalHelpers/pokemonTypes/memberTypeInteractions";


export const getWeaknessCoveredToTeamMembers = (member: PokemonTeamMember, team: PokemonTeam): Map<PokemonTeamMember, PokemonTypeEnum[]> => {

  const result = new Map<PokemonTeamMember, PokemonTypeEnum[]>();

  const memberResistances: PokemonTypeEnum[] = [
      ...getMemberResistances(
        member.type_list!
      ),
      ...getMemberInmunities(
        member.type_list!
      ),
    ];


  for (const teammate of team.teamMembers) {
    if (teammate === member) continue; // No te compares contigo mismo

    const coveredWeaknesses = getMemberWeakness(member.type_list!)
      .filter(weaknessType => memberResistances.includes(weaknessType));

    if (coveredWeaknesses.length > 0) result.set(teammate, coveredWeaknesses);
  }

  return result;
};
