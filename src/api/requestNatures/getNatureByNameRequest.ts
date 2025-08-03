import { AxiosResponse } from "axios";
import { natureDataApi } from "./natureDataApi"
import { NatureDto } from "../../domain/teamMemberEntities";

export const getNatureByNameRequest = async (name: string): Promise<AxiosResponse<NatureDto>> => {

    const resultado = await natureDataApi.get(`/getNatureByName/${name}`);
    return resultado;

}