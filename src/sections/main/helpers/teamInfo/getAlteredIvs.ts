import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import { toPascalCase } from "../../../../globalHelpers";

export const getAlteredIvs = (member: PokemonTeamMember) => {
 
    let resultado: string [] = [];
        const allIvs = Object.keys(member).filter(key => key.endsWith('_iv'));
    
        for (const ivKey in allIvs) {
            const value = member[ivKey as keyof PokemonTeamMember];
            if (typeof value === 'number' && value !== 31) {
                let statText = toPascalCase(ivKey.replace('_iv',''))!;
                resultado.push(statText + ' ' + value + '/');
            }
        }
    
        // resultado[resultado.length - 1] = resultado[resultado.length - 1].replace('/','') ;
    
        return resultado;
}