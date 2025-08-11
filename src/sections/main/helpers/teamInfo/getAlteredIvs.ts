import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import { getShowdownStatAbbreviation } from "../../../../globalHelpers/parsingHelpers";

export const getAlteredIvs = (member: PokemonTeamMember): string => {
    const allValidIvs = Object.entries(member).filter(
        ([key, value]) => key.endsWith('_iv') && value !== 31
    );

    if (allValidIvs.length === 0) return '';

    allValidIvs.forEach((iv, index) => {
        allValidIvs[index] = [ 
            getShowdownStatAbbreviation(iv[0].replace('_iv','')) , 
            iv[1] + ' /' 
        ]
    });

    let resultado = allValidIvs.join();
    resultado = resultado.replace(/,/g, ' ');
    resultado = resultado.slice(0, -1); // elimina el último espacio o slash

    return resultado;
};
