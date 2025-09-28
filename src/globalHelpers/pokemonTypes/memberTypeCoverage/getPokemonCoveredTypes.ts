import { MoveType, PokemonTypeEnum } from '../../../domain/enums';
import { PokemonTeamMember } from '../../../domain/teamMemberEntities/PokemonTeamMember';
import { getTypeEffectiveness } from '../typeInfo';
import { getPokemonTypeEnumFromEntity } from './getPokemonTypeEnumFromEntity';


export const getPokemonCoveredTypes = (member: PokemonTeamMember): PokemonTypeEnum[] => {
    let resultado: PokemonTypeEnum[] = [];

    /* Los movs pueden ser null, tienes que filtrarlos primero. move?.move_type no sirve */

    member.move_list.filter(move => move && move.move_type !== MoveType.STATUS)
        .forEach(move => {
            resultado.push(...getTypeEffectiveness(
                getPokemonTypeEnumFromEntity(
                    move!.pokemon_type
                )
            ));
        });

    return Array.from(new Set(resultado));
}