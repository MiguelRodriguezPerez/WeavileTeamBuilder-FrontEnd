import { CalculatedStats, PokemonTeamMember } from "../domain/teamMemberEntities";
import { PokemonTeamMemberKey } from "../domain/types";
import { CalculatedStatsKey } from '../domain/types/CalculatedStatsKey';

// Asume que todos los pokemón están al nivel 100

export const calculatePokemonStats = (member: PokemonTeamMember) => {
 
    let resultado: CalculatedStats = {
        final_hp: 0,
        final_attack: 0,
        final_defense: 0,
        final_special_attack: 0,
        final_special_defense: 0,
        final_speed: 0,
    };
    
    for(let resultadoStat in resultado) {
        const baseMemberKey: string = resultadoStat.replace('final','base') ;
        const ivMemberKey: string = resultadoStat.replace('final_','').concat('_iv');
        const evMemberKey: string = resultadoStat.replace('final_','').concat('_ev');

        resultado[resultadoStat as CalculatedStatsKey] = Math.trunc(
            (2 * member[baseMemberKey as PokemonTeamMemberKey] 
                + member[ivMemberKey as PokemonTeamMemberKey] 
                + (member[evMemberKey as PokemonTeamMemberKey] / 4)) + 5
        );
        
    }
    
    resultado.final_hp = resultado.final_hp - 5 + 100 + 10;

    const { nature } = member;

    if(nature.increased_stat !== '') {
        let natureKey: string = 'final_' + nature.increased_stat
        resultado[natureKey as CalculatedStatsKey] = resultado[natureKey as CalculatedStatsKey] * 1.1;


        natureKey = 'final_' + nature.decreased_stat
        resultado[natureKey as CalculatedStatsKey] = resultado[natureKey as CalculatedStatsKey] / 1.1;
    }

    return resultado;
}