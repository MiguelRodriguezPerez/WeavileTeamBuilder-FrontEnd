import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";

export const getMemberEvsSpent = ( member: PokemonTeamMember) => {
 
    let resultado: number = 0;

    Object.entries(member)
        .filter(([ key ]) => key.endsWith('_ev'))
        .map(([key,value]) => resultado += value);
 
    return resultado;
}