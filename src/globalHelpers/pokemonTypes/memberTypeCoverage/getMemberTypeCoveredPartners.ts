import { PokemonType } from "../../../domain/enums";
import { PokemonTeam, PokemonTeamMember } from "../../../domain/teamMemberEntities";
import { getTypeInmunities, getTypeResistances, getTypeWeaknesses } from "../typeInfo";

/* Se considera que un miembro cubre las debilidades de otro miembro cuando las debilidades 
de uno son las resistencias o inmunidades de otro */

/* Este método devuelve un map con los miembros que cubren al miembro a cubrir, 
así como los tipos que le cubren */

export const getMemberCoveredPartners = (member: PokemonTeamMember, team: PokemonTeam): Map<PokemonTeamMember, PokemonType[]> => {
 
    const resultado = new Map<PokemonTeamMember, PokemonType[]>();
    const memberWeakness = getTypeWeaknesses(member.type_list!);

    team.teamMembers.forEach((teamMember) => {
        let typeSet = new Set<PokemonType>();

        typeSet = new Set([
            ...typeSet,
            ...getTypeInmunities(teamMember.type_list!).filter((type) => memberWeakness.includes(type))
        ])

        typeSet = new Set([
            ...typeSet,
            ...getTypeResistances(teamMember.type_list!).filter((type) => memberWeakness.includes(type))
        ])

        resultado.set(teamMember,Array.from(typeSet))
    })

    /* Evita que el mismo miembro que se está evaluando se cubra a si mismo */
    resultado.delete(member);

    /* Elimina los miembros del equipo que no tengan tipos en value,
    y por tanto, no cubran al miembro seleccionado */
    for(const [key,value] of resultado) {
        if(value.length === 0) resultado.delete(key);
    }


    return resultado;
}