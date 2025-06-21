import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import { getShowdownStatAbbreviation } from "../../../../globalHelpers/parsingHelpers";

export const getAlteredEvs = (member: PokemonTeamMember): string => {
    const allValidEvs = Object.entries(member).filter(([key,value]) => key.endsWith('_ev') && value > 0);

    if (allValidEvs.length === 0) return '';
    
    /* Estas obligado a declarar y usar el índice para modificar el array en el propio loop */
    allValidEvs.forEach((ev,index) => (
        /* special_attack_ev -> special_attack -> SpA */
        allValidEvs[index] = [ 
            getShowdownStatAbbreviation(ev[0].replace('_ev','')) , 
            ev[1] + ' /' 
        ]
    ))

    // Atk,252/,Def,32/,SpA,38/
    let resultado = allValidEvs.join();
    resultado = resultado.replace(/,/g,' ');
    resultado = resultado.slice(0, -1);
    
    return resultado;

}