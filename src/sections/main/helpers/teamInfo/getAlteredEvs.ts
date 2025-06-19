import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import { toPascalCase } from "../../../../globalHelpers";

export const getAlteredEvs = (member: PokemonTeamMember): string[] => {
 
    let resultado: string [] = [];
    const allEvs = Object.keys(member).filter(key => key.endsWith('_ev'));

    for (const evKey in allEvs) {
        const value = member[evKey as keyof PokemonTeamMember];
        if (typeof value === 'number' && value > 0) {
            let statText = toPascalCase(evKey.replace('_ev',''))!;
            resultado.push(statText + ' ' + value + '/');
        }
    }

    // resultado[resultado.length - 1] = resultado[resultado.length - 1].replace('/','');

    return resultado;
}