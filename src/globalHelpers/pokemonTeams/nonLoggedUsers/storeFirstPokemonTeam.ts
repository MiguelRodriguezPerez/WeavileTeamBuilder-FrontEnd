import { PokemonTeam } from '../../../../domain/teamMemberEntities/PokemonTeam';

export const storeFirstPokemonTeam = (argTeam: PokemonTeam): PokemonTeam => {
    argTeam.name = 'Unamed0';

    localStorage.setItem((0).toString(), JSON.stringify(argTeam));
    return JSON.parse(localStorage.getItem(argTeam.id.toString())!) as PokemonTeam;

}