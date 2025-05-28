import { AxiosResponse } from "axios";
import { TeamType } from '../../../../domain/enums/TeamType';
import { PokemonTeam } from "../../../../domain/teamMemberEntities/PokemonTeam";
import { PokemonTeamApi } from "./PokemonTeamApi";

// No soportar distintos tipos equipos pokemón
export const createNewTeamRequest = async (): Promise<AxiosResponse<PokemonTeam>> => {

    /* Recuerda que mediante el uso de try-catch puedes definir que ocurre si devuelves
    un código 4XX sin necesidad de comerte el error */

    
    const resultado = await PokemonTeamApi.post('/createNewTeam');
    return resultado;

}