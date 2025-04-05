import { AxiosResponse } from "axios";
import { natureDataApi } from "./natureDataApi"
import { NatureData } from "../../domain/teamMemberEntities";

export const getNatureByNameRequest = async (name: string): Promise<AxiosResponse<NatureData>> => {

    const resultado = await natureDataApi.get(`/getNatureByName/${name}`);
    return resultado;

}