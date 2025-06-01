import { MoveType, PokemonType } from '../../../domain/enums';
import { PokemonTeamMember } from '../../../domain/teamMemberEntities/PokemonTeamMember';
import { getTypeEffectiveness } from '../typeInfo';


export const getPokemonCoveredTypes = (member: PokemonTeamMember): PokemonType[] => {
    let resultado: PokemonType[] = [];

    /* Los movs pueden ser null, tienes que filtrarlos primero. move?.move_type no sirve */
    member.move_list.filter(move => move && move.move_type !== MoveType.STATUS)
        .forEach(move => {
            resultado.push(...getTypeEffectiveness(move!.pokemon_type));
        });

    return Array.from(new Set(resultado));
}